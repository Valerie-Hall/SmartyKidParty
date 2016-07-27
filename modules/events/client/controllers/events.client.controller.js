(function () {
  'use strict';

  angular
    .module('events')
    .controller('EventsController', EventsController);

  EventsController.$inject = ['$http', 'Authentication', 'EventsService'];

  function EventsController($http, Authentication, EventsService) {
    var vm = this;

    vm.authentication = Authentication;

    EventsService.query().$promise.then(function (parties) {
          vm.events = parties;
        });
  }
}());
    