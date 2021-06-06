// /**
//  * Swiper 6.5.0
//  * Most modern mobile touch slider and framework with hardware accelerated transitions
//  * https://swiperjs.com
//  *
//  * Copyright 2014-2021 Vladimir Kharlampidi
//  *
//  * Released under the MIT License
//  *
//  * Released on: March 5, 2021
//  */
'use strict'; // const 1200 = 1200;

var headerBurger = document.getElementById('header_nav_trigger'),
    classHeaderTop = document.querySelector('.header__top'),
    buttonActiveChild = document.getElementById('menu__active_child'),
    buttonActiveChildLink = document.querySelector('#menu__active_child a');
var catalog_header = document.querySelector('.catalog__header');
var sect_header = document.querySelector('.sect_nav');
var page_research = document.querySelector('.page_research');
var page_blog = document.querySelector('.page_blog');

var headerBurgetActive = function headerBurgetActive() {
  headerBurger.addEventListener('click', function () {
    // document.querySelector('body').classList.toggle('overflow-none');
    if (catalog_header) catalog_header.setAttribute('style', 'z-index: 1;');
    if (sect_header) sect_header.setAttribute('style', 'z-index: 1;');
    classHeaderTop.classList.toggle('header_menu_active');

    if (classHeaderTop.classList.contains('header_menu_active_child')) {
      classHeaderTop.classList.remove('header_menu_active_child');
      classHeaderTop.classList.add('header_menu_active');
    }
  });
  buttonActiveChild.addEventListener('click', function () {
    classHeaderTop.classList.add('header_menu_active_child');
  });
};

var headerMenuActiveMenu = function headerMenuActiveMenu() {
  var classHeaderMenuChild = document.querySelector('.header_menu__child');
  buttonActiveChildLink.addEventListener('click', function (event) {
    event.preventDefault();
    classHeaderMenuChild.classList.toggle('active_desktop');
  });
};

var headerMenuActiveNotTarget = function headerMenuActiveNotTarget() {
  var classHeaderMenuChild = document.querySelector('.header_menu__child');
  window.addEventListener('click', function (event) {
    var tg = event.target,
        isButtonLink = tg.parentNode.getAttribute("id") == "menu__active_child",
        isMenuWrap = tg == classHeaderMenuChild || classHeaderMenuChild.contains(tg);

    if (!isButtonLink && !isMenuWrap) {
      classHeaderMenuChild.classList.remove('active_desktop');
    }
  });
};

headerMenuActiveMenu();
headerMenuActiveNotTarget();
headerBurgetActive();
var widthStatus = false;
window.addEventListener('resize', function () {
  var classHeaderMenuChild = document.querySelector('.header_menu__child');
  window.outerWidth >= 1200 ? widthStatus = false : widthStatus = true;

  if (!widthStatus) {
    classHeaderTop.classList.remove('header_menu_active_child');
    classHeaderTop.classList.remove('header_menu_active');
  } else {
    classHeaderTop.classList.remove('header_menu_active_child');
    classHeaderMenuChild.classList.remove('active_desktop');
  }
}); // header menu fixed

var headerScrollPos = function headerScrollPos() {
  var header = document.querySelector('.header'),
      header_product = document.querySelector('.product_header_fixed'),
      headerHeight = header.clientHeight; // headerMenuActive = document.querySelector('.header_menu_active');

  if (window.pageYOffset >= headerHeight) {
    if (header_product) {
      if (header_product.className != 'active') {
        header_product.classList.add('active');
      }
    }

    if (header.className != 'header_fixed' && !header.classList.contains('header_static')) {
      header.classList.add('header_fixed');
    }
  } else {
    header.classList.remove('header_fixed');

    if (header_product) {
      header_product.classList.remove('active');
    }
  }
};

