(function () {
  'use strict';

  angular
    .module('events')
    .config(routeConfig);

  routeConfig.$inject = ['$stateProvider'];

  function routeConfig($stateProvider) {
    $stateProvider

      .state('create_event', {
        url: '/BookAParty',
        templateUrl: 'modules/events/client/views/form-event.client.view.html',
        controller: 'CreateEventController',
        controllerAs: 'vm',
        resolve: {
          eventResolve: newEvent
        }
      })
      .state('events', {
        url: '/Events',
        templateUrl: 'modules/events/client/views/events.client.view.html',
        controller: 'EventsController',
        controllerAs: 'vm'
      });
  }

  newEvent.$inject = ['EventsService'];

  function newEvent(EventsService) {
    return new EventsService();
  }
}());
