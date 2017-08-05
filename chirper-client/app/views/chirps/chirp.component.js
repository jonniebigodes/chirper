'use strict';

function chirpController($scope) {
    const self=this;
    /* this.chirpUsername='';
    this.chirp='';
    this.isImage=false;
    this.ImageUrl='';  */

}
angular.module('chirperClient.chirpComponent',[])
    .component('chirpComponent', {
        templateUrl: '../chirps/chirp.template.html',
        controller:chirpController,
        bindings:{
            chirpItem:'='
        }
    });