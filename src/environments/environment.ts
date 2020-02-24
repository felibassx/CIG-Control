// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  menuUrl: 'https://cig-control-ee8ab.firebaseio.com/menus.json',
  firebase: {
    apiKey: 'AIzaSyAlHyZiP-5JVHjYmBrLnwgCNIQqdcgnCRU',
    authDomain: 'cig-control-ee8ab.firebaseapp.com',
    databaseURL: 'https://cig-control-ee8ab.firebaseio.com',
    projectId: 'cig-control-ee8ab',
    storageBucket: 'cig-control-ee8ab.appspot.com',
    messagingSenderId: '465434748056',
    appId: '1:465434748056:web:08334df0bbc1cdae99dced'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
