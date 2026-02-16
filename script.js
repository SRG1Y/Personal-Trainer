 // Подключение EmailJS
document.addEventListener("DOMContentLoaded", function () {
  emailjs.init("m8SqrVEe6YFiwOTr2"); // Замените на ваш ID из EmailJS

  const modal = document.getElementById("signup-modal");
  const closeButton = modal.querySelector(".close-btn");
  const form = document.getElementById("contact-form");

  const openButtons = document.querySelectorAll(
    "#open-form-btn, #open-form-btn-secondary"
  );

  const openModal = () => {
    modal.classList.remove("modal--hidden");
  };

  const closeModal = () => {
    modal.classList.add("modal--hidden");
  };

  openButtons.forEach((button) => {
    if (button) {
      button.addEventListener("click", openModal);
    }
  });

  closeButton.addEventListener("click", closeModal);

  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeModal();
    }
  });

      
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeModal();
    }
  });

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    emailjs.sendForm("service_2z29a9e", "template_0e63dyp", form).then(
      function () {
        alert("Сообщение отправлено!");
        closeModal();
        form.reset();
      },
      function (error) {
        alert("Ошибка при отправке: " + error.text);
      }
    );
  });

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