var filterScrollPos = function filterScrollPos() {
  var header = document.querySelector('.header'),
      headerHeight = header.clientHeight,
      filterHeight = catalog_header ? catalog_header.clientHeight : 0,
      sect_nav = sect_header ? sect_header.clientHeight : 0,
      sumHeight = headerHeight + filterHeight,
      sumHeightSectNav = headerHeight + sect_nav,
      header_wrap = document.querySelector('.header'),
      catalog_wrap = document.querySelector('.catalog'); // scrollStatus = false,
  // styles = 'top:0px; z-index:'+15;

  if (catalog_header) {
    if (window.pageYOffset >= sumHeight) {
      if (catalog_header.className != 'scroll-active') {
        catalog_wrap.classList.add('scroll-buffer');
        catalog_header.classList.add('scroll-active'); // catalog_header.setAttribute('style', 'top:'+classHeaderTop.clientHeight+'px; z-index:'+14);

        if (window.outerWidth < 768) {
          catalog_header.setAttribute('style', 'top:0; z-index:' + 14);
        } else {
          catalog_header.setAttribute('style', 'top:0; z-index:' + 14);
        }

        if (!header.classList.contains('header_static')) header_wrap.setAttribute('style', 'opacity: 0'); // catalog_header.setAttribute('style', 'top:0; z-index:'+14);
      }
    } else {
      catalog_wrap.classList.remove('scroll-buffer');
      catalog_header.classList.remove('scroll-active');
      if (!header.classList.contains('header_static')) header_wrap.removeAttribute('style');
      catalog_header.removeAttribute('style');
    }
  }

  if (sect_header) {
    if (window.pageYOffset >= sumHeightSectNav) {
      if (sect_header.className != 'scroll-active') {
        sect_header.classList.add('scroll-active'); // window.addEventListener('resize', function(){
        // 	classHeaderTop.setAttribute('style', 'opacity: 0');
        // 	sect_header.setAttribute('style', 'top:0; z-index:'+14);
        // });

        header_wrap.setAttribute('style', 'opacity: 0');
        sect_header.setAttribute('style', 'top:0; z-index:' + 14); // if(scrollStatus == true) sect_header.setAttribute('style', styles);

        if (page_blog) page_blog.classList.add('position_scroll');
        if (page_research) page_research.classList.add('position_scroll');
      }
    } else {
      sect_header.classList.remove('scroll-active');
      header_wrap.removeAttribute('style');
      sect_header.removeAttribute('style');
      if (page_blog) page_blog.classList.remove('position_scroll');
      if (page_research) page_research.classList.remove('position_scroll');
    }
  }

  if (document.querySelector('.header_menu_active')) {
    var index = 'z-index: 1;';
    if (catalog_header) catalog_header.setAttribute('style', index);
    if (sect_header) sect_header.setAttribute('style', index);
  }
};

window.addEventListener('scroll', function () {
  headerScrollPos();
});
window.addEventListener('resize', function () {
  headerScrollPos();
});
headerScrollPos();

if (catalog_header) {
  window.addEventListener('scroll', function () {
    filterScrollPos();
  });
  filterScrollPos();
}

if (sect_header) {
  window.addEventListener('scroll', function () {
    filterScrollPos();
  });
  filterScrollPos();
} // Slider


var slider_dom = document.querySelector('#slider');

if (slider_dom) {
  var SliderMain = null,
      mediaQuerySize = 1200;

  var sliderMainInit = function sliderMainInit() {
    if (!SliderMain) {
      SliderMain = new Swiper('#slider', {
        slidesPerView: 1,
        spaceBetween: 10,
        loop: true,
        autoplay: {
          delay: 5000
        },
        pagination: {
          el: '.swiper-page',
          clickable: true
        },
        breakpoints: {
          1200: {
            slidesPerView: 3,
            spaceBetween: 127
          }
        }
      });
    }
  };

  var sliderMainDestroy = function sliderMainDestroy() {
    if (SliderMain) {
      SliderMain.destroy();
      SliderMain = null;
    }
  };

  window.addEventListener('load', function () {
    var windowWidthSlide = window.outerWidth;

    if (windowWidthSlide <= mediaQuerySize) {
      sliderMainInit();
    } else {
      sliderMainDestroy();
    }
  });
  window.addEventListener('resize', function () {
    var windowWidthSlide = window.outerWidth;

    if (windowWidthSlide <= mediaQuerySize) {
      // console.log(2);
      sliderMainInit();
    } else {
      sliderMainDestroy();
    }
  });
} // reviews


