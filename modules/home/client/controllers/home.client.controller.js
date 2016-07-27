(function () {
  'use strict';

  angular
    .module('home')

    .config(function config($stateProvider) {
      $stateProvider
      .state('home', {
            url: '/',
            templateUrl: 'modules/home/client/views/home.client.view.html',
            controller: 'HomeController',
            controllerAs: 'vm'
          });
  })
    .controller('HomeController', HomeController);

  HomeController.$inject = ['$scope', '$state', '$window', 'Authentication'];

  function HomeController($scope, $state, article, $window, Authentication) {
    var vm = this;

    vm.authentication = Authentication;

  }
}());
