(function () {
    'use strict';

    angular
        .module('myApp')
        .controller('AboutController', AboutController);

    AboutController.$inject = ['$location', 'AuthenticationService', 'FlashService'];
    function AboutController($location, AuthenticationService, FlashService) {

    }

})();