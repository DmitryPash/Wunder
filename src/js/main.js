$(".accordion-item").click(function () {
  $(this).toggleClass("active");
  $(this)
    .children(".item-header")
    .children(".accordion-item-btn")
    .toggleClass("accordion-item-btn-open");
});


$(function () {
  $("#callbackform").validate({
    rules: {
      
      email: {
        required: true,
        email: true,
      },
      phone: {
        required: true,
      },
      name: {
        required: true,
       lettersonly: true,
      },
    },
    messages: {
      name: "Введите свое имя",
      email: "Введите ваш email",
      phone: "Введите ваш номер телефона",

    },
    submitHandler: function (form) {
      form.submit();
    },
  });
});
jQuery.validator.addMethod(
   "lettersonly",
   function (value, element) {
     return this.optional(element) || /^[a-zA-ZА-Яа-я-ё\s]+$/i.test(value);
   },
   "Incorrect format"
 );
// iMask

var element = document.getElementById("imask-phone");
var maskOptions = {
  placeholder: "+{000}(00)000-00-00",
  mask: "+{375}(00)000-00-00",
};
var mask = IMask(element, maskOptions);



var swiper = new Swiper(".mySwiper", {
  spaceBetween: 15,
  direction: "horizontal",
  slidesPerView: "auto",
  freeMode: true,
  loop: true,
  autoplay: {
    delay: 1,
    disableOnInteraction: false
  },
  slidesPerView: 'auto',
  speed: 9000,
  grabCursor: true,
  mousewheelControl: true,
  keyboardControl: true,
  scrollbar: {
    el: ".swiper-scrollbar",
  },
  breakpoints: {
    400: {
      spaceBetween: 30
    }
  }
  // mousewheel: true,
});


//Resize textarea
jQuery(document).ready(function ($){
  // Start JS
    function elasticArea() {
      $('.callback-textarea').each(function(index, element) {
         var elasticElement = element,
            $elasticElement = $(element),
            initialHeight = initialHeight || $elasticElement.height(),
            delta = parseInt( $elasticElement.css('paddingBottom') ) + parseInt( $elasticElement.css('paddingTop') ) || 0,
            resize = function() {
              $elasticElement.height(initialHeight);
              $elasticElement.height( elasticElement.scrollHeight - delta );
          };
        $elasticElement.on('input change keyup', resize);
        resize();
      });
    };
  elasticArea();
  // END JS
  });



