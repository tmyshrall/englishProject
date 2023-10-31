let clickCount = 0;
    let isCombined = false;
    let dragTimer;

    function openPopup1() {
        document.getElementById("myPopup").style.display = "block";
    }

    function closePopup1() {
        document.getElementById("myPopup").style.display = "none";
    }

    function allowDrop(ev) {
        ev.preventDefault();
    }

    function drag(ev) {
        ev.dataTransfer.setData("text", ev.target.id);
    }

    function drop(ev) {
        ev.preventDefault();
        var data = ev.dataTransfer.getData("text");
        if (data === "myImage") {
            var image = document.getElementById(data);
            var target = ev.target;
            if (target.id === "myImage2") {
                target.src = "images/lob2.png";
                image.style.display = 'none';
                document.getElementById('instruction').style.display = 'none';
                document.getElementById('myImage2').setAttribute('id', 'lob2');
                document.getElementById('newText').style.display = 'block';
                isCombined = true;
            }
        }
    }

    function uncombine() {
        document.getElementById('newText').style.display = 'none';
        document.getElementById('congratsText').style.display = 'block';
        document.getElementById('lob4').style.display = 'none';
        document.getElementById('myImage').style.display = 'none';
        document.getElementById('myImage2').style.display = 'none';
        clickCount = 0;
        isCombined = false;
    }

    document.addEventListener('click', function (event) {
        if (isCombined && event.target.id === 'lob2') {
            clickCount++;
            if (clickCount === 1) {
                event.target.src = "images/lob3.png";
            } else if (clickCount === 2) {
                event.target.src = "images/lob4.png";
                event.target.setAttribute('id', 'lob4');
                document.getElementById('newText').innerText = "Great! Now drag the image to remove the needle";
                document.getElementById('instruction').style.display = 'none';
                document.getElementById('newText').style.display = 'block';
            } else if (clickCount === 3) {
                uncombine();
                document.getElementById('congratsText').innerText = "Congratulations! You have completed a lobotomy.";
            } else {
                alert("You can only click the image thrice!");
            }
        }
    });

    document.addEventListener('dragstart', function (event) {
        if (event.target.id === 'lob4') {
            dragTimer = setTimeout(function() {
                uncombine();
                document.getElementById('congratsText').innerText = "Congratulations! You have completed a lobotomy.";
            }, 500); 
        }
    });

    document.addEventListener('dragend', function (event) {
        clearTimeout(dragTimer); 
    });