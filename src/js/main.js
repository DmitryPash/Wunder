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
  placeholder: "+{0}(000)000-00-00",
  mask: "+{0}(000)000-00-00",
};
var mask = IMask(element, maskOptions);



var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  direction: "horizontal",
  slidesPerView: "auto",
  freeMode: true,
  scrollbar: {
    el: ".swiper-scrollbar",
  },
  mousewheel: true,
});
