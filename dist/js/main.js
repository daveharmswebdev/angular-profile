'use strict'

const app = angular.module('devprofile', ['ngRoute'])

app.config(function($routeProvider) {

  $routeProvider
  .when('/', {
    templateUrl: './views/splash.html',
    controller: 'splashCtrl'
  })
  // .when('/profile', {
  //   templateUrl: './views/customerProfile.html',
  //   controller: 'profileCtrl'
  // })
  // .when('/order', {
  //   templateUrl: './views/order.html',
  //   controller: 'orderCtrl'
  // })
  // .when('/test', {
  //   templateUrl: './views/test.html',
  //   controller: 'testCtrl'
  // })
  // .when('/checkout', {
  //   templateUrl: './views/checkout.html',
  //   controller: 'checkoutCtrl'
  // })
  // .when('/account', {
  //   templateUrl: './views/account.html',
  //   controller: 'accountCtrl'
  // })
  // .when('/endOfDay', {
  //   templateUrl: './views/endOfDay.html',
  //   controller: 'eodCtrl'
  // })
  .otherwise({
    redirectTo: '/'
  });
});