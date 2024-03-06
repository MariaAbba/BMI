// ? =============================BURGER-MENU ==================================
let menuButton = document.querySelector('.burger-menu__button');
let mobileMenu = document.querySelector('.burger-menu__overlay');
let closeMenu = document.querySelector('.burger-close__button');
let overlay = document.querySelector('.body-overlay');

menuButton.addEventListener('click', function () {
  mobileMenu.classList.add('active');
  overlay.style.transition = 'all .5s ease';
  overlay.classList.add('overlay');

})
closeMenu.addEventListener('click', function () {
  mobileMenu.classList.remove('active');
  overlay.classList.remove('overlay');
})


// ? ================== STICKY MENU
window.addEventListener('scroll', function () {
  const header = document.querySelector("header");
  const logo = document.querySelector(".logo");
  const stickyLogo = document.querySelector(".sticky-logo");
  const contacts = document.querySelector(".header__inner-contacts");
  header.classList.toggle('sticky', window.scrollY >= 200);
  if (header.classList.contains('sticky')) {
    logo.style.display = 'none';
    stickyLogo.style.display = 'block';
    contacts.style.display = 'none';
  } else {
    logo.style.display = 'block';
    stickyLogo.style.display = 'none';
    contacts.style.display = 'block';
  }
});
// ? =============================SEARCH-MENU ==================================
let searchButton = document.querySelector('.mobile__search');
let searchMenu = document.querySelector('.search-menu__overlay');
let searchClose = document.querySelector('.search-close__button');

searchButton.addEventListener('click', function () {
  searchMenu.classList.add('active');
  overlay.classList.add('overlay');
})
searchClose.addEventListener('click', function () {
  searchMenu.classList.remove('active');
  overlay.classList.remove('overlay');
})


// ? ============================= ENQUIRY ==================================
let enquiryButton = document.querySelector('.enquiry__button');
let enquiryMenu = document.querySelector('.enquiry__overlay');
let enquiryClose = document.querySelector('.enquiry-close__button');

enquiryButton.addEventListener('click', function () {
  enquiryMenu.classList.add('active');
  overlay.classList.add('overlay');
  document.body.style.overflow = "hidden";

})
enquiryClose.addEventListener('click', function () {
  enquiryMenu.classList.remove('active');
  overlay.classList.remove('overlay');
  document.body.style.overflow = "visible";
})
// ? ============================= ENQUIRY BLUE ==================================
// let enquiryButton1 = document.querySelector('enquiry__button.enquiry__button-blue');
// let enquiryMenu1 = document.querySelector('.enquiry__overlay.enquiry__button-blue');
// let enquiryClose1 = document.querySelector('.enquiry-close__button.enquiry__button-blue');

// enquiryButton1.addEventListener('click', function () {
//   enquiryMenu1.classList.add('active');
//   overlay.classList.add('overlay');
// })
// enquiryClose1.addEventListener('click', function () {
//   enquiryMenu1.classList.remove('active');
//   overlay.classList.remove('overlay');
// })

// ? =================POPUP ===========================
$(document).ready(function () {
  if ($('.popup-youtube, .popup-vimeo, .popup-gmaps').length > 0) {
    $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
      disableOn: 700,
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false
    });
  }
});


// ? ================= TRAINERS SWIPER ===========================
const swiper = new Swiper('.swiper.swiper-trainers', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
  breakpoints: {
    // when window width is >= 320px
    578: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    // when window width is >= 480px
    992: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    // when window width is >= 640px
    1200: {
      slidesPerView: 4,
      spaceBetween: 30
    }
  }
});

// let a;
// function showHide(){
//   if(a==1){
//     document.getElementById("image").style.display="inline";
//     return a = 0;
//   } else{
//     document.getElementById("image").style.display="none";
//     return a = 1;
//   }
// }
// ? ================= NEWS SWIPER ===========================
const swiper2 = new Swiper('.swiper.swiper-news', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
  breakpoints: {

    768: {
      slidesPerView: 2,
      spaceBetween: 10
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    // when window width is >= 640px
    // 1200: {
    //   slidesPerView: 4,
    //   spaceBetween: 30
    // }
  }
});


// ? ================================ Blogs ============================
// todo Filter JS
$(document).ready(function () {
  $('.filter-item').click(function () {
    const value = $(this).attr('data-filter')
    if (value == "all") {
      $(".post-box").show("1000")
    }
    else {
      $(".post-box").not('.' + value).hide('1000')
      $(".post-box").filter('.' + value).show('1000')
    }
  });
  // todo Add active to btn
  $(".filter-item").click(function () {
    $(this).addClass("active-filter").siblings().removeClass("active-filter");
  });
})

// todo Header Background on scroll
// let header = document.querySelector('header');

// window.addEventListener("scroll", () => {
//   header.classList.toggle("shadow", window.scrollY > 0);
// })
// ? ================= CLIENTS SWIPER ===========================
const swiper3 = new Swiper('.swiper.swiper-clients', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
  breakpoints: {
    380: {
      slidesPerView: 2,
      spaceBetween: 10
    },
    576: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 20
    },
    992: {
      slidesPerView: 6,
      spaceBetween: 30
    }
  }
});

// ?  ABOUT SLIDER
const swiper5 = new Swiper('.swiper.swiper-banner', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  autoplay: {
    delay: 3000,
  },
});

