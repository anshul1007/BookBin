(function () {
    'use strict';
    angular.module('app').controller("userAccountController", ["$scope", "userAccountService",

        function ($scope, userAccountService) {
            $scope.isLoggedIn = false;
            $scope.bearerToken = "";
            $scope.userData = {
                userName: "anshul",
                password: "anshul",
                confirmPassword: "",
            };


            $scope.login = function () {
                if (typeof $scope.userData.userName !== "undefined" && $.trim($scope.userData.userName) !== "" && $.trim($scope.userData.password) !== "") {
                    userAccountService.loginUser($scope.userData).then(function (data) {
                        $scope.isLoggedIn = true;
                        $scope.bearerToken = data.access_token;
                        $("#spanUserName").text(data.userName);
                        ChangeAccountLink();
                        $('#loginModal').modal('hide');
                    }, function (error, status) {
                        $scope.isLoggedIn = false;
                        console.log(status);
                    });
                }
            }

            function ChangeAccountLink() {
                if ($scope.isLoggedIn) {
                    $("#ulAccount").removeClass("hidden").addClass("show");
                    $("#ulLogin").addClass("hidden").removeClass("show");
                }
            }
        }]);
})();
