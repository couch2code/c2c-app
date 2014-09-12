require('angular/angular');
require('angular-ui-router/release/angular-ui-router');
require('firebase/firebase');
require('firebase-simple-login/firebase-simple-login');
require('angularfire/dist/angularfire');

var domify = require('domify');

var main = require('./index.html');
document.body.appendChild(
  domify(main)
);

angular.module('app', ['ui.router','firebase',
  require('./accounts')(angular).name,
  require('./challenges')(angular).name
])
.config(function($urlRouterProvider, $stateProvider) {
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('welcome', {
      url: "/",
      template: require('./welcome.html')
    });
})
.constant('firebaseUrl', 'https://couch2code.firebaseio.com');