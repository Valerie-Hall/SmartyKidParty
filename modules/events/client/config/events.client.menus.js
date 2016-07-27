(function () {
  'use strict';

  angular
    .module('events')
    .run(menuConfig);

  menuConfig.$inject = ['menuService'];

  function menuConfig(menuService) {
    menuService.addMenuItem('topbar', {
      title: 'Book A Party',
      state: 'create_event',
      type: '',
      roles: ['*'],
      position: 0
    });
  }
}());
