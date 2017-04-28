$(document).on('page:load', function() {  
    $('.menuOptions li').mouseenter(function(){
        $(this).fadeTo('fast',1);
    });
    $('.menuOptions li').mouseleave(function(){
        $(this).fadeTo('fast',.8);
    });
});
$(document).ready(function() {   
    $('.menuOptions li').mouseenter(function(){
        $(this).fadeTo('fast',1);
    });
    $('.menuOptions li').mouseleave(function(){
        $(this).fadeTo('fast',.8);
    });
});

$(document).on('page:load', function() {   
    $('.menuOptions').hide();
    $('.menuButton').mouseenter(function(){
        $(this).hide();
        $('.menuOptions').show();
    });
    
    $('.menuOptions').mouseleave(function(){
        $(this).hide();
        $('.menuButton').show();
    });       
});

$(document).ready(function() {   
    $('.menuOptions').hide();
    $('.menuButton').mouseenter(function(){
        $(this).hide();
        $('.menuOptions').show();
    });
    
    $('.menuOptions').mouseleave(function(){
        $(this).hide();
        $('.menuButton').show();
    });       
});
