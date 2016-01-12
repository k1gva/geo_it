var myPath;
var tool = new Tool();

//helper function to clear functions attached to tool events - reset!
function toolReset() {
  tool.onMouseDown = null;
  tool.onMouseUp = null;
  tool.onMouseDrag = null;  
}

// Funktion für die Eingabe von Textfeldern in das Zeichen
function textEingeben() {
    toolReset();
    //console.log('test');
    var text = prompt('Was wollen Sie in das Textfeld schreiben?');
    //console.log(text);
    tool.onMouseDown = function(event) {
        if(text != "") {
            console.log(event.point);
            var eingabe = new PointText(new Point(event.point.x, event.point.y));
            eingabe.fillColor = $('#farbe').val();
            eingabe.fontSize = '24px';
            eingabe.content = text;
            text =""; 
        }
    };
}

// Funktion um Freihand zu zeichnen
function freihandZeichnen() {
    myPath = new Path();
    toolReset();
    
    tool.onMouseDown = function(event) {
    //Reset the Path when the user clicks on a new location. prevents a connecting line between the two freehand paths.
        myPath = new Path();
    };
    
    tool.onMouseDrag = function(event) {
        myPath.strokeColor = $('#farbe').val();
        myPath.add(event.point);
    };
}

// Funktion um Linien einzufügen
function linienSegmentZeichnen() {
    toolReset();
    myPath = new Path();
    tool.onMouseDown = function(event) {
        myPath.strokeColor = $('#farbe').val();
        myPath.add(event.point);
    };
    tool.onMouseUp = function(event) {
       myPath.add(event.point);
    };
}

//function to draw rectangles
function drawRectangle() {
    toolReset();
    var from, to;
    tool.onMouseDown = function(event) {
        from = new Point(event.point.x, event.point.y);
    };
    tool.onMouseUp = function(event) {
        to = new Point(event.point.x, event.point.y);
        myPath = new Path.Rectangle(from,to);
        myPath.strokeColor = $('#farbe').val();
        myPath.fillColor = $('#farbe2').val();
    };
}


// noch immer buggy!!
function loeschen() {
    toolReset();
    tool.onMouseDown = function(event) {
        var HitResult = project.hitTest(event.point, {tolerance: 10});
        if(HitResult) {
            HitResult.item.remove();
        }
    };
}


// zeichenGlobal ist globales Objekt in das alle globalen Variablen/Funktionen geschoben werden sollen
zeichenGlobal.loadSVG = function(svgstring) {
    project.clear();
    project.importSVG(svgstring, function() {});
};

zeichenGlobal.saveSVG = function() {
    return project.exportSVG({asString : true, matchShapes: true});
};


$('#buttonLoeschen').click(loeschen);
$('#buttonFreihandZeichnen').click(freihandZeichnen);
$('#buttonLinienSegment').click(linienSegmentZeichnen);
$('#buttonText').click(textEingeben);
$('#buttonRectangle').click(drawRectangle);
