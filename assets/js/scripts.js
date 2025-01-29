//Toggle .active to header on scroll
const header = document.querySelector('.header');

window.addEventListener("scroll", () => {
    if(window.scrollY > 50){
      header.classList.add("active");
    } else {
      header.classList.remove("active");
    }
});

// Scroll to section id
const btnScroll = document.querySelector('.btnScroll');
const btnScrollAttr = document.querySelector(btnScroll.dataset.scroll);

btnScroll.addEventListener('click', () => {
  btnScrollAttr.scrollIntoView({
    behavior: 'smooth'
  });
});


// Screen mode - light/dark
const themeSwitch = document.getElementById('screenMode');
const themeLabel = document.querySelector('label[for="screenMode"]');

const sourceElement = document.querySelector('.logo-webp');
const imgElement = document.querySelector('.logo');

function updateTheme(isDark) {
  const theme = isDark ? 'dark' : 'light';
  document.documentElement.setAttribute('data-bs-theme', theme);

  themeLabel.textContent = isDark ? 'Dark Theme' : 'Light Theme';

  if (isDark) {
    sourceElement.srcset = 'assets/img/logo-light.webp';
    imgElement.src = 'assets/img/logo-light.png';
  } else {
    sourceElement.srcset = 'assets/img/logo-dark.webp';
    imgElement.src = 'assets/img/logo-dark.png';
  }

    localStorage.setItem('theme', theme);
}

const savedTheme = localStorage.getItem('theme');
const isDark = savedTheme === 'dark';
themeSwitch.checked = isDark;
updateTheme(isDark);

themeSwitch.addEventListener('change', () => {
  updateTheme(themeSwitch.checked);
});


//SwiperJs Testimonials
var swiper = new Swiper(".swiperTestimonials", {
  autoHeight: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    1300: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1400: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});


//SwiperJs Modal
var swiper = new Swiper(".swiperModal", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    700: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    1400: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
  },
});

document.querySelectorAll(".element-action").forEach(button => {
  button.addEventListener("click", function () {
    let slideIndex = parseInt(this.getAttribute("data-slide"), 10);
    
    setTimeout(() => {
      swiper.slideTo(slideIndex);
    }, 300); 
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting){
      entry.target.classList.add('aos-show');
    }
  });
});

const hiddenElements = document.querySelectorAll('.aos-hidden');
hiddenElements.forEach((e) => observer.observe(e));
