$(document).ready(function () {
  var modal = $('#modal');
  var modal__button = $('.modal-btn');
  var modal__close = $('.modal__close');
  var services__button = $('.services_btn');
  var modal__services = $('#servicesModal');
  var modal_servicesClose = $('.servicesModal-close');
  var submit_btn = $('.modal__button');
  var img_load = $('.modal__button_image');
  // main modal
  modal__button.on('click', function (event) {
    event.preventDefault();
    modal.addClass('modal-active');
  });
  modal__close.on('click', function () {
    modal.removeClass('modal-active');
  });
  // main modal

  // Modal-services-active
  services__button.on('click', function (eventm) {
    eventm.preventDefault();
    modal__services.addClass('servicesModal-active');
    var target = $(this).attr('data-target');
    $('.columnQ').load(target + ".html")
  });
  modal_servicesClose.on('click', function () {
    modal__services.removeClass('servicesModal-active');
  });
  // Modal-services-active

  // submit-modal
  submit_btn.on('click', function () {
    img_load.addClass('modal__button_image-active')
  });
  // submit-modal


  // Прокрутка До секцій
  $("a[href^='#']").click(function () {
    var _href = $(this).attr("href");
    $("html, body").animate({ scrollTop: $(_href).offset().top + "px" }, 800);
    return false;
  });
  // Прокрутка До секцій

  // Повернення До секцій топ
  $(window).scroll(function () {
    if ($(this).scrollTop() > 800) {
      $('.arrow-up').fadeIn();
    } else {
      $('.arrow-up').fadeOut();
    }
  });

  $('.arrow-up').click(function () {
    $("html, body").animate({ scrollTop: 0 }, 800);
    return false;
  });
  // Повернення До секцій топ

  // Валідація форми
  $('#form-validate').validate({
    rules: {
      field: { accept: "[a-zA-Z]+" },
      username: {
        required: true,
        minlength: 2,
        maxlength: 8,
      },
      email: {
        required: true,
        email: true
      }
    },
    errorElement: "div",
    errorClass: "error",
    messages: {
      username: {
        required: "Вкажіть ім'я",
        minlength: jQuery.validator.format("Залишилось {0} символи"),
        maxlength: jQuery.validator.format("Не більше {0} символів")
      },
      email: {
        required: "Заповніть поле Email",
        email: "Введіть коректний Email"
      }
    },
    submitHandler: function (form) {
      $.ajax({
        url: form.action,
        type: form.method,
        data: $(form).serialize(),
        success: function (response) {
          console.log("Hello Все гуд: " + response);
          $('.modal-form')[0].reset();
          modal.removeClass('modal-active');
          img_load.removeClass('modal__button_image-active');
          var thanks = $('#thanks');
          thanks.addClass('thanks-active');
          function close() {
            thanks.removeClass('thanks-active');
          }
          setTimeout(close, 3000);
        },
        error: function (jqHXR, textStatus, errorThrown) {
          console.log(jqHXR + " " + textStatus);
        }
      });
    }
  });
  // Валідація форми

  // Валідація форми Service
  $('#service-validate').validate({
    rules: {
      field: { accept: "[a-zA-Z]+" },
      username: {
        required: true,
        minlength: 2,
        maxlength: 8,
      },
      email: {
        required: true,
        email: true
      }
    },
    errorElement: "div",
    errorClass: "error",
    messages: {
      username: {
        required: "Вкажіть ім'я",
        minlength: jQuery.validator.format("Залишилось {0} символи"),
        maxlength: jQuery.validator.format("Не більше {0} символів")
      },
      email: {
        required: "Заповніть поле Email",
        email: "Введіть коректний Email"
      }
    },
    submitHandler: function (form) {
      $.ajax({
        url: form.action,
        type: form.method,
        data: $(form).serialize(),
        success: function (response) {
          console.log("Hello Все гуд: " + response);
          $('.modal-form')[0].reset();
          modal__services.removeClass('servicesModal-active');
          var thanks = $('#thanks');
          thanks.addClass('thanks-active');
          function close() {
            thanks.removeClass('thanks-active');
          }
          setTimeout(close, 3000);
        },
        error: function (jqHXR, textStatus, errorThrown) {
          console.log(jqHXR + " " + textStatus);
        }
      });
    }
  });
  // Валідація форми Service


});