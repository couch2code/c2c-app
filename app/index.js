require('angular/angular');
require('angular-ui-router/release/angular-ui-router');
require('firebase/firebase');
require('firebase-simple-login/firebase-simple-login');

var domify = require('domify');

var main = require('./index.html');
document.body.appendChild(
  domify(main)
);

angular.module('app', ['ui.router',
  require('./accounts')(angular).name
])
.config(function($urlRouterProvider, $stateProvider) {
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('welcome', {
      url: "/",
      template: require('./welcome.html')
    });
});