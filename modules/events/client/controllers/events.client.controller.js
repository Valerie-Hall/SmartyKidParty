(function () {
  'use strict';

  angular
    .module('events')
    .controller('EventsController', EventsController);

  EventsController.$inject = ['$scope', '$state', '$window', '$http', 'Authentication', 'eventResolve', 'EventsService'];

  function EventsController($scope, $state, $window, $http, Authentication, event, EventsService) {
    var vm = this;
    vm.scheduleEvent = scheduleEvent;
    vm.event = event;
    vm.form = {};
    vm.editingEvent = true;

    vm.authentication = Authentication;

    function scheduleEvent(isValid){
        if (!isValid) {
            $scope.$broadcast('show-errors-check-validity', 'vm.form.partyForm');
        return false;
      }
      vm.event.startTime = vm.event.startTime.getUTCHours() + vm.event.startTime.getUTCMinutes();
      vm.event.$save(successCallback, errorCallback);

      function successCallback(res) {
        vm.editingEvent = false;
        EventsService.query().$promise.then(function (parties) {
          vm.events = parties;
        });
      }

      function errorCallback(res) {
        vm.error = res.data.message;
      }
    }
  }
}());
