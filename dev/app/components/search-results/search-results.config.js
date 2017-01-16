;(function() {
  'use strict';

  config.$inject = ["$stateProvider"];
  resResolver.$inject = ["searchResultsService", "$stateParams"];
  angular
    .module('main')
    .config(config);

  /* ngInject */
  function config($stateProvider) {
    $stateProvider.state('results', {
      url: '/results',
      params : {
        data : undefined
      },
      resolve : {
        resResolver: resResolver
      },
      views: {
        content: {
          controller: 'SearchResultController as $ctrl',
          templateUrl: 'components/search-results/search-results.tpl.html'
        }
      }
    });
  }

  /* ngInject */
  function resResolver(searchResultsService, $stateParams) {

    var data = {};
    data.from = $stateParams.data.from.iata_code;
    data.to = $stateParams.data.to.iata_code;
    data.date = $stateParams.data.date;
    data.flight_type = $stateParams.data.flight_type;
    searchResultsService.sync(data);
  }
})();
