module.exports = function(ng) {
  return ng.module('challenges', [])
    .config(function($stateProvider) {
      $stateProvider
        .state('challenges', {
          url: '/challenges',
          abstract: true,
          template: '<div ui-view></div>'
        })
        .state('challenges.list', {
          url: '/',
          controller: require('./list'),
          template: require('./list.html')
        })
        .state('challenges.new', {
          url: '/new',
          controller: require('./new'),
          template: require('./new.html')
        })
        .state('challenges.show', {
          url: '/:id',
          controller: require('./show'),
          template: require('./show.html')
        });
    });
};