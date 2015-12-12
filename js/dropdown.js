"use strict"

$(document).ready(function() {
    
    // Variablen um die Dropdowmenüs aus der generator.html anzusprechen
    var dropKategorie = $('#dropdownKategorie');
    var dropSymbole = $('#dropdownSymbol');
    
    
    // 
    var kategorie = $();
    var symbole = $();
    
    // auslesen der Kategorien aus der categories.json
    $.getJSON("./categories.json", function(json) {
        kategorie = json;
        console.log('Kategorie: ' + kategorie);
        // alle Kategorien werden als Auswahl-Option an das Element dropKategorie angehängt
        $.each(kategorie, function(index, value) {
           dropKategorie.append('<option>' + value.name + '</option>'); 
        });
    });
    
    // auslesen der Symbole aus der symbols.json
    $.getJSON("./symbols.json", function(json) {
        symbole = json;
        console.log('Symbole: ' + symbole + 'Anzahl Symbole: ' + symbole.length);
        $.each(symbole, function(index, value) {
            dropSymbole.append('<option>' + value.name + '</option>');
        });
    });
    
});


function selectKategorie() {
    var gewaehlteKategorie = $('#dropdownKategorie').val();
    console.log(gewaehlteKategorie);
    
}

$('#dropdownKategorie').change(selectKategorie);

