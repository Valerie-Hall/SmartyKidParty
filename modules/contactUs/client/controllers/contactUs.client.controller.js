(function () {
  'use strict';

  angular
    .module('contactUs')
    .config(function config($stateProvider) {
      $stateProvider
      .state('contactUs', {
            url: '/ContactUs',
            templateUrl: 'modules/contactUs/client/views/contactUs.client.view.html',
            controller: 'ContactUsController',
            controllerAs: 'vm'
          });
    })
    .controller('ContactUsController', ContactUsController);

  ContactUsController.$inject = ['$scope', '$state', '$window', '$http', 'Authentication'];

  function ContactUsController($scope, $state, $window, $http, Authentication) {
    var vm = this;

    vm.authentication = Authentication;
    vm.error = null;
    vm.form = {};
    vm.sendMail = sendMail;

    function sendMail(isValid) {
      if (!isValid) {
            $scope.$broadcast('show-errors-check-validity', 'vm.form.contactUsForm');
        return false;
      }
      if(vm.form.contactUsForm.$valid){
       var data = ({
         name: vm.form.name,
         email: vm.form.email,
         message: vm.form.message
       });

        $http.post('/api/send-mail', vm.form).
                success(function (data, status, headers, config){
                  console.log('Email Sent!');
                }).
                error(function(data, status, headers, config) {
                  console.log('Email Failed!');
                });
      }
    }
  }
}());
