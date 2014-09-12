module.exports = function(ng) {
  return ng.module('accounts', [])
  .config(function($stateProvider) {
    $stateProvider
      .state('accounts', {
        url: '/accounts',
        abstract: true,
        template: '<div ui-view></div>'
      })
      .state('register', {
        url: '/register',
        controller: require('./register'),
        template: require('./register.html')
      })
      .state('login', {
        url: '/login',
        controller: require('./login'),
        template: require('./login.html')
      })
      .state('accounts.profile', {
        url: '/:username',
        controller: require('./profile'),
        template: require('./profile.html')
      });
  });
};