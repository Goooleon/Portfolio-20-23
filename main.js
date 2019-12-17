     
$( document ).ready(function() {
    
    ScrollReveal({ reset: true });
    //This is INDEX animation
     ScrollReveal().reveal('.project-card', { duration: 1400, scale: 0.98 });
    
    
    //This is ABOUT animation
    ScrollReveal().reveal('#greeting', { duration: 1600, scale: 0.98 });
    ScrollReveal().reveal('#philosophy', { duration: 1600, scale: 0.98 });
    ScrollReveal().reveal('#experience', { duration: 1600, scale: 0.98 });
    ScrollReveal().reveal('#contact', {origin: 'right', distance: '300px', duration: 2000,});
    
    var textArray = ["Gü","Shengfeng Gu"];
    var index = 0;
    setInterval(function(){        
    $("#name").animate({
    },function()
    {
       if(textArray.length > index) {
       $(this).text(textArray[index]).animate({opacity:1})
       index++; 
       }
       else
       index = 0;
    });
    },400);
    
    
    
    //Accordion
    var coll = document.getElementsByClassName("collapsible");
    var i;

    for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight){
          content.style.maxHeight = null;
        } else {
          content.style.maxHeight = content.scrollHeight + "px";
        } 
      });
    }
    
});