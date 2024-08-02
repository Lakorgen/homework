(function () {

    document.addEventListener('click', (burgerMenu))

    function burgerMenu(e) {
        const burgerIcon = e.target.closest('.burger-icon');
        const burgerNavLink = e.target.closest('.nav__link');

        if (!burgerIcon && !burgerNavLink) return
        if (document.documentElement.clientWidth > 900) return
        if (burgerNavLink && !document.body.classList.contains('body--opened-menu')) return


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
        // autoHeight: false,
        direction: 'horizontal',
        slidesPerView: 3,
        slidesPerView: "auto",
        initialSlide: 1,
        centeredSlides: true,
        spaceBetween: 30,

        breakpoints: {
            768: {
                centeredSlides: !1,
            }
        }

    });
    // Аккордеон

    const accordionLists = document.querySelectorAll('.accordion-list');

    accordionLists.forEach(el => {

        el.addEventListener('click', (e) => {

            const accordionList = e.currentTarget
            const accordionOpenedItem = accordionList.querySelector('.accordion-list__item--opened')
            const accordionOpenedContent = accordionList.querySelector('.accordion-list__item--opened .accordion-list__content')

            const accordionControl = e.target.closest('.accordion-list__control');
            if (!accordionControl) return
            e.preventDefault()
            const accordionItem = accordionControl.parentElement;
            const accordionContent = accordionControl.nextElementSibling;

            if (accordionOpenedItem && accordionItem != accordionOpenedItem) {
                accordionOpenedItem.classList.remove('accordion-list__item--opened');
                accordionOpenedContent.style.maxHeight = null;
            }
            accordionItem.classList.toggle('accordion-list__item--opened');

            if (accordionItem.classList.contains('accordion-list__item--opened')) {
                accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
            } else {
                accordionContent.style.maxHeight = null;
            }

        });

    });


    //Добавление блогов по кнопке

    document.addEventListener('DOMContentLoaded', function () {
        const button = document.getElementById('toggleButton');
        const blogList = document.querySelector('.blog__list');

        // Создаем новый набор блогов
        const additionalBlogs = `
        <li class="blog__item">
            <div class="blog__img">
                <img src="img/blog/blog-4.jpg" alt="">
            </div>
            <a href="#" class="blog__content">
                <p class="blog__content-subtitle">
                    FB
                </p>
                <h6 class="blog__content__title">
                    What is the branding, and what we need it?
                </h6>
                <p class="blog__content__text">
                    On the other hand, we denounce with righteous indignation and…
                </p>
            </a>
        </li>
        <li class="blog__item">
            <div class="blog__img">
                <img src="img/blog/blog-5.jpg" alt="">
            </div>
            <a href="#" class="blog__content">
                <p class="blog__content-subtitle">
                    AI
                </p>
                <h6 class="blog__content__title">
                    What is the branding, and what we need it?
                </h6>
                <p class="blog__content__text">
                    On the other hand, we denounce with righteous indignation and…
                </p>
            </a>
        </li>
        <li class="blog__item">
            <div class="blog__img">
                <img src="img/blog/blog-6.jpg" alt="">
            </div>
            <a href="#" class="blog__content">
                <p class="blog__content-subtitle">
                    NFT
                </p>
                <h6 class="blog__content__title">
                    What is the branding, and what we need it?
                </h6>
                <p class="blog__content__text">
                    On the other hand, we denounce with righteous indignation and…
                </p>
            </a>
        </li>
        `;

        let blogsVisible = false;

        button.addEventListener('click', function (event) {
            event.preventDefault();
            if (!blogsVisible) {
                blogList.insertAdjacentHTML('beforeend', additionalBlogs);
                button.textContent = 'Hide';
            } else {
                const additionalBlogItems = blogList.querySelectorAll('.blog__item:nth-child(n+7)');
                additionalBlogItems.forEach(item => item.remove());
                button.textContent = 'Load More';
            }
            blogsVisible = !blogsVisible;
        });
    });

    //Модалка

    const modal = document.querySelector('.modal');
    const modalButtons = document.querySelectorAll('.pricing__buy-button');

    modalButtons.forEach(button => {
        button.addEventListener('click', openModal);
    });

    modal.addEventListener('click', closeModal);

    function openModal(e) {
        e.preventDefault();
        document.body.classList.toggle('body--opened-modal');
    }

    function closeModal(e) {
        e.preventDefault();
        const target = e.target;
        if (target.closest('.modal__cancel') || target.classList.contains('modal')) {
            document.body.classList.remove('body--opened-modal');
        }
    }



})()


