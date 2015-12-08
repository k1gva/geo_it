app.controller('appController', ['$scope','$http', function($scope, $http) {
    
    $scope.categories = [];
    
    // promise mit asynchronem Aufruf der Kategorien aus der JSON-Datei
    $http.get('../categories.json').then(function(categoriesResponse) {
        // in $scope.categories sind jetzt die Daten aus categories.json enthalten
        $scope.categories = categoriesResponse.data;
        console.log($scope.categories);
    });
    
    $scope.symbols = [];
    
    // promise mit asynchronem Aufruf der die Symbole aus der JSON-Datei holt
    $http.get('../symbols.json').then(function(symbolsResponse) {
        // in $scope.symbols sind jetzt die Daten aus symbols.json enthalten
        $scope.symbols = symbolsResponse.data;
        console.log($scope.symbols);
    });
    
    $scope.selection = "";
    
    $scope.onClick = function() {
        console.log('test');
    };

}]);
