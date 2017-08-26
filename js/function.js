$(document).ready(function() {

    $("[data-scroll]").click(function(e) {
        e.preventDefault();
        var el = $('html, body');
        el.on("scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove", function(){
            el.stop();
        });
        el.stop().animate({
            scrollTop: $($(this).attr('href')).offset().top - 30
        }, 1000);
    });

});
