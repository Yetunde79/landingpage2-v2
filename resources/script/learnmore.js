var scroll = new SmoothScroll();
var button = document.querySelector('#button');
var toggle = document.querySelector('#learn');


button.addEventListener("click", function(){
    var options = { speed: 3500, easing: 'easeOutCubic' };
    scroll.animateScroll(button, toggle, options);
});

/*$("#button").click(function() {
    $('html, body').animate({
        scrollTop: $("#learn").offset().top
    }, 2000);
});*/