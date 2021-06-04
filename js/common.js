'use strict';

// const 1200 = 1200;

const headerBurger = document.getElementById('header_nav_trigger'),
    classHeaderTop = document.querySelector('.header__top'),
    buttonActiveChild = document.getElementById('menu__active_child'),
    buttonActiveChildLink = document.querySelector('#menu__active_child a');

const catalog_header = document.querySelector('.catalog__header');
const sect_header = document.querySelector('.sect_nav');

const page_research = document.querySelector('.page_research');
const page_blog = document.querySelector('.page_blog');

const headerBurgetActive = () => {


    headerBurger.addEventListener('click', () => {

        // document.querySelector('body').classList.toggle('overflow-none');
        if (catalog_header) catalog_header.setAttribute('style', 'z-index: 1;');
        if (sect_header) sect_header.setAttribute('style', 'z-index: 1;');


        classHeaderTop.classList.toggle('header_menu_active');
        if (classHeaderTop.classList.contains('header_menu_active_child')) {
            classHeaderTop.classList.remove('header_menu_active_child');
            classHeaderTop.classList.add('header_menu_active');
        }
    });

    buttonActiveChild.addEventListener('click', () => {
        classHeaderTop.classList.add('header_menu_active_child');
    });
}

const headerMenuActiveMenu = () => {
    let classHeaderMenuChild = document.querySelector('.header_menu__child');
    buttonActiveChildLink.addEventListener('click', (event) => {
        event.preventDefault();

        classHeaderMenuChild.classList.toggle('active_desktop');

    });
}

const headerMenuActiveNotTarget = () => {
    let classHeaderMenuChild = document.querySelector('.header_menu__child');

    window.addEventListener('click', (event) => {
        const tg = event.target,
            isButtonLink = (tg.parentNode.getAttribute("id") == "menu__active_child"),
            isMenuWrap = tg == classHeaderMenuChild || classHeaderMenuChild.contains(tg);

        if (!isButtonLink && !isMenuWrap) {
            classHeaderMenuChild.classList.remove('active_desktop');
        }
    });
}

headerMenuActiveMenu();

headerMenuActiveNotTarget();

headerBurgetActive();

let widthStatus = false;

window.addEventListener('resize', () => {

    let classHeaderMenuChild = document.querySelector('.header_menu__child');

    (window.outerWidth >= 1200) ? widthStatus = false: widthStatus = true;

    if (!widthStatus) {
        classHeaderTop.classList.remove('header_menu_active_child');
        classHeaderTop.classList.remove('header_menu_active');

    } else {
        classHeaderTop.classList.remove('header_menu_active_child');
        classHeaderMenuChild.classList.remove('active_desktop');
    }
});


// header menu fixed

const headerScrollPos = () => {
    let header = document.querySelector('.header'),
        header_product = document.querySelector('.product_header_fixed'),
        headerHeight = header.clientHeight;
    // headerMenuActive = document.querySelector('.header_menu_active');

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


}


