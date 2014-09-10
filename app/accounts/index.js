module.exports = function(ng) {
  return ng.module('accounts', [])
  .config(function($stateProvider) {
    $stateProvider
      .state('register', {
        url: '/register',
        controller: require('./register'),
        template: require('./register.html')
      });
  });
};