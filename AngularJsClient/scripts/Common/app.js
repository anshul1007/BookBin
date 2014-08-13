(function () {
    'use strict';

    // Module name is handy for logging
    var id = 'app';

    // Create the module and define its dependencies.
    var app = angular.module('app', ['ngRoute', 'ui.bootstrap']);

    app.config(['$httpProvider', '$routeProvider', function ($httpProvider, $routeProvider) {

        $routeProvider.
            when('/home', { templateUrl: 'view/home.html' }).
            when('/about', { templateUrl: 'view/about.html' }).
            when('/contact', { templateUrl: 'view/contact.html' }).
            when('/MyBooks', {
                templateUrl: 'view/book/home.html',
                controller: 'myBooksController'
                //resolve: {
                //    load: function ($q, $route, $rootScope) {

                //        var deferred = $q.defer();

                //        var dependencies = [
                //          'scripts/Controller/myBooksController.js'
                //        ];

                //        $script(dependencies, function () {
                //            $rootScope.$apply(function () {
                //                deferred.resolve();
                //            });
                //        });

                //        return deferred.promise;
                //    }
                //}
            }).
            when('/MyBooks/Add', {
                templateUrl: 'view/book/Add.html', controller: 'myBooksController'
            }).
            otherwise({ redirectTo: '/home' });

        // Use x-www-form-urlencoded Content-Type
        $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';

        // Override $http service's default transformRequest
        $httpProvider.defaults.transformRequest = [function (data) {
            /**
             * The workhorse; converts an object to x-www-form-urlencoded serialization.
             * @param {Object} obj
             * @return {String}
             */
            var param = function (obj) {
                var query = '';
                var name, value, fullSubName, subName, subValue, innerObj, i;

                for (name in obj) {
                    value = obj[name];

                    if (value instanceof Array) {
                        for (i = 0; i < value.length; ++i) {
                            subValue = value[i];
                            fullSubName = name + '[' + i + ']';
                            innerObj = {};
                            innerObj[fullSubName] = subValue;
                            query += param(innerObj) + '&';
                        }
                    }
                    else if (value instanceof Object) {
                        for (subName in value) {
                            subValue = value[subName];
                            fullSubName = name + '[' + subName + ']';
                            innerObj = {};
                            innerObj[fullSubName] = subValue;
                            query += param(innerObj) + '&';
                        }
                    }
                    else if (value !== undefined && value !== null) {
                        query += encodeURIComponent(name) + '=' + encodeURIComponent(value) + '&';
                    }
                }

                return query.length ? query.substr(0, query.length - 1) : query;
            };

            return angular.isObject(data) && String(data) !== '[object File]' ? param(data) : data;
        }];
    }]);

    // Execute bootstrapping code and any dependencies.
    app.run(['$q', '$rootScope',
        function ($q, $rootScope) {

        }]);
})();