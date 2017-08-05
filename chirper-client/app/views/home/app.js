'use strict';


const app=angular.module('chirper',[])
                 .config(['$locationProvider', '$stateProvider', '$urlRouterProvider',($locationProvider, $stateProvider, $urlRouterProvider)=>{

                    $urlRouterProvider.hasPrefix('!');
                    $stateProvider.state('home',{
                        url:"/",
                        templateUrl:'./views/home/home.html',
                        controller:'HomeCtrl'
                    });
                    // you'll have to create the states to the other views
                    //.state('')
                    $urlRouterProvider.otherwise('/home');
                 }])
                .value("locale", "pt-PT")
                .config(($httpProvider)=>{
                    $httpProvider.interceptors.push('ErrorInterceptor');
                    $httpProvider.defaults.headers.common['Content-Type'] = 'application/json';
                })
                .controller('ChirperCtrl',($scope)=>{

                });
angular.element(document).ready(()=> {
     
        // if you want to initialize anything on front-end startup, that code goes here.

        angular.bootstrap(document, ["chirper"]);
    }).error(()=> {
        window.location.reload();
    });
