'use strict'

const app = angular.module('devprofile', ['ngRoute'])

console.log('hello main.js')

app.config(function($routeProvider) {

  $routeProvider
  .when('/', {
    templateUrl: './splash.html',
    controller: 'splashCtrl'
  })
  .when('/about', {
    templateUrl: './about.html',
    controller: 'aboutCtrl'
  })
  .when('/blog', {
    templateUrl: './blog.html',
    controller: 'blogCtrl'
  })
  .when('/contact', {
    templateUrl: './contact.html',
    controller: 'contactCtrl'
  })
  .when('/projects', {
    templateUrl: './projects.html',
    controller: 'projectsCtrl'
  })
  .otherwise({
    redirectTo: '/'
  })
})