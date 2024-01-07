document.body.addEventListener('click', function() {
    document.querySelector('.outside').style.opacity = 0;
    setTimeout(function() {
        window.location.href = 'mainRoom.html'; 
    }, 500); 
});

document.body.addEventListener('click', function() {
    document.querySelector('.title').style.opacity = 0;
    setTimeout(function() {
        window.location.href = 'outside.html'; 
    }, 500); 
});