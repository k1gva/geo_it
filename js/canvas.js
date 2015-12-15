//var canvas = document.getElementById('#myCanvas');

var myPath;

function onMouseDown(event) {
    myPath = new Path();
    myPath.strokeColor = 'black';
    myPath.add(event.point);
}

function onMouseDrag(event) {
	myPath.add(event.point);
}

function onMouseUp(event) {
    myPath.add(event.point);
}

console.log('außerhalb text rechts...');

function textRechts() {
    console.log('innerhalb textRechts');
    var inputTextRechts = $('#inputTextRechts');
    
    var text = new PointText(new Point(225, 225));
    text.fillColor = 'blue';
    
    text.content = inputTextRechts;
}


$('#buttonText').click(textRechts);