var reviews = new Swiper('#reviews', {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 8000
  },
  navigation: {
    prevEl: '#reviews .swiper-nav-prev',
    nextEl: '#reviews .swiper-nav-next'
  },
  breakpoints: {
    1200: {
      slidesPerView: 3,
      spaceBetween: 33
    }
  }
});
var wrapper = reviews.wrapperEl;

if (wrapper) {
  [].forEach.call(reviews.slides, function (slide) {
    slide.style.height = "";
  });
  setTimeout(function () {
    [].forEach.call(reviews.slides, function (slide) {
      slide.style.height = wrapper.clientHeight + "px";
    });
  }, 300);
  document.addEventListener('resize', function () {
    [].forEach.call(reviews.slides, function (slide) {
      slide.style.height = "";
    });
    setTimeout(function () {
      [].forEach.call(reviews.slides, function (slide) {
        slide.style.height = wrapper.clientHeight + "px";
      });
    }, 300);
  });
} // facts


var facts = new Swiper('#facts', {
  slidesPerView: 1,
  spaceBetween: 20,
  navigation: {
    prevEl: '#facts .swiper-nav-prev',
    nextEl: '#facts .swiper-nav-next'
  }
}); // form events

var form_subs = document.getElementById('form_subscribe');
var emailReg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

if (form_subs) {
  form_subs.addEventListener('submit', function (event) {
    event.preventDefault();
    var fieldEmail = document.querySelectorAll('.field_email');
    fieldEmail.forEach(function (e) {
      if (emailReg.test(e.value) == false) {
        if (!e.parentNode.querySelector('.field_error')) {
          e.insertAdjacentHTML('afterEnd', '<span class="field_error">Ошибка! Неверный формат</span>');
          setTimeout(function () {
            e.parentNode.querySelector('.field_error').remove();
          }, 2000);
        }

        return false;
      } else {
        event.target.classList.add('form_send_success');
      }
    });
  });
}

var form_success_button = document.querySelector('.form_success button');
form_success_button.addEventListener('click', function () {
  var form_reset = form_subs.querySelector('.field');
  form_reset.value = "";
  form_subs.classList.remove('form_send_success');
});
var feedback_form = document.getElementById('feedback_form');

var validateField = function validateField(field) {
  var errorElement = '<span class="field_error_icon"></span>',
      successElement = '<span class="field_success_icon"></span>'; // event.insertAdjacentHTML('afterEnd', '<span class="field_error_icon"></span>');

  field.addEventListener('keyup', function (e) {
    var field_box = e.target.parentNode;

    if (e.target.getAttribute('data-field') != 'email') {
      if (e.target.value.length != 0) {
        if (field_box.querySelector('.field_error_icon')) {
          field_box.querySelector('.field_error_icon').remove();
        }

        if (!field_box.querySelector('.field_success_icon')) {
          e.target.classList.remove('error');
          e.target.insertAdjacentHTML('afterEnd', successElement);
        }
      } else {
        if (field_box.querySelector('.field_success_icon')) {
          field_box.querySelector('.field_success_icon').remove();
        }

        if (!field_box.querySelector('.field_error_icon')) {
          e.target.classList.add('error');
          e.target.insertAdjacentHTML('afterEnd', errorElement);
        }
      }
    } else {
      if (emailReg.test(e.target.value) == false) {
        if (field_box.querySelector('.field_success_icon')) {
          field_box.querySelector('.field_success_icon').remove();
        }

        if (!field_box.querySelector('.field_error_icon')) {
          e.target.classList.add('error');
          e.target.insertAdjacentHTML('afterEnd', errorElement);
        }
      } else {
        if (field_box.querySelector('.field_error_icon')) {
          field_box.querySelector('.field_error_icon').remove();
        }

        if (!field_box.querySelector('.field_success_icon')) {
          e.target.classList.remove('error');
          e.target.insertAdjacentHTML('afterEnd', successElement);
        }
      }
    }
  });
};

