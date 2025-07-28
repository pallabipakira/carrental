// AOS initalization
AOS.init();

// js start here

// For smooth transition from one page to another
const smoothlinks = document.querySelectorAll(".links");
smoothlinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    document.body.classList.add("fade-out");
    setTimeout(() => {
      window.location = this.href;
    }, 500);
  });
});
const links = document.querySelectorAll(".nav-right ul a");
const CurrentUrl = window.location.href;

links.forEach((link) => {
  if (CurrentUrl.includes(link.getAttribute("href"))) {
    link.classList.add("active");
  }
});

// gets element from DOM
const openbtn = document.querySelector(".toggler");
const closebtn = document.querySelector(".classbtn");
const sidebar = document.querySelector(".mobileview");
const body = document.querySelector("body");

// Function for open sidebar
function opensidebar() {
  sidebar.classList.add("open-active");
  body.classList.add("menu-open");
}

// Function for close sidebar
function closesidebar() {
  sidebar.classList.remove("open-active");
  body.classList.remove("menu-open");
}

// Add event listener
openbtn.addEventListener("click", opensidebar);
closebtn.addEventListener("click", closesidebar);

// Swipper initalization

// Faster Checkout slider
const swiper = new Swiper("#slider1", {
  // Optional parameters
  loop: true,
  slidesPerView: 3,
  spaceBetween: 20,
  speed: 800,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

  breakpoints: {
    1440: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 3,
    },
    973: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 2,
    },
    425: {
      slidesPerView: 1,
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const swiper2 = new Swiper("#slider2", {
  slidesPerView: 1,
  loop: true,
  speed: 800,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Counter section

const counters = document.querySelectorAll(".counter");

const startCounting = (counter) => {
  const target = +counter.getAttribute("data-target");
  const speed = 400;
  const suffix = "+"; // Always use plus

  const animate = () => {
    let count = +counter.innerText.replace(/\D/g, "");
    const increment = Math.ceil(target / speed);

    if (count < target) {
      count += increment;
      if (count > target) count = target;
      counter.innerText = count + suffix;
      setTimeout(animate, 20);
    } else {
      counter.innerText = target + suffix;
    }
  };

  animate();
};

// Intersection Observer for scroll trigger

const observer = new IntersectionObserver(
  (entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        startCounting(entry.target);
        obs.unobserve(entry.target); // only once
      }
    });
  },
  {
    threshold: 0.8,
  }
);

// Attach observer
counters.forEach((counter) => {
  observer.observe(counter);
});

// layout for mobile Booking section
const moblayout = document.querySelector(".sort-layout");
const sortbtn = document.querySelector(".sorting");
const radiobtn = document.querySelectorAll(".sort-layout input");

// function for opening sort portion
function opensort() {
  moblayout.classList.add("sort-active");
  body.classList.add("menu-open");
}
function closesort() {
  moblayout.classList.remove("sort-active");
  body.classList.remove("menu-open");
}
sortbtn.addEventListener("click", opensort);

radiobtn.forEach((radio) => {
  radio.addEventListener("click", closesort);
});

// Filter layout for booking section
const filteropenbtn = document.querySelector(".filterbtn");
const filterclosebtn = document.querySelector(".back-btn");
const filterpanel = document.querySelector(".filter-layout");
const secclosebtn = document.querySelector(".filterclose");

// function for open filter panel
function openfilter() {
  filterpanel.classList.add("filter-active");
  body.classList.add("menu-open");
}
// functoin for close filter panel
function closefilter() {
  filterpanel.classList.remove("filter-active");
  body.classList.remove("menu-open");
}
filteropenbtn.addEventListener("click", openfilter);
filterclosebtn.addEventListener("click", closefilter);
secclosebtn.addEventListener("click", closefilter);
