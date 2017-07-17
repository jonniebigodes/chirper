'use strict';

function chirpController() {
    this.chirpUsername = '@DummyUser';
    this.chirp = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet lorem eget quam vestibulum sagittis id non dolor. Etiam maximus dictum sodales. Cras consectetur tempus imperdiet. Morbi sed ultrices dui. Curabitur aliquet mauris sit amet condimentum tincidunt. Maecenas vitae maximus ante. Sed scelerisque quam eget pulvinar feugiat. Proin a eros libero.';
    this.isEditing = false;

}
angular.module('chirperClient.chirpComponent')
    .component('chirpComponent', {
        templateUrl: 'chirp.template.html',
        controller:chirpController
    });