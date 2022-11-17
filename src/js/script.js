// $(document).ready(function () {
//     $('.carousel__inner').slick({
//         infinite: true,
//         speed: 1200,
//         // adaptiveHeight: true,
//         prevArrow: '<button type="button" class="slick-prev"><img src="icons/slider/chevron_left.png"></button>',
//         nextArrow: '<button type="button" class="slick-next"><img src="icons/slider/chevron_right.png"></button>',
//         responsive: [
//             {
//                 breakpoint: 992,
//                 settings: {
//                     dots: true,
//                     arrows: false
//                 }
//             }
//         ]
//     });
// });


// Slider
const slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    // autoplay: true,
    autoplayButton: false,
    autoplayButtonOutput: false,
    // autoplayHoverPause: true,
    controls: false,
    nav: false,
    mouseDrag: true,
    // responsive: {
    //     640: {
    //       edgePadding: 20,
    //       gutter: 20,
    //       items: 1
    //     },
    //     700: {
    //       gutter: 30
    //     },
    //     992: {
    //       items: 1
    //     }
    //   }
    // controlsText: [
    //     '<img src="icons/slider/chevron_left.png">',
    //     '<img src="icons/slider/chevron_right.png">'
    // ]
});

document.querySelector('.prev').addEventListener('click', function () {
    slider.goTo('prev');
});
document.querySelector('.next').addEventListener('click', function () {
    slider.goTo('next');
});


// Tabs, modals and form validation
$(document).ready(function(){
    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
            .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
            .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });

    function toggleSlide(item) {
        $(item).each(function(i) {
            $(this).on('click', function(e) {
                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
            })
        });
    };

    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');


    // Modal
    $('[data-modal=consultation]').on('click', function() {
        $('.overlay, #consultation').fadeIn('slow');
    });
    
    $('.button_mini').each(function(i) {
        $(this).on('click', function() {
            $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
            $('.overlay, #order').fadeIn('slow');
        });
    });
        
    $('.modal__close').on('click', function() {
        $('.overlay, #consultation, #order, #thanks').fadeOut('slow');
    });


    // Forms
    function validateForms(form) {
        $(form).validate({
            errorClass: 'error',
            rules: {
                name: 'required',
                phone: 'required',
                email: {
                    required: true,
                    email: true
                } 
            },
            messages: {
                name: "Пожалуйста, введите своё имя",
                phone: "Пожалуйста, введите свой номер телефона",
                email: {
                  required: "Пожалуйста, введите свой email",
                  email: "Неправильно введён email адрес"
                }
            }
        });
    };

    validateForms('#consultation-form');
    validateForms('#consultation form');
    validateForms('#order form');


    // Phone mask
    $('input[name=phone]').mask("+38 (999) 999-99-99");


    // Form ajax
    $('form').submit(function(e) {
        e.preventDefault();
        const error = document.querySelectorAll('form .error');
        let n = 0;
        for(let i = 0; i < error.length; i++) {
            if (window.getComputedStyle(error[i]).display === "none") {
                n++;
            };
        };

        if (n === error.length) {
            $(this).find('input').val('');
            $('#consultation, #order').fadeOut();
            $('.overlay').fadeIn('slow');
            $('#thanks').fadeIn('slow');
            $('form').trigger('reset');
        }

        return false;
    });


    // Smooth scroll pageup
    $(window).scroll(function() {
        if ($(this).scrollTop() > 1600) {
            $('.pageup').fadeIn();
        } else {
            $('.pageup').fadeOut();
        };
    });

    $("a[href=#up]").click(function(){
        const _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });
});


// Animation for info block in footer
window.addEventListener('DOMContentLoaded', () => {
    const map = document.querySelector('.footer'),
    info = document.querySelector('.footer__info'); 
    map.addEventListener('mouseenter', () => {
        if (window.screen.width >= 992) {
            info.style.cssText = 'transform: translateX(0); top: -26px; transform: scale(0.8); right: -46px;'
        }
    });
    
    map.addEventListener('mouseleave', () => {
        info.style.cssText = ''
    });
});


// let number = 4;

// let obj = {
//     name: 'apple',
//     color: 'green',
//     weight: 200
// }
// Symbol

// alert(1234);
// console.log(number);

// let answer = confirm('Вам есть 18?');
// console.log(answer);

// let answer = prompt('Вам есть 18?', '');
// console.log(answer);

// console.log(4 + 'fdd');

// let isChecked = true,
//     isClosed = false;

// console.log(isChecked && isClosed);

// console.log(isChecked || isClosed);

// if (2 * 4 == 8 * 2) {
//     console.log('Po faktu');
// } else {
//     console.log('Hujnia kakaya-to');
// }

// let answer = confirm('Вам есть 18?');
// if (answer) {
//     console.log('Davaj');
// } else {
//     console.log('Pizduy');
// }

// const num = 50;

// if (num < 49) {
//     console.log('Hujnia');
// } else if (num > 100) {
//     console.log('Dofega');
// } else {
//     console.log('Dejstvitel`no');
// }

// for(let i = 1; i < 8; i++) {
//     console.log(i);
// }

// function logging(a, b) {
//     console.log(a + b)
// }

// logging(3, 5);
// logging(6, 8);