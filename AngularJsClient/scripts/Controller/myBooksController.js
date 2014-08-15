
(function () {
    'use strict';

    angular.module('app').controller("myBooksController", ["$scope", "$location", function ($scope, $location, $rootScope, $routeProvider) {

        $scope.Books = [];

        $scope.Book = new Book(-1, '', '', BookType.Sell);

        $scope.Books = LocalStorage.GetJSONData(BookBin.LS_MyBook);

        $scope.Cancel = function () {
            $location.path("/MyBooks");
        }

        $scope.AddBook = function (newBook) {
            if (newBook.$valid) {
                // Copy this feed instance and reset the URL in the form
                $scope.Book.BookID = $scope.Books.length + 1;
                $scope.Books.push($scope.Book);
                LocalStorage.SetJSONData(BookBin.LS_MyBook, $scope.Books);
                $.notify("Book added successfully.", { className: "success", globalPosition: "bottom right" });
                $location.path("/MyBooks");
            }
            else {
                var errors = [];
                $(".ng-invalid-required").each(function () {
                    if (typeof ($(this).attr("placeholder")) !== 'undefined') {
                        errors.push("<strong>" + $(this).attr("placeholder") + "</strong>: Required")
                    }
                });
                $("#error").html(errors.join("<br/>")).show();
            }
        }
    }]);
})();

