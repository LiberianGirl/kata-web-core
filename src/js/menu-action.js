const mainMenu = document.querySelector('.main__menu')
const menuLink = mainMenu.querySelectorAll('.menu__link')
const menuLinklActive = 'menu__link--active'

for (let i = 0; i < menuLink.length; i++) {
  mainMenu.addEventListener(
    'click',
    function () {
      menuLink[i].classList.remove(menuLinklActive)
    },
    { capture: true }
  )

  menuLink[i].addEventListener('click', function () {
    menuLink[i].classList.add(menuLinklActive)
    event.stopPropagation()
  })
}

const mainSideMenu = document.querySelector('.side-menu__main')
const menuSideLink = mainSideMenu.querySelectorAll('.menu__side-menu-link')
const menuSideLinkActive = 'menu__side-menu-link--active'

for (let i = 0; i < menuSideLink.length; i++) {
  mainSideMenu.addEventListener(
    'click',
    function () {
      menuSideLink[i].classList.remove(menuSideLinkActive)
    },
    { capture: true }
  )

  menuSideLink[i].addEventListener('click', function () {
    menuSideLink[i].classList.add(menuSideLinkActive)
    event.stopPropagation()
  })
}
