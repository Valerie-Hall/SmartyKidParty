'use strict';

(function () {
  describe('CoreController', function () {
    // Initialize global variables
    var scope,
      CoreController;

    // Load the main application module
    beforeEach(module(ApplicationConfiguration.applicationModuleName));

    beforeEach(inject(function ($controller, $rootScope) {
      scope = $rootScope.$new();

      CoreController = $controller('CoreController as vm', {
        $scope: scope
      });
    }));
  });
}());
