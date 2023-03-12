/* --- Обработчики для кнопок Читатать далее, Показать/Скрыть --- */

/* Массив с разделом Content */
export const sectionContent = document.querySelectorAll('.content')

/* кнопки Читатать далее, Показать/Скрыть */
const buttonContent = sectionContent[0].querySelector('.content__button') // "Читать далее"
const buttonBrands = sectionContent[1].querySelector('.content__button') // в Брендах
const buttonDevices = sectionContent[2].querySelector('.content__button') // в Устройствах

/* Текст в разделе "О компании" */
const contentText = sectionContent[0].querySelector('.content__text')

/* список слайдов в свайпере */
const wrapperBrands = sectionContent[1].querySelector(
  '.content-swiper__wrapper'
) // в Брендах
const wrapperDevices = sectionContent[2].querySelector(
  '.content-swiper__wrapper'
) // в Устройствах

/* класс для поворота стрелок*/
const contentButtonUp = 'content__button--up'

/* класс hidden */

const contentHidden = 'content__text--hidden' // для раздела "О компании"
const wrapperHidden = 'content-swiper__wrapper--hidden' // для списка свайперов

buttonContent.addEventListener('click', function () {
  if (contentText.classList.contains(contentHidden)) {
    //условие для смены текста
    buttonContent.children[0].textContent = 'Скрыть' //смена текста в спане
    buttonContent.classList.add(contentButtonUp) //смена класса кнопки
  } else {
    buttonContent.children[0].textContent = 'Читать далее' //смена текста в спане
    buttonContent.classList.remove(contentButtonUp) //смена класса кнопки
  }

  contentText.classList.toggle(contentHidden) //переключатель
})

buttonBrands.addEventListener('click', function () {
  if (wrapperBrands.classList.contains(wrapperHidden)) {
    //условие для смены текста
    buttonBrands.children[0].textContent = 'Скрыть' //смена текста в спане
    buttonBrands.classList.add(contentButtonUp) //смена класса кнопки
  } else {
    buttonBrands.children[0].textContent = 'Показать все' //смена текста в спане
    buttonBrands.classList.remove(contentButtonUp) //смена класса кнопки
  }

  wrapperBrands.classList.toggle(wrapperHidden) //переключатель
})

buttonDevices.addEventListener('click', function () {
  if (wrapperDevices.classList.contains(wrapperHidden)) {
    //условие для смены текста
    buttonDevices.children[0].textContent = 'Скрыть' //смена текста в спане
    buttonDevices.classList.add(contentButtonUp) //смена класса кнопки
  } else {
    buttonDevices.children[0].textContent = 'Показать все' //смена текста в спане
    buttonDevices.classList.remove(contentButtonUp) //смена класса кнопки
  }

  wrapperDevices.classList.toggle(wrapperHidden) //переключатель
})

console.log('Hello Button-Show')
/* ------- */