var validateFieldLength = function validateFieldLength(field) {
  var errorElement = '<span class="field_error_icon"></span>',
      fieldLength = field.value.length,
      field_box = field.parentNode;

  if (fieldLength == 0) {
    if (!field_box.querySelector('.field_error_icon')) {
      field.classList.add('error');
      field.insertAdjacentHTML('afterEnd', errorElement);
    }
  }
};

if (feedback_form) {
  var field_name = feedback_form.querySelector('#field_name'),
      field_email = feedback_form.querySelector('#field_email'),
      field_message = feedback_form.querySelector('#field_message');
  validateField(field_name);
  validateField(field_email);
  validateField(field_message);
  feedback_form.addEventListener('submit', function (event) {
    event.preventDefault();
    validateFieldLength(field_name);
    validateFieldLength(field_email);
    validateFieldLength(field_message);

    if (event.target.querySelector('.error')) {
      return false;
    } else {
      document.querySelector('#popup_feedback_success').classList.add('popup_active');
    }
  });
}

var form_subscribe_footer = document.querySelector('#form_subscribe_footer');
form_subscribe_footer.addEventListener('submit', function (event) {
  event.preventDefault();
  var field = event.target.querySelector('#sub_email');

  if (emailReg.test(field.value) == false) {
    if (!field.parentNode.querySelector('.field_error')) {
      field.insertAdjacentHTML('afterEnd', '<span class="field_error">Ошибка! Неверный формат</span>');
      setTimeout(function () {
        field.parentNode.querySelector('.field_error').remove();
      }, 2000);
    }

    return false;
  } else {
    event.target.classList.add('form_send');
  }
});
var form_subscribe_success_button = form_subscribe_footer.querySelector('.form_success button');
form_subscribe_success_button.addEventListener('click', function () {
  var form_reset = form_subscribe_footer.querySelector('#sub_email');
  form_reset.value = "";
  form_subscribe_footer.classList.remove('form_send');
}); // popup events

var popup = document.querySelectorAll('.popup_overlay');

if (popup) {
  popup.forEach(function (e) {
    var popup_close = e.querySelector('.popup_overlay__close');
    popup_close.addEventListener('click', function () {
      e.classList.remove('popup_active');

      if (feedback_form) {
        var field = feedback_form.querySelectorAll('.field');
        var field_success = feedback_form.querySelectorAll('.field_success_icon');
        field.forEach(function (e) {
          return e.value = "";
        });
        field_success.forEach(function (e) {
          return e.remove();
        });
      }
    });
  });
} // cookie events


var cookie_wrap = document.querySelector('.cookie_info'),
    button_cookie_info = document.querySelector('#button_cookie_info'),
    button_cookie_ok = document.querySelector('#button_cookie_ok');
button_cookie_info.addEventListener('click', function () {
  return cookie_wrap.classList.add('cookie_info__show');
});
button_cookie_ok.addEventListener('click', function () {
  return cookie_wrap.remove();
}); // slider product

var swiper_product = new Swiper('#swiper_product', {
  slidesPerView: 2,
  spaceBetween: 64,
  loop: true,
  navigation: {
    prevEl: '#swiper_product .swiper-nav-prev',
    nextEl: '#swiper_product .swiper-nav-next'
  },
  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 96
    },
    1200: {
      slidesPerView: 6,
      spaceBetween: 48
    }
  }
}); // slider goods about

var goods_slider = new Swiper('#goods_slider', {
  slidesPerView: 'auto',
  spaceBetween: 20,
  // preloadImages: false,
  on: {
    init: function init(e) {
      if (e.slides.length == 1) {
        setTimeout(function () {
          document.querySelector('#goods_slider').parentNode.classList.add('slide_one');
        }, 300); // e.destroy();
      }
    }
  },
  navigation: {
    prevEl: '#goods_slider .swiper-nav-prev',
    nextEl: '#goods_slider .swiper-nav-next'
  }
}); // slider researches about

