(function () {
  'use strict';

  angular
    .module('contactUs')
    .run(menuConfig);

  menuConfig.$inject = ['menuService'];

  function menuConfig(menuService) {
    menuService.addMenuItem('topbar', {
      title: 'Contact Us',
      state: 'contactUs',
      type: '',
      roles: ['*'],
      position: 1
    });
  }
}());
