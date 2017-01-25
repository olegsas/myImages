angular.module('app.checkbox', [])
    .controller('checkboxCtrl', ['$scope', '$http', function($scope, $http) {
        $http.get('/getUserProfile')
        .then(public => {
            console.log("public.data =  " + public.data.public);
            $scope.public = public.data.public;
        });
    }]);