angular.module('app.checkbox', [])
    .controller('checkboxCtrl', ['$scope', function($scope) {
        $scope.checkboxModel = {
            value1: true,
            value2: 'YES'
        };
    }]);