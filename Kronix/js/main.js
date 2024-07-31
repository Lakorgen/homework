(function () {

    document.addEventListener('click', (burgerMenu))

    function burgerMenu(e) {
        const burgerIcon = e.target.closest('.burger-icon');
        const burgerNavLink = e.target.closest('.nav__link');

        if (!burgerIcon && !burgerNavLink) return


        if (!document.body.classList.contains('body--opened-menu')) {
            document.body.classList.add('body--opened-menu')
        } else {
            document.body.classList.remove('body--opened-menu')
        }

    }


    // Слайдер отзывов
    const swiper = new Swiper('.testimonial__slider', {
        // Optional parameters
        autoHeight: true,
        direction: 'horizontal',
        slidesPerView: 1,
        centeredSlides: true,
        effect: "fade",
        loop: true,

        // Navigation arrows
        navigation: {
            nextEl: '.testimonial__next',
            prevEl: '.testimonial__prev',
        },


    });
    // Слайдер тарифов
    const swiper2 = new Swiper('.pricing__slider', {
        // Optional parameters
        autoHeight: true,
        direction: 'horizontal',
        slidesPerView: 3,
        slidesPerView: "auto",
        initialSlide: 1,
        centeredSlides: !0,

        breakpoints: {
            768: {
                centeredSlides: !1
            }
        }




    });
})()


