import { Injectable } from '@angular/core';

// Libs
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';
import { User } from '../models/user.model';
import Swal from 'sweetalert2';
import { AngularFirestore } from '@angular/fire/firestore';
import { ROLES } from '../utils/const.utils';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  fbProvider = new firebase.auth.FacebookAuthProvider();
  gooProvider = new firebase.auth.GoogleAuthProvider();

  constructor(
    private afAuth: AngularFireAuth,
    private afDB: AngularFirestore,
    private router: Router
  ) { }

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
          // this.store.dispatch( new DesactivarLoadingAction() );
          this.router.navigate(['/']);
          console.log('LOGIN OK', resp);
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



}
