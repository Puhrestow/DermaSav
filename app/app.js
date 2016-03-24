"use strict"

var DermaApp = angular.module("DermaApp", ['ngRoute']);

DermaApp.constant("firebaseURL", "https://scorching-torch-4807.firebaseio.com");

DermaApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'partials/derma-login.html',
        controller: 'DermaLogin'
      }).    
      when('/products', {
        templateUrl: 'partials/derma-products.html',
        controller: 'DermaProducts'
      })
      // when('/songs/:songId', {
      //   templateUrl: 'partials/derma-cart.html',
      //   controller: 'DermaCart'
      // }).
      // when('/songs/:songId', {
      //   templateUrl: 'partials/derma-checkout.html',
      //   controller: 'DermaCheckout'
      // }).  
      // otherwise({
      // 	redirectTo: '/'
      // });  
  }]);

DermaApp.run([() => {
  console.log("app run");
}]);
