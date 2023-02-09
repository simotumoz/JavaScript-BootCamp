const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();


const navToggle = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');

navToggle.addEventListener('click', function(){
    //linksContainer.classList.toggle('show-links');
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const linksHeight = links.getBoundingClientRect().height;

    if(containerHeight===0){
        linksContainer.style.height = `${linksHeight}px`;
    }
    else {
        linksContainer.style.height = 0;
    }
});


const navbar = document.getElementById('nav');
const topLink = document.querySelector('.top-link');

window.addEventListener('scroll', function(){
    const scrollHeight = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;

    if(scrollHeight > navHeight){
        navbar.classList.add('fixed-nav');
    } else {
        navbar.classList.remove('fixed-nav');
    }

    // return-to-top arrow
    const fixedHeight = 500;
    if(scrollHeight > fixedHeight){
        topLink.classList.add('show-link');
    } else {
        topLink.classList.remove('show-link');
    }
});

const scrollLinks = document.querySelectorAll('.scroll-link');

scrollLinks.forEach(function(link){

    link.addEventListener('click', function(e){
        e.preventDefault();

        const id = e.currentTarget.getAttribute('href').slice(1);   //getting the href
        const element = document.getElementById(id);
        
        const navHeight = navbar.getBoundingClientRect().height;
        const containerHeight = linksContainer.getBoundingClientRect().height;

        const fixedNav = navbar.classList.contains('fixed');    // true / false

        let position = element.offsetTop - navHeight;   // <= returns the num of pixels of the element's top position 
        
        if(!fixedNav){
            position -= navHeight;
        }

        if(navHeight > 82){
            position += containerHeight;
        }
        window.scrollTo({
            left: 0,
            top: position,
        });
        
        linksContainer.style.height = 0;
    });
});

const preLoader = document.querySelector('.preloader');

window.addEventListener('load', function(){
    preLoader.classList.add('hide-preloader');
})
