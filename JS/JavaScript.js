//#region Responsive nav
const navButton = document.getElementsByClassName('dropdown-navbar')[0]
const navLinks = document.getElementsByClassName('nav-menu')[0]

navButton.addEventListener('click', () => {
  navLinks.classList.toggle('active')
})
//#endregion

//#region Return to top button
window.onscroll = function() {downwardsScroll()};
  function downwardsScroll() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      buttonReturn.style.display = 'inline-block'
    } 
    else {
      buttonReturn.style.display = 'none'
    }
  }

let returnToTop = document.getElementById('buttonReturn')
  function ReturnToTop() {
    scrollTo({top: 0, behavior: 'smooth'})
  }
//#endregion
