$(document).ready(function() {   
    $('.scroll-down').mouseenter(function(){
        $('html, body').animate({
            scrollTop: $("#allSales").offset().top
        }, 1000);        
    });    
    $('#options a').mouseenter(function(){
        $(this).fadeTo('fast',1);
    });
    $('#options a').mouseleave(function(){
        $(this).fadeTo('fast',.7);
    });      
});