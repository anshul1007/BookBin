(function () {
    'use strict';

    angular.module('app').factory('bookService', ['$http', '$q', function ($http, $q) {

        var serverBaseUrl = BookBin.serverBaseUrl;

        var service = {
            getMyBooks: getMyBooks,
        };

        return service;

        var accessToken = "";

        function getMyBooks() {

            var getMyBooksUrl = serverBaseUrl + "/api/book";
            var deferred = $q.defer();
            $http({
                method: 'GET',
                url: getMyBooksUrl,
                headers: BookBin.GetHeaders(),
            }).success(function (data, status, headers, cfg) {
                deferred.resolve(data);
            }).error(function (err, status) {
                console.log(err);
                deferred.reject(status);
            });
            return deferred.promise;
        }
    }]);
})();