const header = document.querySelector("header");
const sectionOne = document.querySelector(".home-intro");

const sectionOneOptions = {
    rootMargin: "-200px 0px 0px 0px"
};

const sectionOneObserver = new IntersectionObserver(function(
        entries,
        sectionOneObserver
    ) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                header.classList.add("nav-scrolled");
            } else {
                header.classList.remove("nav-scrolled");
            }
        });
    },
    sectionOneOptions);

sectionOneObserver.observe(sectionOne);

//! Aвтоматично скорлва до страницата

(document).ready(function() {
    let docEl = $(document),
        headerEl = $('header'),
        headerWrapEl = $('.wrapHead'),
        navEl = $('nav');


    docEl.on('scroll', function() {

        if (docEl.scrollTop() > 40) {
            headerEl.addClass('fixed-to-top');
            headerWrapEl.addClass('fixed-to-top');
            navEl.addClass('fixed-to-top');
        } else {
            headerEl.removeClass('fixed-to-top');
            headerWrapEl.removeClass('fixed-to-top');
            navEl.removeClass('fixed-to-top');
        }
    });


});
