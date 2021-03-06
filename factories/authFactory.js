"use strict"; //NECESSARY TO USE ES6

DermaApp.factory("authFactory", (firebaseURL) => {
  let ref = new Firebase(firebaseURL);

  return {
    /*
      Determine if the client is authenticated
     */
    isAuthenticated () {
      let authData = ref.getAuth();

      if (authData) {
        return true;
      } else {
        return false;
      }
    },
    /*
      Authenticate the client via Firebase
     */
    authenticate (credentials) {
      return new Promise((resolve, reject) => {
        ref.authWithPassword({
          "email": credentials.email,
          "password": credentials.password
        }, (error, authData) => {
          if (error) {
            reject(error);
          } else {
            console.log("Authentication With Username and Password Successful");
            resolve(authData);
          }
        });
      });
    }
  };
});
