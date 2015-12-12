// Controller um die JSON-Datei mit den Symbolen einzulesen
app.controller('appControllerSymbols', ['$scope','$http', function($scope, $http) {
    
    // Arrays für die Kategorien und Symbole
    $scope.categories = [];
    $scope.symbols = [];
    
    /** 1. Versuch
    $scope.loadSymbols = function(category) {
        $scope.symbolList = [];
       //  console.log(category);
         
        angular.forEach($scope.symbols, function(symbol) {
            //console.log('innerhalb loadSymbols' + category);
           
            if (symbol.category == category.category) {
                //console.log('2.innerhalb loadSymbols');
                $scope.symbolList.push(symbol);
            }
            //console.log('Symbolliste +' + $scope.symbolList);
            //Objekt suchen und das dann dort einfügen.. Filter auf das untere Dropdown legen --> Filterwert vom oberen Dropdown
            $scope.name = $scope.symbolList;
            //console.log('$scope.name:' + $scope.name);
            // https://github.com/sNiklasch/feuerwehrGIS/blob/master/webgis/public/app/templates/fgis/_fieldContent.html
        });
    };
    */
    
    //
    $scope.loadSymbols = function(category) {
        $scope.symbolList = [];
       //  console.log(category);
         
        angular.forEach($scope.symbols, function(symbol) {
            //console.log('innerhalb loadSymbols' + category);
           
            if (symbol.category == category) {
                //console.log('2.innerhalb loadSymbols');
                $scope.symbolList.push(symbol);
            }
            console.log('Symbolliste +' + $scope.symbolList);
            //Objekt suchen und das dann dort einfügen.. Filter auf das untere Dropdown legen --> Filterwert vom oberen Dropdown

            // https://github.com/sNiklasch/feuerwehrGIS/blob/master/webgis/public/app/templates/fgis/_fieldContent.html
        });
    };
    
    // promise mit asynchronem Aufruf der die Symbole aus der JSON-Datei holt
    $http.get('../symbols.json').then(function(symbolsResponse) {
        // in $scope.symbols sind jetzt die Daten aus symbols.json enthalten
        $scope.symbols = symbolsResponse.data;
       // console.log($scope.symbols);

    }).then(function() {
       //console.log("2. Log" + $scope.symbols);
    }).then($scope.loadSymbols());
    
    
    // promise mit asynchronem Aufruf der die Kategorien aus der JSON-Datei holt
    $http.get('../categories.json').then(function(categoriesResponse) {
        // in $scope.categories sind jetzt die Daten aus categories.json enthalten
        $scope.categories = categoriesResponse.data;
        //console.log($scope.categories);

    });
    
    $scope.symbolsFilter = '';
    // per callback die 
    $scope.filterSymbols = function(string) {
        console.log('Filter:' + string);
        $scope.symbolsFilter = string;
        console.log($scope.symbolsFilter);
    };
        
}]);



// http://stackoverflow.com/questions/24818542/first-dropdown-selection-changes-second-dropdown-selection-using-same-scope