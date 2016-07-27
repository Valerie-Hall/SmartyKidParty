(function () {
  'use strict';

  angular
    .module('events')
    .controller('CreateEventController', CreateEventController);

  CreateEventController.$inject = ['$scope', '$state', '$http', 'Authentication', 'eventResolve'];

  function CreateEventController($scope, $state, $http, Authentication, event) {
    var vm = this;
    vm.scheduleEvent = scheduleEvent;
    vm.event = event;
    vm.form = {};

    vm.authentication = Authentication;

    function scheduleEvent(isValid){
        if (!isValid) {
            $scope.$broadcast('show-errors-check-validity', 'vm.form.partyForm');
        return false;
      }
      vm.event.startTime = vm.event.startTime.getUTCHours() + vm.event.startTime.getUTCMinutes();
      vm.event.$save(successCallback, errorCallback);

      function successCallback(res) {
        $state.go('events');

      }

      function errorCallback(res) {
        vm.error = res.data.message;
      }
    }
  }
}());
