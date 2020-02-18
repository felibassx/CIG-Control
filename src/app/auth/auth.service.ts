import { Injectable } from '@angular/core';

// Libs
import { map, filter } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';
import { User } from '../models/user.model';
import Swal from 'sweetalert2';
import { AngularFirestore } from '@angular/fire/firestore';
import { ROLES } from '../utils/const.utils';
import { Router } from '@angular/router';
import { Subscription, pipe } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../app.reducer';
import * as fromShared from '../shared/ui.action';
import * as fromAuth from './auth.actions';
import { HttpClient } from '@angular/common/http';
import { Menu } from '../models/menu.model';

export interface Item { name: string; }

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  fbProvider = new firebase.auth.FacebookAuthProvider();
  gooProvider = new firebase.auth.GoogleAuthProvider();

  private userSubscripcion: Subscription = new Subscription();
  private menuSubscripcion: Subscription = new Subscription();
  private user: User;
  private menus: Array<Menu> = [];

  constructor(
    private afAuth: AngularFireAuth,
    private afDB: AngularFirestore,
    private router: Router,
    private store: Store<AppState>,
    private httpClient: HttpClient
  ) { }

  // Esta funcion estará escuchando cuando el estado del usuario cambie 
  initAuthListener() {

    this.store.dispatch( new fromShared.ActivarLoadingAction() );

    this.afAuth.authState.subscribe((fbUser: firebase.User) => {
      if (fbUser) {
        this.userSubscripcion = this.afDB.doc(`${fbUser.uid}/user`).valueChanges()
          .subscribe((usuarioObj: any) => {
            const newUser = new User(usuarioObj);
            
            this.menus = [];
            this.menuSubscripcion = this.httpClient.get(`https://cig-control-ee8ab.firebaseio.com/menus.json`)
              .subscribe(
                (resp: Menu[]) => {
                  resp.forEach((menu, index) => {

                    console.log(menu.role, usuarioObj.role);
                    if (menu.role === usuarioObj.role) {
                      this.menus.push({...menu});
                    }
                  });
                  this.store.dispatch(new fromAuth.SetUserAction(newUser, this.menus));
                  this.user = newUser;
                  this.store.dispatch(new fromShared.DesactivarLoadingAction());
                }
              );

          });

        
      } else {
        this.user = null;
        this.userSubscripcion.unsubscribe();
        this.menuSubscripcion.unsubscribe();
        this.store.dispatch(new fromShared.DesactivarLoadingAction());
      }
    });
    
  }

  login(email: string, password: string, remember: boolean) {

    // this.store.dispatch( new ActivarLoadingAction() );

    if ( remember ) {
      localStorage.setItem( 'email',  email );
    } else {
      localStorage.removeItem( 'email' );
    }

    this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then(
        resp => {
          this.store.dispatch( new fromShared.DesactivarLoadingAction() );
          this.router.navigate(['/']);
          // console.log('LOGIN OK', resp);
        }
      )
      .catch(err => {
        Swal.fire(
          'Error Login',
          'Se ha producido un error al intentar autenticar en la aplicación. Detalle: ' + err,
          'error'
        );
      });
  }

  logout() {
    this.router.navigate(['/login']);
    this.afAuth.auth.signOut();
    this.store.dispatch( new fromAuth.UnsetUserAction() );
  }

  isAuth() {
    return this.afAuth.authState
      .pipe(
        map(fbUser => {

          if (fbUser === null) {
            this.router.navigate(['/login']);
          }

          return fbUser !== null;

        })
      );
  }

  resetPassword(email: string ) {
    this.afAuth.auth.sendPasswordResetEmail( email )
      .then(
        () => {
          Swal.fire(
            'Restablecer Contraseña',
            'Se ha enviado un correo a "' + email + '" con las instrucciones para restablecer su contraseña',
            'success'
          );
        }
      )
      .catch(
        (error) => {
          Swal.fire(
            'Error',
            'Se ha producido un error al intentar restablecer la contraseña, intente una vez más',
            'error'
          );
        }
      );
  }

  createUser(nombre: string, birdDate: Date, email: string, role: string, password: string) {

    this.afAuth.auth.createUserWithEmailAndPassword(email, password)
    .then(
      (resp) => {
        console.log(resp);
        const user: User = {
          uid: resp.user.uid,
          name: nombre,
          birdDate,
          role,
          email: resp.user.email
        };

        this.afDB.doc(`${user.uid}/user`)
          .set(user)
          .then( (respDoc) => {
            console.log('CORRECTO', user);
            this.router.navigate(['/']);
          })
          .catch(
            (err) => {
              console.log('ERROR', err);
              // this.store.dispatch( new DesactivarLoadingAction() );
            }
          );



      }
    )
    .catch(
      (err) => {
        console.error(err);
      }
    );

  }

  CreateUserWithFB() {

    this.afAuth.auth.signInWithPopup(this.fbProvider)
    .then((result) => {
      console.log(result);
    })
    .catch(err => {
      Swal.fire(
        'Error Login Facebook',
        'Se ha producido un error al intentar autenticar en la aplicación. Detalle: ' + err,
        'error'
      );
    });

  }

  CreateUserWithGoogle() {

    const birdDate = new Date();
    const role = ROLES.USER_ROLE;

    this.afAuth.auth.signInWithPopup(this.gooProvider)
    .then(
      (result) => {
        console.log(result);
        const user: User = {
            uid: result.user.uid,
            name: result.user.displayName,
            birdDate,
            role,
            email: result.user.email
          };

        this.afDB.doc(`${user.uid}/user`)
          .set(user)
          .then( (respDoc) => {
            console.log('CORRECTO GOOGLE', user);
            this.router.navigate(['/']);
          })
          .catch(
            (err) => {
              Swal.fire(
                'Error Login Google',
                'Se ha producido un error al intentar autenticar en la aplicación. Detalle: ' + err,
                'error'
              );
            }
          );


    })
    .catch(err => {
      console.log(err.message);
    });

  }

  getUser(): User {
    return {...this.user };
  }

  getMenu(): Menu[] {
    return this.menus;
  }

  



}
