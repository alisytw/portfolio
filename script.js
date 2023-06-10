// highlight selected navigation button
const navBtnHome = document.getElementById('nav-btn-home');
const navBtnList = document.getElementsByTagName('a')
for (let i = 0; i < navBtnList.length; i++) {
    const navBtn = navBtnList[i];
    navBtn.addEventListener('click', () => {
        const highlitedButton = document.getElementsByClassName('nav-bar--btn__selected')
        for (let j = 0; j < highlitedButton.length; j++) {
            const element = highlitedButton[j];
            element.classList.remove('nav-bar--btn__selected')
        }
        navBtn.classList.toggle('nav-bar--btn__selected')
    })
}
if (document.URL.includes('/')) {
    navBtnHome.classList.add('nav-bar--btn__selected')
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

// navigation bar on scroll
// window.onscroll = function() {navBarOnScroll()};
// function navBarOnScroll() {
//   if (document.body.scrollTop > 160 || document.documentElement.scrollTop > 160) {
//     document.getElementById('navBar').style.position = 'fixed';
//   } else {
//     document.getElementById('navBar').style.position = 'absolute';
//   }
// }