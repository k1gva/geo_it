var myPath;

function onMouseDown(event) {
    myPath = new Path();
    myPath.strokeColor = 'black';
    myPath.add(event.point);
}
/**
function onMouseDrag(event) {
	myPath.add(event.point);
}
*/

function onMouseUp(event) {
    myPath.add(event.point);
}

console.log('außerhalb text rechts...');


// wenn Funktion aufgerufen wird, dauert es > 5 Sekunden bis der Text in das Canvas Objekt geschrieben wird, WHY?????????
function textRechts() {
    // asynchroner shit...
    console.log('innerhalb textRechts2');
    var inputTextRechts = $('#inputTextRechts').val();
    
    var text = new PointText(new Point(225, 225));
    text.fillColor = 'blue';
    console.log('vor dem Einfügen');
    text.content = inputTextRechts;
    console.log('nach dem Einfügen');
}


// zeichenGlobal ist globales Objekt in das alle globalen Variablen/Funktionen geschoben werden sollen
zeichenGlobal.loadSVG = function(svgstring) {
    project.clear();
    project.importSVG(svgstring, function() {});
};

zeichenGlobal.saveSVG = function() {
    
    return project.exportSVG({asString : true, matchShapes: true});
};

$('#buttonTextRechts').click(textRechts);
