"use strict"

$(document).ready(function() {
    
    // Variablen um die Dropdowmenüs aus der generator.html anzusprechen
    var dropKategorie = $('#dropdownKategorie');

    
    
    // 
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
    
    /**
    // auslesen der Symbole aus der symbols.json
    $.getJSON("./symbols.json", function(json) {
        symbole = json;
        console.log('Symbole: ' + symbole + 'Anzahl Symbole: ' + symbole.length);
        $.each(symbole, function(index, value) {
            dropSymbole.append('<option>' + value.name + '</option>');
        });
    });
    */
    
});


function selectKategorie() {
    var gewaehlteKategorie = $('#dropdownKategorie').val();
    console.log(gewaehlteKategorie);
    
    var symbole = $();
    var dropSymbole = $('#dropdownSymbol');
    dropSymbole.empty();
    var gleich = '';
    
    $.getJSON("./symbols.json", function(json) {
        symbole = json;
        console.log('Symbole: ' + symbole + 'Anzahl Symbole: ' + symbole.length);
        $.each(symbole, function(index, value) {
            gleich = value.category;
            //console.log(gleich);
            if (gleich === gewaehlteKategorie) {
                dropSymbole.append('<option>' + value.name + '</option>');    
            }
            
        });
    });
    
}

$('#dropdownKategorie').change(selectKategorie);

