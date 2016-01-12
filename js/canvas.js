var myPath;
var tool = new Tool();


// Funktion für die Eingabe von Textfeldern in das Zeichen
function textEingeben() {
    //console.log('test');
    var text = prompt('Was wollen Sie in das Textfeld schreiben?');
    //console.log(text);
    tool.onMouseDown = function(event) {
        console.log(event.point);
        var eingabe = new PointText(new Point(event.point.x, event.point.y));
        eingabe.fillColor = $('#farbe').val();
        eingabe.fontSize = '24px';
        eingabe.content = text;
    };
}

// Funktion um Freihand zu zeichnen
function freihandZeichnen() {
    tool.onMouseDrag = function(event) {
        myPath.add(event.point);
    };
}

// Funktion um Linien einzufügen
function linienSegmentZeichnen() {
       tool.onMouseDown = function(event) {
            myPath = new Path();
            myPath.strokeColor = $('#farbe').val();
            myPath.add(event.point);
       };
       tool.onMouseUp = function(event) {
           myPath.add(event.point);
       };
}

// Funktion um Polygone auszufuellen
/** aktuell noch Problem!!!
function ausfuellen() {
    tool.onMouseDown = function(event) {
        console.log('ausfuellen');
        var farbe = $('#farbe').val();
        console.log(farbe);
        // folgende Zeile ist noch falsch, 
        myPath.add(event.point.fillColor(farbe));
    };
}
*/

/** Funktion um den Canvas-Bereich wieder zu weißen
function loeschen() {
    tool.onMouseDrag = function(event) {
        var circle = new Path.Circle({
            center: event.middlePoint,
            radius: '15px'
        });
        circle.strokeColor = 'white';
        circle.fillColor = 'white';
    };
}
*/

// zeichenGlobal ist globales Objekt in das alle globalen Variablen/Funktionen geschoben werden sollen
zeichenGlobal.loadSVG = function(svgstring) {
    project.clear();
    project.importSVG(svgstring, function() {});
};

zeichenGlobal.saveSVG = function() {
    return project.exportSVG({asString : true, matchShapes: true});
};


//$('#buttonLoeschen').click(loeschen);
//$('#buttonAusfuellen').click(ausfuellen);
$('#buttonFreihandZeichnen').click(freihandZeichnen);
$('#buttonLinienSegment').click(linienSegmentZeichnen);
$('#buttonText').click(textEingeben);
