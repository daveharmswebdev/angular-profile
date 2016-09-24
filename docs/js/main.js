'use strict'

const app = angular.module('devprofile', ['ngRoute'])

console.log('hello main.js')

app.config(function($routeProvider) {

  $routeProvider
  .when('/', {
    templateUrl: './views/splash.html',
    controller: 'splashCtrl'
  })
  .when('/about', {
    templateUrl: './views/about.html',
    controller: 'aboutCtrl'
  })
  .when('/blog', {
    templateUrl: './views/blog.html',
    controller: 'blogCtrl'
  })
  .when('/contact', {
    templateUrl: './views/contact.html',
    controller: 'contactCtrl'
  })
  .when('/projects', {
    templateUrl: './views/projects.html',
    controller: 'projectsCtrl'
  })
  .otherwise({
    redirectTo: '/'
  })
})