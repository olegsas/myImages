angular.module('app.checkbox', [])
    .controller('checkboxCtrl', ['$scope', function($scope) {
        $scope.checkboxModel = {
            public: false
        };
    }]);