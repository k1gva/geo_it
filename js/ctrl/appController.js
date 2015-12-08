app.controller('appController', ['$scope','$http', function($scope, $http) {
    
    $scope.symbols = [];
    
    // promise mit asynchronem Aufruf der die Symbole aus der JSON-Datei holt
    $http.get('../symbols.json').then(function(symbolsResponse) {
        // in $scope.symbols sind jetzt die Daten aus symbols.json enthalten
        $scope.symbols = symbolsResponse.data;
        console.log($scope.symbols);
    });
    
    
    $scope.onClick = function() {
        console.log('test');
    };

}]);
