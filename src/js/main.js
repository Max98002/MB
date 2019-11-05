$(document).ready(function () {
  var modal = $('#modal');
  var modal__button = $('.modal-btn');
  var modal__close = $('.modal__close');

  modal__button.on('click', function (event) {
    event.preventDefault();
    modal.addClass('modal-active');
  });
  modal__close.on('click', function () {
    modal.removeClass('modal-active');
  });

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
      username: {
        required: true,
        minlength: 2
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
        required: "Укажите имя",
        minlength: jQuery.validator.format("Осталось cимволов! {0}")
      },
      email: {
        required: "Заполните поле Email",
        email: "Введите корректный email"
      }
    },
    submitHandler: function (form) {
      $.ajax({
        url: form.action,
        type: form.method,
        data: $(form).serialize(),
        success: function (response) {
          console.log("Hello Все гуд: " + response);
          $('#brif-form')[0].reset();
          thanksmodal.addClass('thanksmodal_active');
        },
        error: function (jqHXR, textStatus, errorThrown) {
          console.log(jqHXR + " " + textStatus);
        }
      });
    }
  });

  // Валідація форми

});