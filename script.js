// Подключение EmailJS
document.addEventListener("DOMContentLoaded", function () {
  emailjs.init("m8SqrVEe6YFiwOTr2"); // Замените на ваш ID из EmailJS

  // Открытие формы
  document
    .getElementById("open-form-btn")
    .addEventListener("click", function () {
      document.querySelector(".modal").style.display = "flex";
    });

  // Закрытие формы
  document.querySelector(".close-btn").addEventListener("click", function () {
    document.querySelector(".modal").style.display = "none";
  });

  // Отправка формы
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (e) {
      e.preventDefault();

      const form = document.getElementById("contact-form");

      emailjs.sendForm("service_2z29a9e", "template_0e63dyp", form).then(
        function () {
          alert("Сообщение отправлено!");
          document.querySelector(".modal").style.display = "none";
          form.reset();
        },
        function (error) {
          alert("Ошибка при отправке: " + error.text);
        }
      );
    });
});

document.addEventListener("DOMContentLoaded", () => {
  const swiper = new Swiper(".swiper-container", {
    // Основные параметры слайдера
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,

    // Навигация
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    // Автовоспроизведение
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },

    // Наблюдатель за изменениями
    observer: true,
    observeParents: true,

    // Эффекты перехода
    effect: "slide",
    fade: {
      crossFade: true,
    },

    // Пагинация
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },

    // Адаптивность
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 1,
        spaceBetween: 40,
      },
    },

    // Дополнительные эффекты
    speed: 700,
    grabCursor: true,
    preventClicks: true,
    preventClicksPropagation: true,
  });
});