var researches_slider = new Swiper('#slider_researches', {
  slidesPerView: 1,
  spaceBetween: 20,
  navigation: {
    prevEl: '#slider_researches .swiper-nav-prev',
    nextEl: '#slider_researches .swiper-nav-next'
  }
}); // slider goods_reviews

var goods_reviews = new Swiper('#goods_reviews', {
  slidesPerView: 1,
  spaceBetween: 32,
  navigation: {
    prevEl: '#goods_reviews .swiper-nav-prev',
    nextEl: '#goods_reviews .swiper-nav-next'
  },
  breakpoints: {
    1200: {
      slidesPerView: 2
    }
  }
});
var goods_reviews_wrapper = goods_reviews.wrapperEl;
[].forEach.call(goods_reviews.slides, function (slide) {
  slide.style.height = "";
});
setTimeout(function () {
  [].forEach.call(goods_reviews.slides, function (slide) {
    slide.style.height = goods_reviews_wrapper.clientHeight + "px";
  });
}, 300);
var other_product = document.querySelector('#other_product');

if (other_product) {
  var SliderOtherProduct = null,
      _mediaQuerySize = 767;

  var sliderOtherProductInit = function sliderOtherProductInit() {
    if (!SliderOtherProduct) {
      SliderOtherProduct = new Swiper('#other_product', {
        slidesPerView: 1,
        spaceBetween: 10,
        navigation: {
          prevEl: '#other_product .swiper-nav-prev',
          nextEl: '#other_product .swiper-nav-next'
        } // breakpoints: {
        // 	1200: {
        // 		slidesPerView: 3,
        // 		spaceBetween: 127,
        // 	}
        // }

      });
    }
  };

  var sliderOtherProductDestroy = function sliderOtherProductDestroy() {
    if (SliderOtherProduct) {
      SliderOtherProduct.destroy();
      SliderOtherProduct = null;
    }
  };

  window.addEventListener('load', function () {
    var windowWidthSlide = window.outerWidth;

    if (windowWidthSlide <= _mediaQuerySize) {
      sliderOtherProductInit();
    } else {
      sliderOtherProductDestroy();
    }
  });
  window.addEventListener('resize', function () {
    var windowWidthSlide = window.outerWidth;

    if (windowWidthSlide <= _mediaQuerySize) {
      // console.log(2);
      sliderOtherProductInit();
    } else {
      sliderOtherProductDestroy();
    }
  });
} // catalog events


var button_catalog_close_nav = document.querySelectorAll('.catalog_close'),
    catalog_nav = document.querySelectorAll('.catalog__left'),
    catalog_nav_mod_1 = document.querySelector('#catalog_mod_1'),
    catalog_nav_mod_2 = document.querySelector('#catalog_mod_2'),
    button_on_catalog_mod_1 = document.querySelector('#button_on_catalog_mod_1'),
    button_on_catalog_mod_2 = document.querySelector('#button_on_catalog_mod_2');

var catalog_menu_active = function catalog_menu_active() {
  if (button_on_catalog_mod_1 && button_on_catalog_mod_2) {
    button_on_catalog_mod_1.addEventListener('click', function () {
      return catalog_nav_mod_1.classList.add('active');
    });
    button_on_catalog_mod_2.addEventListener('click', function () {
      return catalog_nav_mod_2.classList.add('active');
    });
  }

  if (button_catalog_close_nav) {
    button_catalog_close_nav.forEach(function (e) {
      e.addEventListener('click', function () {
        catalog_nav.forEach(function (e) {
          return e.classList.remove('active');
        });
      });
    });
  }
};

if (window.outerWidth < 1200) {
  catalog_menu_active();
}

window.addEventListener('resize', function () {
  if (window.outerWidth < 1200) {
    catalog_menu_active();
  }
}); // accordion

var stickyEl = null;
var position_sticky_block = document.querySelectorAll('.position-sticky');

