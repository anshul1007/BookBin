
(function () {
    'use strict';

    angular.module('app').controller("myBooksController", ["$scope", "$location", function ($scope, $location, $rootScope, $routeProvider) {
       
        $scope.Books = [];

        $scope.Books = LocalStorage.GetJSONData(BookBin.LS_MyBook);

        $scope.Cancel = function () {
            $location.path("/MyBooks");
        }

        $scope.AddBook = function () {
            var bookObj = LocalStorage.GetJSONData(BookBin.LS_MyBook);
            bookObj.push({ BookID: 3, Name: "B3" });
            LocalStorage.SetJSONData(BookBin.LS_MyBook, bookObj);
            $.notify("Book added successfully.", { className: "success", globalPosition: "bottom right" });
            $location.path("/MyBooks");
        }
    }]);
})();

