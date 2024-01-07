var scale = 1,
    panning = false,
    pointX = 0,
    pointY = 0,
    start = { x: 0, y: 0 },
    initialScale = 1,
    zoom = document.getElementById("zoom"),
    zoomRect = zoom.getBoundingClientRect();

function setTransform() {
    zoom.style.transform = "translate(" + pointX + "px, " + pointY + "px) scale(" + scale + ")";
}

zoom.onmousedown = function (e) {
    e.preventDefault();
    start = { x: e.clientX - pointX, y: e.clientY - pointY };
    panning = true;
}

zoom.onmouseup = function (e) {
    panning = false;
}

zoom.onmousemove = function (e) {
    e.preventDefault();
    if (!panning) {
        return;
    }
    
    pointX = Math.min(0, Math.max(zoomRect.width - zoomRect.width * scale, (e.clientX - start.x)));
    pointY = Math.min(0, Math.max(zoomRect.height - zoomRect.height * scale, (e.clientY - start.y)));
    
    setTransform();
}

zoom.onwheel = function (e) {
    e.preventDefault();
    var xs = (e.clientX - pointX) / scale,
        ys = (e.clientY - pointY) / scale,
        delta = (e.wheelDelta ? e.wheelDelta : -e.deltaY);

    if (delta > 0) {
        scale *= 1.2;
    } else {
     
        if (scale / 1.2 >= initialScale) {
            scale /= 1.2;
        }
    }

 
    pointX = Math.min(0, Math.max(zoomRect.width - zoomRect.width * scale, e.clientX - xs * scale));
    pointY = Math.min(0, Math.max(zoomRect.height - zoomRect.height * scale, e.clientY - ys * scale));

    setTransform();
}


