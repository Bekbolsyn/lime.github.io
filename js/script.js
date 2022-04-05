// usefulness
let usefulTitle = document.querySelectorAll('.useful__title');

[].forEach.call(usefulTitle, function(item) {
	item.addEventListener('click', function() {
		let useful = item.parentNode;
		useful.classList.toggle('is-active');
	});
});



/* 
**
** Инициализируем Swiper для блока 'clients'
**
*/
new Swiper('.clients-slider', {
	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

	// Количество слайдов для показа
	breakpoints: {
		375: {
			slidesPerView: 1,
		},
		565: {
			slidesPerView: 2.5,
		},
		600: {
			slidesPerView: 3,
		},
		766: {
			slidesPerView: 2,
		},
		885: {
			slidesPerView: 2.5,
		},
		991: {
			slidesPerView: 2.5,
		},
		1080: {
			slidesPerView: 3,
		},
		1200: {
			slidesPerView: 3.4,
		},
		1400: {
			slidesPerView: 4,
		},
		1550: {
			slidesPerView: 4.5,
		}
	},

	// Отступ между слайдами
	spaceBetween: 15,

	// Бесконечность
	loop: true,
});



/* 
**
** Инициализируем Swiper для блока 'thoughts'
**
*/
new Swiper('.thoughts-slider', {
	// Количество слайдов для показа
	breakpoints: {
		600: {
			slidesPerView: 1,
		},
		885: {
			slidesPerView: 1.75,
		},
		991: {
			slidesPerView: 2,
		},
		1080: {
			slidesPerView: 2.25,
		},
		1200: {
			slidesPerView: 2.5,
		},
		1400: {
			slidesPerView: 2.75,
		},
		1550: {
			slidesPerView: 3,
		},
		1920: {
			slidesPerView: 3,
		}
	}
});



/* 
**
** Инициализируем Swiper для блока 'clients'
**
*/
new Swiper('.asking-slider', {
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
		clickable: true,
  },

	// Количество слайдов для показа
	slidesPerView: 1,x
});