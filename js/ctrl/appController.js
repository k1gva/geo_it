app.controller('appController', ['$scope','$http', function($scope, $http) {

    $scope.symbols = [];

    $http.get('../symbols.json').success (function(data) {
        $scope.symbols = data;
        console.log($scope.symbols);
    });
    
    
    
}]);
