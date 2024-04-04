let menuIcon = document.querySelector('#menu-icon');
let navbar= document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}








document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('header nav a');

    const changeActiveLink = () => {
        const scrollPosition = window.scrollY + 150; // Adjusted offset for better highlighting

        navLinks.forEach((link) => {
            const sectionId = link.getAttribute('href').substring(1); // Get the section ID from href
            const section = document.getElementById(sectionId);

            if (section) {
                const top = section.offsetTop;
                const height = section.offsetHeight;

                if (scrollPosition >= top && scrollPosition < top + height) {
                    navLinks.forEach((navLink) => navLink.classList.remove('active'));
                    link.classList.add('active');
                }
            }
        });


        
    };

    window.addEventListener('scroll', changeActiveLink);
    changeActiveLink(); 
    let header =document.querySelector('header');

    header.classList.toggle('sticky',window.scrollY > 100);


    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
});

ScrollReveal({
     
     distance: '80px',
     duration:2000,
     delay:  200
    });

    ScrollReveal().reveal('.home-content,.heading',{origin:'top'});
    ScrollReveal().reveal('.home-img,.services-container,.portfolio-box,.contact form',{origin:'bottom'});
    ScrollReveal().reveal('.home-content h1,.about-img',{origin:'left'});
    ScrollReveal().reveal('.home-content p,.about-content',{origin:'right'});

// const typed=new Typed('.multiple-text',{
//     stings:['Frontend Developer','Frontend Developer','Frontend Developer'],
//     typeSpeed:100,
//     backSpeed:100,
//     backDelay:1000,
//     loop:true
// });
const typed = new Typed('.multiple-text', {
    strings: [
        'Frontend Developer',
        'Web Designer',
        'Fast learner'
    ],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});
