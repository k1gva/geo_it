"use strict"

$(document).ready(function() {
    
    // Variablen um die Dropdowmenüs aus der generator.html anzusprechen
    var dropKategorie = $('#dropdownKategorie');
    var kategorie = $();


    // auslesen der Kategorien aus der categories.json
    $.getJSON("./categories.json", function(json) {
        kategorie = json;
        console.log('Kategorie: ' + kategorie);
        // alle Kategorien werden als Auswahl-Option an das Element dropKategorie angehängt
        $.each(kategorie, function(index, value) {
           dropKategorie.append('<option>' + value.name + '</option>'); 
        });
    });
    
});

// Fkt. die die Symbole filtert
function selectSymbol() {
    // Variable in der die gewählte Kategorie steht
    var gewaehlteKategorie = $('#dropdownKategorie').val();
    //console.log(gewaehlteKategorie);                              // debugging
    
    var symbole = $();
    // Variable die auf das zweite Dropdown-Menp referenziert
    var dropSymbole = $('#dropdownSymbol');
    // Liste wird geleert, falls sich schon Einträge in ihr befinden
    dropSymbole.empty();
    var gleich = '';
    
    // auslesen der symbols.json Datei
    $.getJSON("./symbols.json", function(json) {
        symbole = json;
        // console.log('Symbole: ' + symbole + 'Anzahl Symbole: ' + symbole.length);        // debugging um zu sehen ob alle Symbole eingeladen wurden
        // für jedes Symbol wird eine Vergleichsfunktion aufgerufen
        $.each(symbole, function(index, value) {
            // gleich speichert die Kategorie des aktuell betrachteten Symbols
            gleich = value.category;
            //console.log(gleich);
            // wenn Symbol-Kategorie und gewählte Kategorie übereinstimmen --> Symbol wird in Dropdown angehängt
            if (gleich === gewaehlteKategorie) {
                dropSymbole.append('<option>' + value.name + '</option>');    
            }
        });
    });
}

// wenn auf das Dropdown-Menü für die Kategorie ein change-Ereignis stattfindet, dann wird die Funktion selectKategorie aufgerufen
$('#dropdownKategorie').change(selectSymbol);

