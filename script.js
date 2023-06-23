// GLOBAL VARIABLES
// Sections
const homeSection = document.getElementById('home')
const projectsSection = document.getElementById('projects')
const studyCasesSection = document.getElementById('studyCases')
const contactSection = document.getElementById('contact')
// Buttons
const homeBtn = document.getElementById('nav-btn-home')
const projectsBtn = document.getElementById('nav-btn-projects')
const studyCasesBtn = document.getElementById('nav-btn-study-cases')
const contactBtn = document.getElementById('nav-btn-contact')

// GLOBAL FUCNTION
function resetHighlight() {
    const highlitedButton = document.getElementsByClassName('nav-bar--btn__selected')
    for (let j = 0; j < highlitedButton.length; j++) {
        const element = highlitedButton[j];
        element.classList.remove('nav-bar--btn__selected')
    }
}

function checkHighlight() {
    if (isInViewport(homeSection)) {
        resetHighlight()
        homeBtn.classList.add('nav-bar--btn__selected')
    } else if (isInViewport(projectsSection)) {
        resetHighlight()
        projectsBtn.classList.add('nav-bar--btn__selected')
    } else if (isInViewport(studyCasesSection)) {
        resetHighlight()
        studyCasesBtn.classList.add('nav-bar--btn__selected')
    } else if (isInViewport(contactSection)) {
        resetHighlight()
        contactBtn.classList.add('nav-bar--btn__selected')
    }
}


// tint card image on hover
const cardList = document.getElementsByClassName('card--wrapper')
const cardImgList = document.getElementsByClassName('card--img-wrapper')
for (let i = 0; i < cardList.length; i++) {
    const cardImg = cardImgList[i];
    const card = cardList[i];
    card.addEventListener('mouseover', () => {
        cardImg.classList.add('card--img__hover')
    })
    card.addEventListener('mouseout', () => {
        cardImg.classList.remove('card--img__hover')
    })
}

// smooth scrolling when hitting a specific button (<a> href)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// smart navigation bar highlights
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top + (rect.height / 2) > 0 && // top
        rect.left + (rect.width / 2) > 0 && // left
        rect.top + (rect.height / 2) < (window.innerHeight || document.documentElement.clientHeight) && // bottom
        rect.left + (rect.width / 2) < (window.innerWidth || document.documentElement.clientWidth) // right
    );
}
checkHighlight() // to highlight on launch
window.onscroll = function () {
    if (document.documentElement.scrollTop > 0) {
        checkHighlight()
    }
}
