module.exports = function(ng) {
  return ng.module('challenges', [])
    .config(function($stateProvider) {
      $stateProvider
        .state('list', {
          url: '/',
          controller: require('./list'),
          template: require('./list.html')
        })
        .state('new', {
          url: '/new',
          controller: require('./new'),
          template: require('./new.html')
        })
        .state('show', {
          url: '/:id',
          controller: require('./show'),
          template: require('./show.html')
        });
    });
};