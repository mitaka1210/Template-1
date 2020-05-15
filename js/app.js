const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav__list');
    const navLinks = document.querySelectorAll('.nav__list li');

    //? Toggle nav 
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        //! Animated links
        //? Автоматично се изчисляват кое меню кога да се покаже независмо колко менюта имаме
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade .5s ease forwards ${
                    index / 7 + 2}s`
            }
        });
        //! Burger Animations
        burger.classList.toggle('toggle');
    });

    //? Автоматично се изчисляват кое меню кога да се покаже независмо колко менюта имаме когато сме в мобилна версия 
    //navLinks.forEach((link, index) => {
    //    link.style.animation = `${index / 7}s`
    //    console.log(index / 7 );
    //});

}
navSlide();