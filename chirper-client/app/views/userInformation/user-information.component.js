'use strict';
function chirpUserInformationController($scope){
    const self= this;


}
//probably has to have the root scope
angular.module('chirperClient.chirpUser',[])
        .component('chirpUser',{
            templateUrl:'../userInformation/chirp-list.template.html',
            controller:chirpUserInformationController
        });