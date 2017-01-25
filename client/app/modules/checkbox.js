angular.module('app.checkbox', [])
    .controller('checkboxCtrl', ['$scope', '$http', function($scope, $http) {
        $http.get('/getUserProfile')
        .then(public => {
            console.log("public.data  =  " + public.data.public);
            $scope.public = public.data.public;
        });

        $scope.update = function() {
        console.log('====');
         console.log('$scope.public = ' + $scope.public);
         $http.post('/updateProfile', {public:$scope.public})
         .then(public => {
            console.log('+++');
            console.log("public.data.public = "+public.data.public);
             $scope.public = public.data.public;
         })          
         
     };

    }]);