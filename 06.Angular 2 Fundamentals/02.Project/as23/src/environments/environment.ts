// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyAyPtrBIoSG8S0xF5Z0cd0xzyRz2ZFWo7s",
    authDomain: "as23-tihomir.firebaseapp.com",
    databaseURL: "https://as23-tihomir.firebaseio.com",
    projectId: "as23-tihomir",
    storageBucket: "as23-tihomir.appspot.com",
    messagingSenderId: "968334913431"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
