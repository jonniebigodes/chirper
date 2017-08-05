'use strict';

function HomeCtrl($scope){
    const self=this;
}

angular.module('HomeCtrl',[])
        .component('home',{
            templateUrl:'./home.html',
            controller:HomeCtrl
        });