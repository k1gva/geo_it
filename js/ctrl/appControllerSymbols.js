// Controller um die JSON-Datei mit den Symbolen einzulesen
app.controller('appControllerSymbols', ['$scope','$http', function($scope, $http) {
    
    $scope.symbols = [];
    
    $scope.loadSymbols = function(category) {
        $scope.symbolList = [];
        
        angular.forEach($scope.symbols, function(symbol) {
            console.log('innerhalb loadSymbols');
            if (symbol.category == category) {
                console.log('2.innerhalb loadSymbols');
                $scope.symbolList.push(symbol);
                console.log('loadSymbols +' + $scope.symbolList);
            }
        });
    };

    // promise mit asynchronem Aufruf der die Symbole aus der JSON-Datei holt
    $http.get('../symbols.json').then(function(symbolsResponse) {
        // in $scope.symbols sind jetzt die Daten aus symbols.json enthalten
        $scope.symbols = symbolsResponse.data;
        console.log($scope.symbols);

    }).then(function() {
        console.log("2. Log" + $scope.symbols);
    }).then($scope.loadSymbols());

}]);



// http://stackoverflow.com/questions/24818542/first-dropdown-selection-changes-second-dropdown-selection-using-same-scope