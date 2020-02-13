import { Injectable } from '@angular/core';

// Libs
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';
import { User } from '../models/user.model';
import { Subscription } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { ROLES } from '../utils/const.utils';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userModel: User;
  private userSubscription: Subscription = new Subscription();
  fbProvider = new firebase.auth.FacebookAuthProvider();
  gooProvider = new firebase.auth.GoogleAuthProvider();

  constructor(
    private afAuth: AngularFireAuth,
    private afDB: AngularFirestore,
  ) { }

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
      console.log(err.message);
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
          })
          .catch(
            (err) => {
              console.log('ERROR GOOGLE', err);
              // this.store.dispatch( new DesactivarLoadingAction() );
            }
          );


    })
    .catch(err => {
      console.log(err.message);
    });

  }



}
