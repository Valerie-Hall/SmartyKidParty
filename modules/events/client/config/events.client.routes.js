(function () {
  'use strict';

  angular
    .module('events')
    .config(routeConfig);

  routeConfig.$inject = ['$stateProvider'];

  function routeConfig($stateProvider) {
    $stateProvider

      .state('events', {
        url: '/BookAParty',
        templateUrl: 'modules/events/client/views/events.client.view.html',
        controller: 'EventsController',
        controllerAs: 'vm',
        resolve: {
          eventResolve: newEvent
        }
      });
  }

  getEvent.$inject = ['$stateParams', 'EventsService'];

  function getEvent($stateParams, EventsService) {
    return EventsService.get({
      eventId: $stateParams.eventId
    }).$promise;
  }

  newEvent.$inject = ['EventsService'];

  function newEvent(EventsService) {
    return new EventsService();
  }
}());
