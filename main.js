     $(document).ready(function () {

         ScrollReveal({
             reset: true
         });
         //This is INDEX animation
         ScrollReveal().reveal('.project-card', {
             duration: 1400,
             scale: 0.98
         });


         //This is ABOUT animation
         ScrollReveal().reveal('#greeting', {
             duration: 1600,
             scale: 0.98
         });
         ScrollReveal().reveal('#philosophy', {
             duration: 1600,
             scale: 0.98
         });
         ScrollReveal().reveal('#experience', {
             duration: 1600,
             scale: 0.98
         });
         ScrollReveal().reveal('#contact', {
             duration: 1200,
             scale: 0.88
         });

         var textArray = ["Gü", "Shengfeng Gu", "顾 盛锋"];
         var index = 0;
         setInterval(function () {
             $("#name").animate({}, function () {
                 if (textArray.length > index) {
                     $(this).text(textArray[index]).animate({
                         opacity: 1
                     })
                     index++;
                 } else
                     index = 0;
             });
         }, 400);

         //menu
         var count = 0;
         $('#collasped-one').hide();
         
         $('#nav-icon4').click(function () {
             count++;
             $(this).toggleClass('open');

             if (count % 2 != 0) {
                 $('.content-left ').css('height', '90vh');
                 $('.content-list, footer').show();
                 $('#collasped-one').show();
             } else {
                 $('.content-left').css('height', '10vh');
                 $('.content-list, footer').hide();
             }
         });

         //scroll top
         var scrollTrigger = 200, // px
            
             backToTop = function () {

                 var scrollTop = $(window).scrollTop();
                 if (scrollTop > scrollTrigger) {
                     $('#back-to-top').addClass('show');
                     $('#up').addClass('fa fa-chevron-up fa-2x');
                 } else {
                     $('#back-to-top').removeClass('show');
                     $('#up').removeClass('fa fa-chevron-up fa-2x');
                 }

             };

         backToTop();
         $(window).on('scroll', function () {
             backToTop();
         });

         $('#back-to-top').on('click', function (e) {
             e.preventDefault();
             $('html,body').animate({
                 scrollTop: 0
             }, 700);
         });


         //Accordion
         var coll = document.getElementsByClassName("collapsible");
         var i;

         for (i = 0; i < coll.length; i++) {
             coll[i].addEventListener("click", function () {
                 this.classList.toggle("active");
                 var content = this.nextElementSibling;
                 if (content.style.maxHeight) {
                     content.style.maxHeight = null;
                 } else {
                     content.style.maxHeight = content.scrollHeight + "px";
                 }
             });
         }

     });
