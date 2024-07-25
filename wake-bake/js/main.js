(function(){

    document.addEventListener('click', burgerInit)

    function burgerInit(e){
        const burgerIcon = e.target.closest('.burger-icon')
        const burgerNavLink = e.target.closest('.nav__link')

        if(!burgerIcon && !burgerNavLink) return

        if(document.documentElement.clientWidth > 900) return

        if(!document.body.classList.contains('body--opened-menu')){
            document.body.classList.add('body--opened-menu')
        } else{
            document.body.classList.remove('body--opened-menu')
        }
    }
})()



// const burger = document.querySelector('.burger-icon')
// const body = document.querySelector('.body')
// const navLinks = document.querySelectorAll('.nav__link')

// burger.addEventListener('click', () => {
//     body.classList.toggle('body--opened-menu')
// })

// navLinks.forEach(navLink =>{
//     navLink.addEventListener('click', () => {
//         body.classList.remove('body--opened-menu')
//     })
// })
