'use strict';

function chirperComposerController($scope){
    const self= this;
    self.chirp='';

}
angular.module('chirperClient.chirpComposer',[])
        .component('chirperComposer',{
            templateUrl:'../chirp-composer/chirp-composer.template.html',
            controller: chirperComposerController
        });
        