(function () {
  'use strict';

  angular
    .module('events')
    .config(function config($stateProvider) {
      $stateProvider
      .state('events', {
            url: '/BookAParty',
            templateUrl: 'modules/events/client/views/events.client.view.html',
            controller: 'EventsController',
            controllerAs: 'vm'
          });
    })
    .controller('EventsController', EventsController);

  EventsController.$inject = ['$scope', '$state', '$window', '$http', 'Authentication'];

  function EventsController($scope, $state, $window, $http, Authentication) {
    var vm = this;
    vm.scheduleEvent = scheduleEvent;

    vm.authentication = Authentication;

    function scheduleEvent(isValid){
        if (!isValid) {
            $scope.$broadcast('show-errors-check-validity', 'vm.form.partyForm');
        return false;
      }
    }
  }
}());
