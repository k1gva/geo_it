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
    console.log('innerhalb textRechts');
    var inputTextRechts = $('#inputTextRechts').val();
    
    var text = new PointText(new Point(225, 225));
    text.fillColor = 'blue';
    
    text.content = inputTextRechts;
}

function textLinks() {
    console.log('innerhalb textLinks');
    var inputTextLinks = $('#inputTextLinks').val();
    
    var text = new PointText(new Point(25, 25));
    text.fillColor = 'blue';
    
    text.content = inputTextLinks;
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

$('#buttonTextLinks').click(textLinks);