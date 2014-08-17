(function () {
    'use strict';

    angular.module('app').controller("myBooksController", ["$scope", "$location", 'bookService', function ($scope, $location, bookService, $rootScope, $routeProvider) {

        $scope.Books = [];

        $scope.Book = new Book(-1, '', '', BookType.Sell);

        $scope.Books = [];

        $scope.Cancel = function () {
            $location.path("/MyBooks");
        };

        function GetMyBooks() {
            if (!SessionStorage.IsExist(BookBin.Key_MyBook)) {
                bookService.getMyBooks().then(function (data) {
                    var books = [];
                    angular.forEach(data, function (book) {
                        books.push((new Book(book.BookID, book.Name, book.Author, book.Category, book.ISBN, book.BookPrice, book.OfferPrice, book.Remark)));
                    });
                    SessionStorage.SetJSONData(BookBin.Key_MyBook, books);
                    $scope.Books = books;
                }, function (error, status) {
                    console.log(status);
                });
            }
            else {
                $scope.Books = SessionStorage.GetJSONData(BookBin.Key_MyBook);
            }
        }

        $scope.AddBook = function (newBook) {
            if (newBook.$valid) {
                // Copy this feed instance and reset the URL in the form
                $scope.Book.BookID = $scope.Books.length + 1;
                $scope.Books.push($scope.Book);
                //LocalStorage.SetJSONData(BookBin.LS_MyBook, $scope.Books);
                $.notify("Book added successfully.", { className: "success", globalPosition: "bottom right" });
                $location.path("/MyBooks");
            }
            else {
                BookBin.ValidateForm();
            }
        };

        $scope.init = function () {
            GetMyBooks();
        }

        $scope.init();

    }]);
})();