if (position_sticky_block.length) {
  position_sticky_block.forEach(function (e) {
    stickyEl = new Sticksy('.position-sticky', {
      topSpacing: 60,
      listen: true
    });

    stickyEl.onStateChanged = function (state) {
      if (state === 'fixed') stickyEl.nodeRef.classList.add('widget--sticky');else stickyEl.nodeRef.classList.remove('widget--sticky');
    }; // var sticky = new Sticky(e);


    console.log(e);
  });
} // var sticky = new Sticky('.position-sticky');
// Stickyfill.forceSticky(position_sticky_block);


var accordion_item = document.querySelectorAll('.accordion__item');

if (accordion_item) {
  accordion_item.forEach(function (e) {
    var button = e.querySelector('.title');
    button.addEventListener('click', function (event) {
      e.classList.toggle('active'); // console.log(position_sticky_block.length);

      if (position_sticky_block.length) {
        stickyEl.hardRefresh();
      }
    });
  });
} // slider_article


var slider_article = document.querySelector('#slider_article');

if (slider_article) {
  var _SliderOtherProduct = null,
      _mediaQuerySize2 = 1200;

  var sliderArticleInit = function sliderArticleInit() {
    if (!_SliderOtherProduct) {
      _SliderOtherProduct = new Swiper('#slider_article', {
        slidesPerView: 1,
        spaceBetween: 10,
        navigation: {
          prevEl: '#slider_article .swiper-nav-prev',
          nextEl: '#slider_article .swiper-nav-next'
        }
      });
    }
  };

  var sliderArticleDestroy = function sliderArticleDestroy() {
    if (_SliderOtherProduct) {
      _SliderOtherProduct.destroy();

      _SliderOtherProduct = null;
    }
  };

  window.addEventListener('load', function () {
    var windowWidthSlide = window.outerWidth;

    if (windowWidthSlide <= _mediaQuerySize2) {
      sliderArticleInit();
    } else {
      sliderArticleDestroy();
    }
  });
  window.addEventListener('resize', function () {
    var windowWidthSlide = window.outerWidth;

    if (windowWidthSlide <= _mediaQuerySize2) {
      // console.log(2);
      sliderArticleInit();
    } else {
      sliderArticleDestroy();
    }
  });
} // popup


var popup_partner = document.querySelector('#popup_partners'),
    button_popup_partner = document.querySelectorAll('.popup_bay_partner');
button_popup_partner.forEach(function (e) {
  e.addEventListener('click', function (event) {
    event.preventDefault();
    popup_partner.classList.add('popup_active');
  });
});
var button_popup_review = document.querySelector('#button_add_reviews');
var popup_review_form = document.querySelector('.popup_review');

if (button_popup_review) {
  button_popup_review.addEventListener('click', function () {
    popup_review_form.classList.add('popup_active');
  });
}

if (popup_review_form) {
  var _field_name = popup_review_form.querySelector('#field_r_name'),
      _field_email = popup_review_form.querySelector('#field_r_email'),
      _field_message = popup_review_form.querySelector('#field_r_message');

  validateField(_field_name);
  validateField(_field_email);
  validateField(_field_message);
  popup_review_form.addEventListener('submit', function (event) {
    event.preventDefault();
    validateFieldLength(_field_name);
    validateFieldLength(_field_email);
    validateFieldLength(_field_message);

    if (event.target.querySelector('.error')) {
      return false;
    } else {
      popup_review_form.classList.remove('popup_active');
      document.querySelector('#popup_review_success').classList.add('popup_active');
    }
  });
} // articles slider


var aside_article_items = document.querySelector('#aside_article_items');

