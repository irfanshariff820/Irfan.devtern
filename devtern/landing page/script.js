document.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.querySelector(".container__menuBtn");
    const closeBtn = document.querySelector(".container__closeBtn");
    const container__menu = document.querySelector(".container__menu");
  
    try {
      if (menuBtn && closeBtn && container__menu) {
        menuBtn.addEventListener("click", () => {
          container__menu.style.display = "block";
          menuBtn.style.display = "none";
          closeBtn.style.display = "block";
        });
        closeBtn.addEventListener("click", () => {
          container__menu.style.display = "none";
          menuBtn.style.display = "block";
          closeBtn.style.display = "none";
        });
      }
    } catch (error) {
      console.log(error.message);
    }
  });
  
  document.addEventListener("DOMContentLoaded", () => {
    const slider = document.querySelector(".slider");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");
    let slideIndex = 0;
    const slides = document.querySelectorAll(".slide");
    const totalSlides = slides.length;
    const slideWidth = 100; // 100% of the slider's width
  
    function showSlide(index) {
      if (index >= totalSlides) {
        slideIndex = 0; // Restart from the beginning
      } else if (index < 0) {
        slideIndex = totalSlides - 1; // Go to the last slide
      }
      const translateXValue = -slideIndex * slideWidth;
      slider.style.transform = `translateX(${translateXValue}%)`;
    }
  
    prevBtn.addEventListener("click", () => {
      showSlide(--slideIndex);
    });
  
    nextBtn.addEventListener("click", () => {
      showSlide(++slideIndex);
    });
  
    setInterval(() => {
      showSlide(++slideIndex);
    }, 5000);
  });
  
  document.addEventListener("DOMContentLoaded", () => {
    const likeIcons = document.querySelectorAll(".heart-icon");
    const likeCounts = document.querySelectorAll(".like-count");
  
    likeIcons.forEach((icon, index) => {
      icon.addEventListener("click", () => {
        let initialVal = parseInt(likeCounts[index].textContent);
  
        if (icon.classList.contains("liked")) {
          icon.classList.remove("liked");
          initialVal--;
        } else {
          icon.classList.add("liked");
          initialVal++;
        }
  
        if (isNaN(initialVal)) {
          likeCounts[index].textContent = 1;
        } else {
          likeCounts[index].textContent = initialVal;
        }
      });
    });
  });
  