(function () {
    'use strict';

    angular
        .module('myApp')
        .controller('ContactController', ContactController);

    ContactController.$inject = ['$location', 'AuthenticationService', 'FlashService'];
    function ContactController($location, AuthenticationService, FlashService) {

    }

})();