'use strict';

const headerBurger = document.getElementById('header_nav_trigger'),
	  classHeaderTop = document.querySelector('.header__top'),
	  buttonActiveChild = document.getElementById('menu__active_child'),
	  buttonActiveChildLink = document.querySelector('#menu__active_child a'),
	  classHeaderMenuChild = document.querySelector('.header_menu__child');

const headerBurgetActive = () => {
	headerBurger.addEventListener('click', () => {
		classHeaderTop.classList.toggle('header_menu_active');

		if(classHeaderTop.classList.contains('header_menu_active_child')) {
			classHeaderTop.classList.remove('header_menu_active_child');
			classHeaderTop.classList.add('header_menu_active');
		}
	});

	buttonActiveChild.addEventListener('click', () => {
		classHeaderTop.classList.add('header_menu_active_child');	
	});
}

const headerMenuActiveMenu = () => {
	buttonActiveChildLink.addEventListener('click', (event) => {
		event.preventDefault();

		classHeaderMenuChild.classList.toggle('active_desktop');
	});
}

const headerMenuActiveNotTarget = () => {
	window.addEventListener('click', (event) => {
		const tg = event.target,
			  isButtonLink = (tg.parentNode.getAttribute("id") == "menu__active_child"),
			  isMenuWrap = tg == classHeaderMenuChild || classHeaderMenuChild.contains(tg);

		if(!isButtonLink && !isMenuWrap) {
			classHeaderMenuChild.classList.remove('active_desktop');
		}
	});
}

let windowWidthStatus = true,
	windowWidth = false;
 

window.addEventListener('resize', () => {

	windowWidth = (window.outerWidth >= 1200) ? windowWidthStatus = false : windowWidthStatus = true;

	
	if(!windowWidth) {
		classHeaderTop.classList.remove('header_menu_active_child');
		classHeaderTop.classList.remove('header_menu_active');

		headerMenuActiveMenu();

		headerMenuActiveNotTarget();
	} else {
		classHeaderMenuChild.classList.remove('active_desktop');
		headerBurgetActive();
		// headerBurgetActive();
	}
});
if(window.outerWidth < 1200) {
	headerBurgetActive();
} else {
	headerMenuActiveMenu();

	headerMenuActiveNotTarget();
}

// header menu fixed

const headerScrollPos = () => {
	let header = document.querySelector('.header');
	if(window.pageYOffset >= 500) {
		if(header.className != 'header_fixed') {
			header.classList.add('header_fixed');
		}
	} else {
		header.classList.remove('header_fixed');
	}
}

document.addEventListener('scroll', (event) => {
	headerScrollPos();
});

headerScrollPos();


// Slider

let SliderMain = null,
	mediaQuerySize = 1200;

const sliderMainInit = () => {
	if(!SliderMain) {
		SliderMain = new Swiper('#slider', {
			slidesPerView: 1,
			spaceBetween: 10,

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
	if(SliderMain) {
		SliderMain.destroy();
		SliderMain = null;
	}
}

window.addEventListener('load', () => {
	let windowWidthSlide = window.outerWidth;
	if(windowWidthSlide <= mediaQuerySize) {
		sliderMainInit();
	} else {
		sliderMainDestroy();
	}
});

window.addEventListener('resize', () => {
	let windowWidthSlide = window.outerWidth;
	if(windowWidthSlide <= mediaQuerySize) {
		console.log(2);
		sliderMainInit();
	} else {
		sliderMainDestroy();
	}
});


// reviews

const reviews = new Swiper('#reviews', {
	slidesPerView: 1,
	spaceBetween: 20,

	navigation: {
		prevEl: '.swiper-nav-prev',
		nextEl: '.swiper-nav-next',
	},

	breakpoints: {
		1200: {
			slidesPerView: 3,
			spaceBetween: 33,
		}
	}
});

const wrapper = reviews.wrapperEl;

[].forEach.call(reviews.slides, function(slide) {
  slide.style.height = "";
});

setTimeout(() => {
    [].forEach.call(reviews.slides, function(slide) {
      slide.style.height = wrapper.clientHeight + "px";
    });
}, 300);


// form events



const form_subs = document.getElementById('form_subscribe');
const emailReg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
form_subs.addEventListener('submit', (event) => {
	event.preventDefault();

	let fieldEmail = document.querySelectorAll('.field_email');

	fieldEmail.forEach(e => {
		if(emailReg.test(e.value) == false) {
			if(!e.parentNode.querySelector('.field_error')) {
				e.insertAdjacentHTML('afterEnd', '<span class="field_error">Ошибка! Неверный формат</span>');
				setTimeout(() => {
					e.parentNode.querySelector('.field_error').remove();
				},2000);
			}
			
			
			return false;
		} else {
			event.target.classList.add('form_send_success');
		}
	});

});


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
		
		
		if(e.target.getAttribute('id') != 'field_email') {
			if(e.target.value.length != 0) {
				if(field_box.querySelector('.field_error_icon')) {
					field_box.querySelector('.field_error_icon').remove();
				}
				if(!field_box.querySelector('.field_success_icon')) {
					e.target.classList.remove('error');
					e.target.insertAdjacentHTML('afterEnd', successElement);
				}
				
			} else {

				if(field_box.querySelector('.field_success_icon')) {
					field_box.querySelector('.field_success_icon').remove();
				}

				if(!field_box.querySelector('.field_error_icon')) {
					e.target.classList.add('error');
					e.target.insertAdjacentHTML('afterEnd', errorElement);
				}
			}
		} else {
			if(emailReg.test(e.target.value) == false) {

				if(field_box.querySelector('.field_success_icon')) {
					field_box.querySelector('.field_success_icon').remove();
				}

				if(!field_box.querySelector('.field_error_icon')) {
					e.target.classList.add('error');
					e.target.insertAdjacentHTML('afterEnd', errorElement);
				}
			} else {
				if(field_box.querySelector('.field_error_icon')) {
					field_box.querySelector('.field_error_icon').remove();
				}
				if(!field_box.querySelector('.field_success_icon')) {
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

	if(fieldLength == 0) {
		if(!field_box.querySelector('.field_error_icon')) {
			field.classList.add('error');
			field.insertAdjacentHTML('afterEnd', errorElement);
		}
	}
}

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

	if(event.target.querySelector('.error')) {
		return false;
	} else {
		document.querySelector('#popup_feedback_success').classList.add('popup_active');
	}
});

const form_subscribe_footer = document.querySelector('#form_subscribe_footer');

form_subscribe_footer.addEventListener('submit', (event) => {
	event.preventDefault();

	let field = event.target.querySelector('#sub_email');

	if(emailReg.test(field.value) == false) {

		if(!field.parentNode.querySelector('.field_error')) {
			field.insertAdjacentHTML('afterEnd', '<span class="field_error">Ошибка! Неверный формат</span>');
			setTimeout(() => {
				field.parentNode.querySelector('.field_error').remove();
			},2000);
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

if(popup.length) {
	popup.forEach(e => {
		const popup_close = e.querySelector('.popup_overlay__close');

		popup_close.addEventListener('click', () => {
			e.classList.remove('popup_active');

			if(feedback_form.length) {
				let field = feedback_form.querySelectorAll('.field');
				let field_success = feedback_form.querySelectorAll('.field_success_icon');
				field.forEach(e => e.value = "");
				field_success.forEach(e=>e.remove());
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



