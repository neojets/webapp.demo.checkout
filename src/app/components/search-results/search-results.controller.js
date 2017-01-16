;(function() {
    'use strict';

    angular
        .module('search-results')
        .controller('SearchResultController', SearchResultController);

    /* ngInject */
    function SearchResultController($state, $stateParams, searchResultsService) {
        var ctrl = this;
        if(!$stateParams.data) {
          $state.go('main');
          return;
        }
        ctrl.flights = searchResultsService.get();
        ctrl.select = select;

        function select(item) {
          $state.go('checkout', {data : item, search: $stateParams.data});
        }
    }
})();