const filterScrollPos = () => {
    let header = document.querySelector('.header'),
        headerHeight = header.clientHeight,
        filterHeight = (catalog_header) ? catalog_header.clientHeight : 0,
        sect_nav = (sect_header) ? sect_header.clientHeight : 0,
        sumHeight = headerHeight + filterHeight,
        sumHeightSectNav = headerHeight + sect_nav,
        header_wrap = document.querySelector('.header'),
		catalog_wrap = document.querySelector('.catalog');
    // scrollStatus = false,
    // styles = 'top:0px; z-index:'+15;

    if (catalog_header) {
        if (window.pageYOffset >= sumHeight) {
            if (catalog_header.className != 'scroll-active') {

				catalog_wrap.classList.add('scroll-buffer');
                catalog_header.classList.add('scroll-active');
                // catalog_header.setAttribute('style', 'top:'+classHeaderTop.clientHeight+'px; z-index:'+14);

                if (window.outerWidth < 768) {
                    catalog_header.setAttribute('style', 'top:0; z-index:' + 14);
                } else {
                    catalog_header.setAttribute('style', 'top:0; z-index:' + 14);
                }
				if(!header.classList.contains('header_static')) header_wrap.setAttribute('style', 'opacity: 0');
                
                // catalog_header.setAttribute('style', 'top:0; z-index:'+14);
            }
        } else {
			catalog_wrap.classList.remove('scroll-buffer');
            catalog_header.classList.remove('scroll-active');
            if(!header.classList.contains('header_static')) header_wrap.removeAttribute('style');
            catalog_header.removeAttribute('style');
        }
    }

    if (sect_header) {
        if (window.pageYOffset >= sumHeightSectNav) {
            if (sect_header.className != 'scroll-active') {
                sect_header.classList.add('scroll-active');
                // window.addEventListener('resize', function(){
                // 	classHeaderTop.setAttribute('style', 'opacity: 0');
                // 	sect_header.setAttribute('style', 'top:0; z-index:'+14);
                // });
                header_wrap.setAttribute('style', 'opacity: 0');



                sect_header.setAttribute('style', 'top:0; z-index:' + 14);
                // if(scrollStatus == true) sect_header.setAttribute('style', styles);
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
        let index = 'z-index: 1;';
        if (catalog_header) catalog_header.setAttribute('style', index);
        if (sect_header) sect_header.setAttribute('style', index);
    }

}

window.addEventListener('scroll', function() {
    headerScrollPos();
});
window.addEventListener('resize', function() {
    headerScrollPos();
});
headerScrollPos();

if (catalog_header) {
    window.addEventListener('scroll', function() {
        filterScrollPos();
    });

    filterScrollPos();
}

if (sect_header) {
    window.addEventListener('scroll', function() {
        filterScrollPos();
    });

    filterScrollPos();
}


// Slider

const slider_dom = document.querySelector('#slider');

if (slider_dom) {
    let SliderMain = null,
        mediaQuerySize = 1200;

    const sliderMainInit = () => {
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
                        spaceBetween: 127,
                    }
                }
            });
        }
    };

    const sliderMainDestroy = () => {
        if (SliderMain) {
            SliderMain.destroy();
            SliderMain = null;
        }
    }

    window.addEventListener('load', () => {
        let windowWidthSlide = window.outerWidth;
        if (windowWidthSlide <= mediaQuerySize) {
            sliderMainInit();
        } else {
            sliderMainDestroy();
        }
    });

    window.addEventListener('resize', () => {
        let windowWidthSlide = window.outerWidth;
        if (windowWidthSlide <= mediaQuerySize) {
            // console.log(2);
            sliderMainInit();
        } else {
            sliderMainDestroy();
        }
    });
}




// reviews

const reviews = new Swiper('#reviews', {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 8000
    },

    navigation: {
        prevEl: '#reviews .swiper-nav-prev',
        nextEl: '#reviews .swiper-nav-next',
    },

    breakpoints: {
        1200: {
            slidesPerView: 3,
            spaceBetween: 33,
        }
    }
});

const wrapper = reviews.wrapperEl;
if (wrapper) {
    [].forEach.call(reviews.slides, function(slide) {
        slide.style.height = "";
    });

    setTimeout(() => {
        [].forEach.call(reviews.slides, function(slide) {
            slide.style.height = wrapper.clientHeight + "px";
        });
    }, 300);

    document.addEventListener('resize', () => {
        [].forEach.call(reviews.slides, function(slide) {
            slide.style.height = "";
        });

        setTimeout(() => {
            [].forEach.call(reviews.slides, function(slide) {
                slide.style.height = wrapper.clientHeight + "px";
            });
        }, 300);
    });
}


// facts

const facts = new Swiper('#facts', {
    slidesPerView: 1,
    spaceBetween: 20,

    navigation: {
        prevEl: '#facts .swiper-nav-prev',
        nextEl: '#facts .swiper-nav-next',
    }
});

// form events



