// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  firebase: {
    projectId: 'chat-app-d1e95',
    appId: '1:1035976326574:web:a8fe599917e767c26e5c3f',
    storageBucket: 'chat-app-d1e95.appspot.com',
    apiKey: 'AIzaSyCAz0xVv8ZpE0cmCR7Udhcwo2en6_Nly_Y',
    authDomain: 'chat-app-d1e95.firebaseapp.com',
    messagingSenderId: '1035976326574',
  },
  production: false,
  apiUrl: 'https://us-central1-chat-app-d1e95.cloudfunctions.net',
  stream: {
    key: 'e4j6xduskatv',
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
