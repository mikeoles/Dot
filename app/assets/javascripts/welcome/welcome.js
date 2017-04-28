$(document).ready(function() {
    $('#enter').mouseenter(function() {
        $(this).animate({
            height: '+=10px'
        });
    });
    $('#enter').mouseleave(function() {
        $(this).animate({
            height: '-=10px'
        }); 
    });    
});
