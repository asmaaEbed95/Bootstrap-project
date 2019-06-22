$(document).ready(function(){
    $('.carousel').carousel({
        interval: 3000
    });
    
    //Show color option div when click on gear
    $(".gear-cheack").click(function()
      {
        $(".color-option").fadeToggle();
      });
});