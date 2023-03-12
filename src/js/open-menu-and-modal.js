/* Контейнеры */

console.log('Hello Modal')

const sideMenuWrapper = document.querySelector('.side-menu__wrapper') // Wrapper бокового меню
const sideMenuOverlay = document.querySelector('.side-menu__overlay') // Overlay бокового меню

const pageHeader = document.querySelector('.page__header') // контейнер Header страницы (верхнее меню)
const modalCall = document.querySelector('.modal-call') // контейнер Modal Call
const modalFeedback = document.querySelector('.modal-feedback') // контейнер Modal Feedback

const callOverlay = modalCall.querySelector('.modal__overlay') // Overlay Moadal Call
const callWrapper = modalCall.querySelector('.modal__wrapper') // Wrapper Moadal Call
const feedbackOverlay = modalFeedback.querySelector('.modal__overlay') // Overlay Moadal Feedback
const feedbackWrapper = modalFeedback.querySelector('.modal__wrapper') // Wrapper Moadal Feedback

const btnLeftCall = modalCall.querySelector('.modal__button-left') // кнопка закрытия в Modal Call
const btnLeftFeedback = modalFeedback.querySelector('.modal__button-left') // кнопка закрытия в Modal Feedback

/* Кнопки */

const btnOpenMenu = pageHeader.querySelector('.button-menu--open-burger') // Кнопка открытия бокового меню в Header
const btnCloseMenu = sideMenuWrapper.querySelector('.button-menu--close') // Кнопка закрытия бокового меню в SideMenu

const btnOpenCall = pageHeader.querySelector('.button-menu--call') // Кнопка открытия Moadal Call меню в Header
const btnOpenFeedback = pageHeader.querySelector('.button-menu--message') // Кнопка открытия Moadal Call меню в Header

const btnCloseCall = modalCall.querySelector('.button-menu--close') // Кнопка закрытия Moadal Call
const btnCloseFeedback = modalFeedback.querySelector('.button-menu--close') // Кнопка закрытия Modal Feedback

const btnMenuCall = sideMenuWrapper.querySelector('.button-menu--call') // Кнопка открытия Moadal Call меню в SideMenu
const btnMenuFeedback = sideMenuWrapper.querySelector('.button-menu--message') // Кнопка открытия Moadal Call меню в SideMenu

/* Классы */

const sideMenuActive = 'side-menu__overlay--active'
const sideMenuOpen = 'side-menu__wrapper--open'
const modalActive = 'modal__overlay--active'
const modalOpen = 'modal__wrapper--open'
const btnLeftOpen = 'modal__button-left--open'

/* Функции */

const openingAction = function (element, wrapper, overlay, opening, active) {
  element.addEventListener('click', function () {
    wrapper.classList.add(opening)
    overlay.classList.add(active)
  })
}

const closingAction = function (element, wrapper, overlay, opening, active) {
  element.addEventListener('click', function () {
    wrapper.classList.remove(opening)
    overlay.classList.remove(active)
  })

  wrapper.addEventListener('click', function () {
    // запрет на всплытие (чтобы при клике на Wrapper меню Modal не закрывались)
    event.stopPropagation()
  })
}

const btnOpen = function (element, btn, btnOpen) {
  element.addEventListener('click', function () {
    btn.classList.add(btnOpen)
  })
}

const btnClose = function (element, btn, btnOpen) {
  element.addEventListener('click', function () {
    btn.classList.remove(btnOpen)
  })

  btn.addEventListener('click', function () {
    event.stopPropagation()
  })
}

// Open and Close SideMenu
openingAction(
  btnOpenMenu,
  sideMenuWrapper,
  sideMenuOverlay,
  sideMenuOpen,
  sideMenuActive
) // клик по кнопке в Header (открытие бокового)
closingAction(
  btnCloseMenu,
  sideMenuWrapper,
  sideMenuOverlay,
  sideMenuOpen,
  sideMenuActive
) // клик по кнопке в SideMenu (закрытие бокового меню)
closingAction(
  sideMenuOverlay,
  sideMenuWrapper,
  sideMenuOverlay,
  sideMenuOpen,
  sideMenuActive
) // клик по Overlay в SideMenu (закрытие бокового меню)

// Open and Close Modal
openingAction(btnOpenCall, callWrapper, callOverlay, modalOpen, modalActive) // клик по кнопке в Header (открытие Modal Call)
openingAction(
  btnOpenFeedback,
  feedbackWrapper,
  feedbackOverlay,
  modalOpen,
  modalActive
) // клик по кнопке в Header (открытие ModalFeedback)

openingAction(btnMenuCall, callWrapper, callOverlay, modalOpen, modalActive) // клик по кнопке в SideMenu (открытие ModalC all)
openingAction(
  btnMenuFeedback,
  feedbackWrapper,
  feedbackOverlay,
  modalOpen,
  modalActive
) // клик по кнопке в SideMenu (открытие Modal Feedback)

closingAction(btnCloseCall, callWrapper, callOverlay, modalOpen, modalActive) // клик по кнопке в Modal Call (закрытие Modal Call)
closingAction(callOverlay, callWrapper, callOverlay, modalOpen, modalActive) // клик по Overlay в Modal Call (закрытие Modal Call)

closingAction(
  btnCloseFeedback,
  feedbackWrapper,
  feedbackOverlay,
  modalOpen,
  modalActive
) // клик по кнопке в Modal Feedback (закрытие Modal Feedback)
closingAction(
  feedbackOverlay,
  feedbackWrapper,
  feedbackOverlay,
  modalOpen,
  modalActive
) // клик в Overlay в Modal Feedback (закрытие Modal Feedback)

btnOpen(btnOpenFeedback, btnLeftFeedback, btnLeftOpen)
btnOpen(btnMenuFeedback, btnLeftFeedback, btnLeftOpen)
btnOpen(btnOpenCall, btnLeftCall, btnLeftOpen)
btnOpen(btnMenuCall, btnLeftCall, btnLeftOpen)

btnClose(btnCloseFeedback, btnLeftFeedback, btnLeftOpen)
btnClose(feedbackOverlay, btnLeftFeedback, btnLeftOpen)
btnClose(btnCloseCall, btnLeftCall, btnLeftOpen)
btnClose(callOverlay, btnLeftCall, btnLeftOpen)

/* Обработчик на Escape */

document.addEventListener('keydown', function (evt) {
  if (
    !callWrapper.classList.contains(modalOpen) &&
    !feedbackWrapper.classList.contains(modalOpen)
  ) {
    if (sideMenuWrapper.classList.contains(sideMenuOpen)) {
      if (evt.keyCode === 27) {
        sideMenuOverlay.classList.remove(sideMenuActive)
        sideMenuWrapper.classList.remove(sideMenuOpen)
      }
    }
  } else if (callWrapper.classList.contains(modalOpen)) {
    if (evt.keyCode === 27) {
      callOverlay.classList.remove(modalActive)
      callWrapper.classList.remove(modalOpen)
      btnLeftCall.classList.remove(btnLeftOpen)
    }
  } else if (feedbackWrapper.classList.contains(modalOpen)) {
    if (evt.keyCode === 27) {
      feedbackOverlay.classList.remove(modalActive)
      feedbackWrapper.classList.remove(modalOpen)
      btnLeftFeedback.classList.remove(btnLeftOpen)
    }
  }
})
