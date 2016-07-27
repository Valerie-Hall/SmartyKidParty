// Events service used to communicate Events REST endpoints
(function () {
  'use strict';

  angular
    .module('events')
    .factory('EventsService', EventsService);

  EventsService.$inject = ['$resource'];

  function EventsService($resource) {
    return $resource('api/events', {eventId: '@_id'}, {
      update: { method: 'PUT' }
    });

    //     angular.extend(Article.prototype, {
    //   createOrUpdate: function () {
    //     var article = this;
    //     return createOrUpdate(article);
    //   }
    // });

    // return Article;

    // function createOrUpdate(article) {
    //   if (article._id) {
    //     return article.$update(onSuccess, onError);
    //   } else {
    //     return article.$save(onSuccess, onError);
    //   }

    //   // Handle successful response
    //   function onSuccess(article) {
    //     // Any required internal processing from inside the service, goes here.
    //   }

    //   // Handle error response
    //   function onError(errorResponse) {
    //     var error = errorResponse.data;
    //     // Handle error internally
    //     handleError(error);
    //   }
    // }

    // function handleError(error) {
    //   // Log error
    //   console.log(error);
    // }
  }
}());
