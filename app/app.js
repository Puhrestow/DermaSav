"use strict" //NECESSARY TO USE ES6

var DermaApp = angular.module("DermaApp", ['ngRoute', 'ngCookies']);

DermaApp.constant("firebaseURL", "https://scorching-torch-4807.firebaseio.com");//ATTACH YOUR FIREBASE URL HERE

//PARTIAL CONFIGURATION
DermaApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'partials/derma-login.html',
        controller: 'DermaLogin',

      }).    
      when('/products', {
        templateUrl: 'partials/derma-products.html',
        controller: 'DermaProducts'
      }).
      when('/cart', {
        templateUrl: 'partials/derma-cart.html',
        controller: 'DermaCart'
      })
      // when('/checkout', {
      //   templateUrl: 'partials/derma-checkout.html',
      //   controller: 'DermaCart'
      // })  
      // otherwise({
      // 	redirectTo: '/'
      // });  
  }]);

//COMMAND USED TO RUN APP
DermaApp.run(($rootScope) => {
  console.log("app run");
  $rootScope.$on("$routeChangeStart", (ev, next, curr) => {
      console.log(next.$$route.originalPath);
      var path = next.$$route.originalPath;
      if (path === "/") $rootScope.showNav = false;
      else $rootScope.showNav = true
  })
});
