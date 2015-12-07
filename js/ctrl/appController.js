app.controller('appController', ['$scope','$http', function($scope, $http) {
    
    $scope.categories = [];
    
    $http.get('../categories.json').success (function(data) {
        $scope.categories = data;
        console.log($scope.categories);
    });
    
    $scope.symbols = [];

    $http.get('../symbols.json').success (function(data) {
        $scope.symbols = data;
        console.log($scope.symbols);
    });
}]);
