'use strict';

function chirpListController($scope) {
    const self = this;
    self.chrirpList = [{
            chirpUsername: '@DummyUser',
            chirp: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet lorem eget quam vestibulum sagittis id non dolor. Etiam maximus dictum sodales. Cras consectetur tempus imperdiet. Morbi sed ultrices dui. Curabitur aliquet mauris sit amet condimentum tincidunt. Maecenas vitae maximus ante. Sed scelerisque quam eget pulvinar feugiat. Proin a eros libero.'

        },
        {
            chirpUsername: '@DummyUser',
            chirp: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet lorem eget quam vestibulum sagittis id non dolor. Etiam maximus dictum sodales. Cras consectetur tempus imperdiet. Morbi sed ultrices dui. Curabitur aliquet mauris sit amet condimentum tincidunt. Maecenas vitae maximus ante. Sed scelerisque quam eget pulvinar feugiat. Proin a eros libero.'
        },
        {
            chirpUsername: '@DummyUser',
            chirp: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet lorem eget quam vestibulum sagittis id non dolor. Etiam maximus dictum sodales. Cras consectetur tempus imperdiet. Morbi sed ultrices dui. Curabitur aliquet mauris sit amet condimentum tincidunt. Maecenas vitae maximus ante. Sed scelerisque quam eget pulvinar feugiat. Proin a eros libero.'
        }
    ];

}
//probably has to have the root scope
angular.module('chirperClient.chirpList')
    .component('chirpList', {
        templateUrl: 'chirp-list.template.html',
        controller:chirpListController
    });