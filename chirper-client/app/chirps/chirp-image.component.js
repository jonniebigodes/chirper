'use strict';
function chirpImageController($scope){
    const self= this;
    self.chirpUsername='@DummyUser';
    self.chirp='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet lorem eget quam vestibulum sagittis id non dolor. Etiam maximus dictum sodales. Cras consectetur tempus imperdiet. Morbi sed ultrices dui. Curabitur aliquet mauris sit amet condimentum tincidunt. Maecenas vitae maximus ante. Sed scelerisque quam eget pulvinar feugiat. Proin a eros libero.';
    self.isEditing=false;
    self.ImageUrl='';

}
angular.module('chirperClient.chirpImageComponent')
        .component('chirpImageComponent',{
            templateUrl:'chirp-image.template.html',
            controller:chirpImageController
                
            }
        );