const form_subs = document.getElementById('form_subscribe');
const emailReg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
if (form_subs) {
    form_subs.addEventListener('submit', (event) => {
        event.preventDefault();

        let fieldEmail = document.querySelectorAll('.field_email');

        fieldEmail.forEach(e => {
            if (emailReg.test(e.value) == false) {
                if (!e.parentNode.querySelector('.field_error')) {
                    e.insertAdjacentHTML('afterEnd', '<span class="field_error">Ошибка! Неверный формат</span>');
                    setTimeout(() => {
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



const form_success_button = document.querySelector('.form_success button');

form_success_button.addEventListener('click', () => {
    const form_reset = form_subs.querySelector('.field');
    form_reset.value = "";
    form_subs.classList.remove('form_send_success');
});

const feedback_form = document.getElementById('feedback_form');

const validateField = (field) => {
    let errorElement = '<span class="field_error_icon"></span>',
        successElement = '<span class="field_success_icon"></span>';


    // event.insertAdjacentHTML('afterEnd', '<span class="field_error_icon"></span>');
    field.addEventListener('keyup', (e) => {

        let field_box = e.target.parentNode;


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

const validateFieldLength = (field) => {
    let errorElement = '<span class="field_error_icon"></span>',
        fieldLength = field.value.length,
        field_box = field.parentNode;

    if (fieldLength == 0) {
        if (!field_box.querySelector('.field_error_icon')) {
            field.classList.add('error');
            field.insertAdjacentHTML('afterEnd', errorElement);
        }
    }
}

if (feedback_form) {
    let field_name = feedback_form.querySelector('#field_name'),
        field_email = feedback_form.querySelector('#field_email'),
        field_message = feedback_form.querySelector('#field_message');

    validateField(field_name);
    validateField(field_email);
    validateField(field_message);

    feedback_form.addEventListener('submit', (event) => {
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


const form_subscribe_footer = document.querySelector('#form_subscribe_footer');

form_subscribe_footer.addEventListener('submit', (event) => {
    event.preventDefault();

    let field = event.target.querySelector('#sub_email');

    if (emailReg.test(field.value) == false) {

        if (!field.parentNode.querySelector('.field_error')) {
            field.insertAdjacentHTML('afterEnd', '<span class="field_error">Ошибка! Неверный формат</span>');
            setTimeout(() => {
                field.parentNode.querySelector('.field_error').remove();
            }, 2000);
        }

        return false;
    } else {
        event.target.classList.add('form_send');
    }
});

const form_subscribe_success_button = form_subscribe_footer.querySelector('.form_success button');
form_subscribe_success_button.addEventListener('click', () => {
    let form_reset = form_subscribe_footer.querySelector('#sub_email');
    form_reset.value = "";
    form_subscribe_footer.classList.remove('form_send');
});

// popup events

const popup = document.querySelectorAll('.popup_overlay');

if (popup) {
    popup.forEach(e => {
        const popup_close = e.querySelector('.popup_overlay__close');

        popup_close.addEventListener('click', () => {
            e.classList.remove('popup_active');

            if (feedback_form) {
                let field = feedback_form.querySelectorAll('.field');
                let field_success = feedback_form.querySelectorAll('.field_success_icon');
                field.forEach(e => e.value = "");
                field_success.forEach(e => e.remove());
            }

        });
    });
}

// cookie events

const cookie_wrap = document.querySelector('.cookie_info'),
    button_cookie_info = document.querySelector('#button_cookie_info'),
    button_cookie_ok = document.querySelector('#button_cookie_ok');

button_cookie_info.addEventListener('click', () => cookie_wrap.classList.add('cookie_info__show'));
button_cookie_ok.addEventListener('click', () => cookie_wrap.remove());



// slider product

const swiper_product = new Swiper('#swiper_product', {
    slidesPerView: 2,
    spaceBetween: 64,
    loop: true,

    navigation: {
        prevEl: '#swiper_product .swiper-nav-prev',
        nextEl: '#swiper_product .swiper-nav-next',
    },

    breakpoints: {
        768: {
            slidesPerView: 3,
            spaceBetween: 96,
        },
        1200: {
            slidesPerView: 6,
            spaceBetween: 48,
        }
    }
});

// slider goods about

const goods_slider = new Swiper('#goods_slider', {
    slidesPerView: 1,
    spaceBetween: 20,

    on: {
        init: (e) => {
            if (e.slides.length == 1) {
                setTimeout(() => {
                    document.querySelector('#goods_slider').parentNode.classList.add('slide_one');
                }, 300);
                // e.destroy();
            }
        }
    },

    navigation: {
        prevEl: '#goods_slider .swiper-nav-prev',
        nextEl: '#goods_slider .swiper-nav-next',
    }
});


// slider researches about

const researches_slider = new Swiper('#slider_researches', {
    slidesPerView: 1,
    spaceBetween: 20,

    navigation: {
        prevEl: '#slider_researches .swiper-nav-prev',
        nextEl: '#slider_researches .swiper-nav-next',
    }
});

// slider goods_reviews

const goods_reviews = new Swiper('#goods_reviews', {
    slidesPerView: 1,
    spaceBetween: 32,

    navigation: {
        prevEl: '#goods_reviews .swiper-nav-prev',
        nextEl: '#goods_reviews .swiper-nav-next',
    },
    breakpoints: {
        1200: {
            slidesPerView: 2
        }
    }
});

const goods_reviews_wrapper = goods_reviews.wrapperEl;

[].forEach.call(goods_reviews.slides, function(slide) {
    slide.style.height = "";
});

setTimeout(() => {
    [].forEach.call(goods_reviews.slides, function(slide) {
        slide.style.height = goods_reviews_wrapper.clientHeight + "px";
    });
}, 300);

const other_product = document.querySelector('#other_product');

if (other_product) {
    let SliderOtherProduct = null,
        mediaQuerySize = 767;

    const sliderOtherProductInit = () => {
        if (!SliderOtherProduct) {
            SliderOtherProduct = new Swiper('#other_product', {
                slidesPerView: 1,
                spaceBetween: 10,

                navigation: {
                    prevEl: '#other_product .swiper-nav-prev',
                    nextEl: '#other_product .swiper-nav-next',
                },

                // breakpoints: {
                // 	1200: {
                // 		slidesPerView: 3,
                // 		spaceBetween: 127,
                // 	}
                // }
            });
        }
    };

    const sliderOtherProductDestroy = () => {
        if (SliderOtherProduct) {
            SliderOtherProduct.destroy();
            SliderOtherProduct = null;
        }
    }

    window.addEventListener('load', () => {
        let windowWidthSlide = window.outerWidth;
        if (windowWidthSlide <= mediaQuerySize) {
            sliderOtherProductInit();
        } else {
            sliderOtherProductDestroy();
        }
    });

    window.addEventListener('resize', () => {
        let windowWidthSlide = window.outerWidth;
        if (windowWidthSlide <= mediaQuerySize) {
            // console.log(2);
            sliderOtherProductInit();
        } else {
            sliderOtherProductDestroy();
        }
    });
}



// catalog events

const button_catalog_close_nav = document.querySelectorAll('.catalog_close'),
    catalog_nav = document.querySelectorAll('.catalog__left'),
    catalog_nav_mod_1 = document.querySelector('#catalog_mod_1'),
    catalog_nav_mod_2 = document.querySelector('#catalog_mod_2'),
    button_on_catalog_mod_1 = document.querySelector('#button_on_catalog_mod_1'),
    button_on_catalog_mod_2 = document.querySelector('#button_on_catalog_mod_2');

const catalog_menu_active = () => {
    if (button_on_catalog_mod_1 && button_on_catalog_mod_2) {
        button_on_catalog_mod_1.addEventListener('click', () => catalog_nav_mod_1.classList.add('active'));
        button_on_catalog_mod_2.addEventListener('click', () => catalog_nav_mod_2.classList.add('active'));
    }

    if (button_catalog_close_nav) {
        button_catalog_close_nav.forEach(e => {
            e.addEventListener('click', () => {
                catalog_nav.forEach(e => e.classList.remove('active'));
            });
        });

    }
}

if (window.outerWidth < 1200) {
    catalog_menu_active();
}

window.addEventListener('resize', () => {
    if (window.outerWidth < 1200) {
        catalog_menu_active();
    }
});

// accordion
let stickyEl = null;
const position_sticky_block = document.querySelectorAll('.position-sticky');

if (position_sticky_block.length) {
    position_sticky_block.forEach(e => {
        stickyEl = new Sticksy('.position-sticky', {
            topSpacing: 60,
            listen: true,
        });
        stickyEl.onStateChanged = function(state) {
                if (state === 'fixed') stickyEl.nodeRef.classList.add('widget--sticky')
                else stickyEl.nodeRef.classList.remove('widget--sticky')
            }
            // var sticky = new Sticky(e);

        console.log(e);
    });
}
// var sticky = new Sticky('.position-sticky');
// Stickyfill.forceSticky(position_sticky_block);



const accordion_item = document.querySelectorAll('.accordion__item');
if (accordion_item) {
    accordion_item.forEach(e => {
        let button = e.querySelector('.title');
        button.addEventListener('click', (event) => {
            e.classList.toggle('active');
            // console.log(position_sticky_block.length);
            if (position_sticky_block.length) {
                stickyEl.hardRefresh();
            }

        });
    });
}

// slider_article

const slider_article = document.querySelector('#slider_article');

if (slider_article) {
    let SliderOtherProduct = null,
        mediaQuerySize = 1200;

    const sliderArticleInit = () => {
        if (!SliderOtherProduct) {
            SliderOtherProduct = new Swiper('#slider_article', {
                slidesPerView: 1,
                spaceBetween: 10,

                navigation: {
                    prevEl: '#slider_article .swiper-nav-prev',
                    nextEl: '#slider_article .swiper-nav-next',
                },
            });
        }
    };

    const sliderArticleDestroy = () => {
        if (SliderOtherProduct) {
            SliderOtherProduct.destroy();
            SliderOtherProduct = null;
        }
    }

    window.addEventListener('load', () => {
        let windowWidthSlide = window.outerWidth;
        if (windowWidthSlide <= mediaQuerySize) {
            sliderArticleInit();
        } else {
            sliderArticleDestroy();
        }
    });

    window.addEventListener('resize', () => {
        let windowWidthSlide = window.outerWidth;
        if (windowWidthSlide <= mediaQuerySize) {
            // console.log(2);
            sliderArticleInit();
        } else {
            sliderArticleDestroy();
        }
    });
}


// parallax

const images = document.querySelectorAll('.parallax_overlay img');
new simpleParallax(images, {
    scale: 2.5,
    orientation: 'down',
    // overflow: true,
    delay: .6,
    // transition: 'cubic-bezier(0,0,0,1)'
});


// popup

const popup_partner = document.querySelector('#popup_partners'),
    button_popup_partner = document.querySelectorAll('.popup_bay_partner');

button_popup_partner.forEach(e => {
    e.addEventListener('click', (event) => {
        event.preventDefault();
        popup_partner.classList.add('popup_active');
    });

});

const button_popup_review = document.querySelector('#button_add_reviews');



const popup_review_form = document.querySelector('.popup_review');
if (button_popup_review) {
    button_popup_review.addEventListener('click', () => {
        popup_review_form.classList.add('popup_active');
    });
}


if (popup_review_form) {
    let field_name = popup_review_form.querySelector('#field_r_name'),
        field_email = popup_review_form.querySelector('#field_r_email'),
        field_message = popup_review_form.querySelector('#field_r_message');

    validateField(field_name);
    validateField(field_email);
    validateField(field_message);

    popup_review_form.addEventListener('submit', (event) => {
        event.preventDefault();

        validateFieldLength(field_name);
        validateFieldLength(field_email);
        validateFieldLength(field_message);

        if (event.target.querySelector('.error')) {
            return false;
        } else {
            popup_review_form.classList.remove('popup_active');
            document.querySelector('#popup_review_success').classList.add('popup_active');
        }
    });
}



// articles slider

const aside_article_items = document.querySelector('#aside_article_items');

if (aside_article_items) {
    let SliderAsideArticles = null,
        mediaQuerySize = 1200;

    const sliderAsideArticlesInit = () => {
        if (!SliderAsideArticles) {
            SliderAsideArticles = new Swiper('#aside_article_items', {
                slidesPerView: 1,
                spaceBetween: 10,

                navigation: {
                    prevEl: '#aside_article_items .swiper-nav-prev',
                    nextEl: '#aside_article_items .swiper-nav-next',
                },


                // breakpoints: {
                // 	1200: {
                // 		slidesPerView: 3,
                // 		spaceBetween: 127,
                // 	}
                // }
            });
        }
    };

    const sliderAsideArticlesDestroy = () => {
        if (SliderAsideArticles) {
            SliderAsideArticles.destroy();
            SliderAsideArticles = null;
        }
    }

    window.addEventListener('load', () => {
        let windowWidthSlide = window.outerWidth;
        if (windowWidthSlide <= mediaQuerySize) {
            sliderAsideArticlesInit();
        } else {
            sliderAsideArticlesDestroy();
        }
    });

    window.addEventListener('resize', () => {
        let windowWidthSlide = window.outerWidth;
        if (windowWidthSlide <= mediaQuerySize) {
            // console.log(2);
            sliderAsideArticlesInit();
        } else {
            sliderAsideArticlesDestroy();
        }
    });
}


// articles slider

const aside_product_items = document.querySelector('#aside_product_items');

if (aside_product_items) {
    let SliderAsideProduct = null,
        mediaQuerySize = 768;

    const sliderAsideProductInit = () => {
        if (!SliderAsideProduct) {
            SliderAsideProduct = new Swiper('#aside_product_items', {
                slidesPerView: 1,
                spaceBetween: 10,

                navigation: {
                    prevEl: '#aside_product_items .swiper-nav-prev',
                    nextEl: '#aside_product_items .swiper-nav-next',
                },


                breakpoints: {
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 112,
                    }
                }
            });
        }
    };

    const sliderAsideProductDestroy = () => {
        if (SliderAsideProduct) {
            SliderAsideProduct.destroy();
            SliderAsideProduct = null;
        }
    }

    window.addEventListener('load', () => {
        let windowWidthSlide = window.outerWidth;
        if (windowWidthSlide <= mediaQuerySize) {
            sliderAsideProductInit();
        } else {
            sliderAsideProductDestroy();
        }
    });

    window.addEventListener('resize', () => {
        let windowWidthSlide = window.outerWidth;
        if (windowWidthSlide <= mediaQuerySize) {
            // console.log(2);
            sliderAsideProductInit();
        } else {
            sliderAsideProductDestroy();
        }
    });
}


// research aside

const button_aside_menu_active = document.querySelector('.button_active_aside'),
    aside_menu = document.querySelector('#aside_menu');
if (button_aside_menu_active) {
    button_aside_menu_active.addEventListener('click', () => {
        aside_menu.classList.add('active');
    });
}
document.addEventListener("DOMContentLoaded", function() {

    if (window.outerWidth >= 1200) {
        OverlayScrollbars(document.querySelector('#aside_menu'), {});
    }

    window.addEventListener('resize', () => {
        if (window.outerWidth >= 1200) {
            OverlayScrollbars(document.querySelector('#aside_menu'), {});
        }
    });


});

// media keyboard

function Touchyhandler(e) {
    e.preventDefault();
    // console.log(1);
}

if (window.outerWidth < 900) {
    let field = document.querySelectorAll('.field');

    field.forEach(e => {
        e.addEventListener('focus', () => {
            document.querySelector('html').classList.add('overflow-none')
            document.querySelector('body').addEventListener('touchmove', Touchyhandler, { passive: false });
        });
        e.addEventListener('blur', () => {
            document.querySelector('html').classList.remove('overflow-none')
            document.querySelector('body').removeEventListener('touchmove', Touchyhandler);
        });
    });
}


const sect_nav_item = document.querySelectorAll('.sect_nav ul li a');
if (sect_nav_item) {
    sect_nav_item.forEach(item => {
        item.addEventListener('click', () => {

            let parent = item.parentNode;
            for (let sibling of parent.parentNode.children) {
                sibling.classList.remove('active');
            }
            item.parentNode.classList.add('active');
        });
    });
}

document.querySelectorAll('a[href^="#"').forEach(link => {

    link.addEventListener('click', function(e) {
        e.preventDefault();

        let href = this.getAttribute('href').substring(1);

        if (href) {
            const scrollTarget = document.getElementById(href);

            const topOffsetSectNav = document.querySelector('.sect_nav');
            const topOffsetHeader = document.querySelector('.header__top');
            let topOffset = 0;
            if (topOffsetSectNav) {
                topOffset = topOffsetSectNav.offsetHeight;
            }
            const elementPosition = scrollTarget.getBoundingClientRect().top;
            const offsetPosition = elementPosition - topOffset;

            window.scrollBy({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }


    });
});