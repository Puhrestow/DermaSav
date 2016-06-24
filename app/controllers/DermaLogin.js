"use strict";

//let DermaApp = angular.module("DermaApp");

DermaApp.controller("DermaLogin",
[
  "$rootScope"
  "$scope",
  "$location",
  "$http",
  "authFactory",
  "firebaseURL",

  function ($rootScope,$scope, $location, $http, authFactory, firebaseURL) {

    // Local variables
    let ref = new Firebase(firebaseURL);

    $rootScope.showNav = false;

    // Variables on $scope for use in DOM
    $scope.account = { Username: "", Password: "" };
    $scope.message = "";

    /*
      Attempt to register a new user account.
      If successful, immediately log user in.
     */
    $scope.register = () => {
      ref.createUser({
        email    : $scope.account.email,
        password : $scope.account.password
      }, (error, userData) => {
        if (error) {
          console.log(`Error creating user: ${error}`);
        } else {
          console.log(`Created user account with uid: ${userData.uid}`);
          $scope.login();
        }
      });
    };

    /*
      Attempt to authenticate the user with the
      supplied credentials.
     */
    $scope.login = () => 
      authFactory
        .authenticate($scope.account)
        .then(() => {
          $location.path("/");
          $scope.$apply();  // Needed for $location.path() to succeed
        });


  }
]);