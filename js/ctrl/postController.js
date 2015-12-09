// Controller um die neu erstellten Zeichen zu speichern
app.controller('postController', ['$scope','$http', function($scope, $http) {

    $scope.name = '';

    $scope.speichern = function() {
        
        console.log('hier wird dann mal gespeichert');
    };
    
    
    // http.post an API-Endpunkt
    $scope.sendPost = function() {
        
    }
    
}]);