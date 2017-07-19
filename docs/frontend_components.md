# Front-End Design

### Front-End Folder Organization
```
\app\
----\assets\
------- app.css
----\components\
-------\directives\
------- directives.js
-------\translations\
---------- translation.js
---------- pt-PT.js
----\services\
------- DialogService.js
------- HttpService.js
----\interceptors\
------- ErrorInterceptor.js
----\views\
-------\dialogs\
-----------\chirp-composer\ (if this is the window in which you write the chirp, 
                             it should probably be a dialog, to make things simpler)
------------- chirpComposer.html
------------- chirpComposer.js
-------\chirp-container\
------- chirpContainer.html
------- chirpContainer.js
-------\userInformation\
------- userInformation.html
------- userInformation.js
-------\home\
------- home.js
-------\login\
------- login.html
------- login.js
----\framework\
------- Constants.js
----\third_party\ (add here the components that you cannot get via npm or equivalent)
app.js
index.html

\tests\
(same organization as above, but for the tests)

```
### Code Examples
**translation.js**
``` javascript
/**
 * This file holds all the translation configurations.
 * @returns {{pt-PT}}
 */
function translation() {
    return {
        "pt-PT": translations_ptPT
    };
}
```
**index.html**
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8"/>
    <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no"/>
    <link rel="stylesheet" href="assets/app.css">
    <title>Chirper</title>
</head>
<body>


<!-- dependency declaration-->
<script src="angular/angular.js"></script>
<script src="angular-messages/angular-messages.js"></script>
<script src="angular-ui-router/release/angular-ui-router.min.js"></script>
<script src="angular-aria/angular-aria.js"></script>
<script src="angular-animate/angular-animate.js"></script>

<!-- component declaration-->
<script src="framework/Constants.js"></script>
<script src="components/translation/pt-PT.js"></script>
<script src="components/translation/translation.js"></script>
<script src="app.js"></script>
<script src="components/directives/directives.js"></script>

<!-- services -->
<script src="services/HttpService.js"></script>
<script src="services/DialogService.js"></script>

<!-- views declaration-->
<script src="views/home/home.js"></script>
<script src="views/login/login.js"></script>

<section layout="row" ui-view layout-fill></section>
</body>
</html>
```

**app.js**
```javascript
'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('chirper', [
    // inject the dependencies here
]).config(['$locationProvider', '$stateProvider', '$urlRouterProvider', function ($locationProvider, $stateProvider, $urlRouterProvider) {
    $locationProvider.hashPrefix('!');

    $stateProvider
        .state('home', {
            url: "/home",
            templateUrl: 'views/home/home.html',
            controller: 'HomeCtrl'
        })
        // you'll have to create the states to the other views
        .state('login', {
            url: "/login",
            templateUrl: 'views/login/login.html',
            controller: 'LoginCtrl'
        });

    $urlRouterProvider.otherwise('/home');

}])
    .value("locale", "pt-PT")
    // you can also configure the theme (if on angular material) and the icons
    .config(function ($httpProvider) {
        $httpProvider.interceptors.push('ErrorInterceptor');
        $httpProvider.defaults.headers.common['Content-Type'] = 'application/json';
    })

    .controller('ChirperCtrl', function ($scope) {
    });

angular.element(document).ready(function () {
     
        // if you want to initialize anything on front-end startup, that code goes here.

        angular.bootstrap(document, ["chirper"]);
    }).error(function () {
        window.location.reload();
    });
});
```

**home.html** (also applies to other views)
```html
<div layout="row" layout-fill layout-align="center center" class="layout-align-center-center">
    <!--> Your HTML goes here <-->
</div>
```

### Changelog
[18-07-2017]
- Added the folder organization tips.
- Added some code examples

## Components

## Mockups