if (aside_article_items) {
  var SliderAsideArticles = null,
      _mediaQuerySize3 = 1200;

  var sliderAsideArticlesInit = function sliderAsideArticlesInit() {
    if (!SliderAsideArticles) {
      SliderAsideArticles = new Swiper('#aside_article_items', {
        slidesPerView: 1,
        spaceBetween: 10,
        navigation: {
          prevEl: '#aside_article_items .swiper-nav-prev',
          nextEl: '#aside_article_items .swiper-nav-next'
        } // breakpoints: {
        // 	1200: {
        // 		slidesPerView: 3,
        // 		spaceBetween: 127,
        // 	}
        // }

      });
    }
  };

  var sliderAsideArticlesDestroy = function sliderAsideArticlesDestroy() {
    if (SliderAsideArticles) {
      SliderAsideArticles.destroy();
      SliderAsideArticles = null;
    }
  };

  window.addEventListener('load', function () {
    var windowWidthSlide = window.outerWidth;

    if (windowWidthSlide <= _mediaQuerySize3) {
      sliderAsideArticlesInit();
    } else {
      sliderAsideArticlesDestroy();
    }
  });
  window.addEventListener('resize', function () {
    var windowWidthSlide = window.outerWidth;

    if (windowWidthSlide <= _mediaQuerySize3) {
      // console.log(2);
      sliderAsideArticlesInit();
    } else {
      sliderAsideArticlesDestroy();
    }
  });
} // articles slider


var aside_product_items = document.querySelector('#aside_product_items');

if (aside_product_items) {
  var SliderAsideProduct = null,
      _mediaQuerySize4 = 768;

  var sliderAsideProductInit = function sliderAsideProductInit() {
    if (!SliderAsideProduct) {
      SliderAsideProduct = new Swiper('#aside_product_items', {
        slidesPerView: 1,
        spaceBetween: 10,
        navigation: {
          prevEl: '#aside_product_items .swiper-nav-prev',
          nextEl: '#aside_product_items .swiper-nav-next'
        },
        breakpoints: {
          768: {
            slidesPerView: 2,
            spaceBetween: 112
          }
        }
      });
    }
  };

  var sliderAsideProductDestroy = function sliderAsideProductDestroy() {
    if (SliderAsideProduct) {
      SliderAsideProduct.destroy();
      SliderAsideProduct = null;
    }
  };

  window.addEventListener('load', function () {
    var windowWidthSlide = window.outerWidth;

    if (windowWidthSlide <= _mediaQuerySize4) {
      sliderAsideProductInit();
    } else {
      sliderAsideProductDestroy();
    }
  });
  window.addEventListener('resize', function () {
    var windowWidthSlide = window.outerWidth;

    if (windowWidthSlide <= _mediaQuerySize4) {
      // console.log(2);
      sliderAsideProductInit();
    } else {
      sliderAsideProductDestroy();
    }
  });
} // research aside


var button_aside_menu_active = document.querySelector('.button_active_aside'),
    aside_menu = document.querySelector('#aside_menu');

if (button_aside_menu_active) {
  button_aside_menu_active.addEventListener('click', function () {
    aside_menu.classList.add('active');
  });
} // media keyboard


function Touchyhandler(e) {
  e.preventDefault(); // console.log(1);
}

if (window.outerWidth < 900) {
  var field = document.querySelectorAll('.field');
  field.forEach(function (e) {
    e.addEventListener('focus', function () {
      document.querySelector('html').classList.add('overflow-none');
      document.querySelector('body').addEventListener('touchmove', Touchyhandler, {
        passive: false
      });
    });
    e.addEventListener('blur', function () {
      document.querySelector('html').classList.remove('overflow-none');
      document.querySelector('body').removeEventListener('touchmove', Touchyhandler);
    });
  });
}

var sect_nav_item = document.querySelectorAll('.sect_nav ul li a');

if (sect_nav_item) {
  sect_nav_item.forEach(function (item) {
    item.addEventListener('click', function () {
      var parent = item.parentNode;
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = parent.parentNode.children[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var sibling = _step.value;
          sibling.classList.remove('active');
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      item.parentNode.classList.add('active');
    });
  });
}

document.querySelectorAll('a[href^="#"').forEach(function (link) {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    var href = this.getAttribute('href').substring(1);

    if (href) {
      var scrollTarget = document.getElementById(href);
      var topOffsetSectNav = document.querySelector('.sect_nav');
      var topOffsetHeader = document.querySelector('.header__top');
      var topOffset = 0;

      if (topOffsetSectNav) {
        topOffset = topOffsetSectNav.offsetHeight;
      }

      var elementPosition = scrollTarget.getBoundingClientRect().top;
      var offsetPosition = elementPosition - topOffset;
      window.scrollBy({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  });
});