$(document).ready(function(){
    $('.carousel').carousel({
        interval: 3000
    });
    
    //Show color option div when click on gear
    $(".gear-cheack").click(function()
      {
        $(".color-option").fadeToggle();
      });
    
    //Change Theme Color On Click
    
    var colorLi = $(".color-option ul li");
    
    colorLi
    .eq(0).css("backgroundColor","#E41B17").end()
    .eq(1).css("backgroundColor","#E426D5").end()
    .eq(2).css("backgroundColor","#009AFF").end()
    .eq(3).css("backgroundColor","#FFD500");
    
    colorLi.click(function()
    {
        $("link[href*='theme']").attr("href",$(this).attr("data-value"));
    });
    
    //scrolling screen button to top
    
    var scrollButton = $("#scroll-top");
    
    $(window).scroll(function(){
        if( $(this).scrollTop() >= 700 )
        {
            scrollButton.show();
        }
        else
        {
            scrollButton.hide();
        }
    
    });
    
     scrollButton.click(function(){
            $("html,body").animate({ scrollTop : 0},600);
            //600 is the speed of the scrolling
        });
    
});

//loading screen

$(window).load(function() {
    
    //first hide the paragraph then the background
    
    $(".loading-overlay .spinner").fadeOut(2000,
       function(){
           $(this).parent().fadeOut(2000,
                function(){
                    $("body").css("overflow","auto");
                    $(this).remove();
                });
        });
});

