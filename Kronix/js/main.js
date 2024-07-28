(function () {

    document.addEventListener('click', (burgerMenu))

    function burgerMenu(e) {
        const burgerIcon = e.target.closest('.burger-icon');
        const burgerNavLink = e.target.closest('.nav__link');

        if(!burgerIcon && ! burgerNavLink) return


        if(!document.body.classList.contains('body--opened-menu')){
            document.body.classList.add('body--opened-menu')
        } else{
            document.body.classList.remove('body--opened-menu')
        }

    }
})()


// const burgerIcon = document.querySelector('.burger-icon')
// const body = document.body

//     burgerIcon.addEventListener('click', () =>{
//         body.classList.toggle('body--opened-menu')
//     })