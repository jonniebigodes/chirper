'use strict';

angular.module('chirperClient',[require('angular-material'),
                                 require('angular-animate'),
                                ,'chirperClient.chirpList',
                                ,'chirperClient.chirpComposer',
                                'chirperClient.chirpImageComponent',
                                'chirperClient.chirpComponent',
                                'chirperClient.chirpUser']);
