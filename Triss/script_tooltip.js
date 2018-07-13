document.onmousemove = moveTip;
function moveTip(e) {
    var floatTipStyle = document.getElementById("toolTip").style;
    var w = 200;
    var h = 30;

    var x = e.pageX;
    var y = e.pageY;

    if(x + w + 10 < document.body.childNodes[1].offsetWidth + document.body.childNodes[1].offsetLeft) {
        floatTipStyle.left = x + 10 + "px";
    } else {
        floatTipStyle.left = (x - w - 10) + "px";
    }

    if(y + h + 18 > document.body.offsetHeight){
        floatTipStyle.top = (y - h - 10) + "px";
    } else {
        floatTipStyle.top = y + 10 + "px";
    }
};

function toolTip(msg) {
    var floatTipStyle = document.getElementById("toolTip").style;
    if(msg) {
        document.getElementById("toolTip").innerHTML = msg;
        floatTipStyle.display = "block";
    } else {
        floatTipStyle.display= "none";
    }
};