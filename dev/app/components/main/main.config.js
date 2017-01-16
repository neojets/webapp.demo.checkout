;(function() {
  'use strict';

  config.$inject = ["$stateProvider"];
  angular
    .module('main')
    .config(config);

  /* ngInject */
  function config($stateProvider) {
    $stateProvider.state('main', {
      url: '/',
      views: {
        content: {
          controller: 'MainController as $ctrl',
          templateUrl: 'components/main/main.tpl.html'
        }
      }
    });
  }
})();
