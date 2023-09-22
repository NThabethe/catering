/*--------------- SHOW MENU ---------------*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*--------------- REMOVE MENU MOBILE ---------------*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*--------------- CHANGE BACKGROUND HEADER ---------------*/
function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 100 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 100) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*--------------- SHOW SCOLL UP ---------------*/
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 200 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 200) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*--------------- SCROLL SECTION ACTIVE LINK ---------------*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*--------------- SCROLL REVEAL ANIMATION ---------------*/
const sr = ScrollReveal({
    distance: '60px',
    duration: 2800,
    /*reset: true,*/
})


sr.reveal(`.home__data, .home__social-link, .home__info,
           .experience__data, .experience__overlay,
           .style__card`,{
    origin: 'top',
    interval: 100,
})

sr.reveal(`.about__data,
           .subscribe__description`,{
    origin: 'left',
})

sr.reveal(`.about__img-overlay,
           .subscribe__form`,{
    origin: 'right',
    interval: 100,
})

/*--------------- EMAIL JS ---------------*/
const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message'),
      contactUser = document.getElementById('contact-user')

const sendEmail = (e) =>{
    e.preventDefault()

    // Check if the field has a value
    if(contactUser.value === ''){
        // Add and remove color
        contactMessage.classList.remove('color-green')
        contactMessage.classList.add('color-red')

        // Show message
        contactMessage.textContent = 'You must enter your email ☝'

        //Remove message three after seconds
        setTimeout(() =>{
            contactMessage.textContent = ''
        }, 3000)
    } else{
        // serviceID - templateID - #form - publickey
        emailjs.sendForm('service_82gw60t','template_vbi6yio','#contact-form','sowdaz_mTCoqD4d9I')
            .then(() =>{
                // Show message and add color
                contactMessage.classList.add('color-green')
                contactMessage.textContent = 'You registered seccessfully 🥳'

                // Remove message after three seconds
                setTimeout(() =>{
                    contactMessage.textContent = ''
                }, 3000)
            }, (error) =>{
                // Mail sending error
                alert('OOPS! SOMETHING WENT WRONG... 🥺', error)
            })
        
        // To clear the input field
        contactUser.value = ''
    }
}

contactForm.addEventListener('submit', sendEmail)

/*=============== MIXITUP FILTER FEATURED ===============*/
let mixerFeatured = mixitup('.featured_content', {
	selectors: {
		target: '.featured_card'
	},
	animation: {
		duration: 300
	}
});

	

	/* Link active featured */ 
	const linkFeatured = document.querySelectorAll('.featured_item')
	
	function activeFeatured(){
		linkFeatured.forEach(l=> l.classList.remove('active-featured'))
		this.classList.add('active-featured')
	}
	linkFeatured.forEach(l=> l.addEventListener('click', activeFeatured))

/*=============== QUESTIONS ACCORDION ===============*/
const accordionItems = document.querySelectorAll('.questions__item')

accordionItems.forEach((item) =>{
    const accordionHeader = item.querySelector('.questions__header')

    accordionHeader.addEventListener('click', () =>{
        const openItem = document.querySelector('.accordion-open')

        toggleItem(item)

        if(openItem && openItem!== item){
            toggleItem(openItem)
        }
    })
})

const toggleItem = (item) =>{
    const accordionContent = item.querySelector('.questions__content')

    if(item.classList.contains('accordion-open')){
        accordionContent.removeAttribute('style')
        item.classList.remove('accordion-open')
    }else{
        accordionContent.style.height = accordionContent.scrollHeight + 'px'
        item.classList.add('accordion-open')
    }

}