// ? ================= PARTNERS SWIPER ===========================
const swiper4 = new Swiper('.swiper.swiper-partners', {
  direction: 'horizontal',
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 10
    },
    456: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 20
    },
    992: {
      slidesPerView: 6,
      spaceBetween: 30
    }
  }
});

// ? ================= NUMBERS ========================
const container = document.querySelector('.numbers__inner');
const counters = document.querySelectorAll(".numbers__inner .numbers__numbers")

let activated = false;

if (container && counters) {
  window.addEventListener("scroll", () => {
    if (
      pageYOffset > container.offsetTop - container.offsetHeight - 200 && activated === false
    ) {
      counters.forEach(counter => {
        counter.innerText = 0;
        let count = 0;
        function updateCount() {
          const target = parseInt(counter.dataset.count);
          if (count < target) {
            count++
            counter.innerText = `${count} +`;
            setTimeout(updateCount, 1);
          } else {
            counter.innerText = target;
          }
        }
        updateCount();
        activated = true;
      });
    } else if (
      pageYOffset < container.offsetTop - container.offsetHeight - 500 || pageYOffset === 0 && activated === true
    ) {
      counters.forEach(counter => {
        counter.innerText = 0;
      });
      activated = false;
    }
  });
}

// ? ================= COOKIE =========================
document.cookie = 'myCookie=myValue; SameSite=Strict; Secure; Path=/; Max-Age=3600';

// ? ================= TO-TOP =========================
const toTop = document.querySelector('.to-top');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add('active');
  } else {
    toTop.classList.remove('active');
  }
})

// ? ================= GALLERY ========================

const tabsBtn = document.querySelectorAll('.tabs__btn-item');
const tabsItem = document.querySelectorAll('.tabs__content-item');

for (let i = 0; i < tabsBtn.length; i++) {
  tabsBtn[0].click();
  tabsBtn[i].addEventListener('click', () => {
    tabsBtn.forEach((item) => { item.classList.remove('active') });
    tabsItem.forEach((item) => { item.classList.remove('active') });
    tabsBtn[i].classList.add('active');
    tabsItem[i].classList.add('active');
  });
}

// ? ================= LANG ===========================
const dropdowns = document.querySelectorAll('.header__lang');

dropdowns.forEach(header__lang => {
  const select = header__lang.querySelector('.select');
  const caret = header__lang.querySelector('.caret');
  const menu = header__lang.querySelector('.header__lang-menu');
  const options = header__lang.querySelector('.header__lang-item');


  select.addEventListener('click', () => {
    select.classList.toggle('select-clicked');
    caret.classList.toggle('caret-rotate');
    menu.classList.toggle('menu-open');
  });

  options.forEach(option => {
    option.addEventListener('click', () => {
      select.innerText = option.innerText;
      select.classList.remove('select-clicked');
      caret.classList.remove('caret-rotate');
      menu.classList.remove('menu-open');
      options.forEach(option => {
        option.classList.remove('active');
      });
      option.classList.add('active');
    })
  })

});























// $(document).ready(function () {
//   const nav = $('.fixed-header');
//   const header = $('.main-header');
//   const navOffset = nav.offset().top;
//   const navHeight = header.height();

//   $(window).scroll(function () {
//     const scrolled = $(this).scrollTop();

//     if (scrolled > navOffset) {
//       $('.header').addClass('nav-fixed');
//       $('.header').css({ marginBotom: navHeight })
//     } else if (scrolled < navOffset) {
//       $('.header').removeClass('nav-fixed');
//       $('.header').css({ marginBotom: 0 })
//     }

//   })
// });




// window.addEventListener('scroll', function () {
//   const fixedHeader = document.querySelector('.fixed-header');
//   if (window.scrollY === 0) {
//     fixedHeader.style.display = 'none';
//   } else {
//     fixedHeader.style.display = 'block';
//   }
// });

// function burgerMenu(selector) {
//   let menu = $(selector);
//   let button = menu.find('.burger-menu__button');
//   let links = menu.find('.burger-menu__link');
//   let overlay = menu.find('.burger-menu__overlay');

//   button.on('click', (e) => {
//     e.preventDefault();
//     toggleMenu();
//   });

//   links.on('click', () => toggleMenu());
//   overlay.on('click', () => toggleMenu());

//   function toggleMenu() {
//     menu.toggleClass('burger-menu_active');
//     if (menu.hasClass('burger-menu_active')) {
//       $('body').css('overflow', 'hidden');
//     } else {
//       $('body').css('overflow', 'visible');
//     }
//   }
// }
// burgerMenu('.burger-menu');

// const mainMenu = document.querySelector('.mainMenu');
// const closeMenu = dosument.querySelector('.closeMenu');
// const openMenu = dosument.querySelector('.openMenu');

// openMenu.addEventListener('click', show);
// closeMenu.addEventListener('click', close);

// function show(){
//   main.menu.style.display = 'flex';
//   mainMenu.style.top = '0';
// }

// function close(){
//   mainMenu.style.top = '-100%';
// }


// const menuBtn = document.querySelector('.menu__btn');
// const menu = document.querySelector('.menu__list');

// menuBtn.addEventListener('click', () => {
//   menu.classList.toggle('menu__list--active')
// })


