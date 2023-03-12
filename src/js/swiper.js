import Swiper from './swiper-bundle.min.js'

import { sectionContent } from './button-show'

const swiperBrands = sectionContent[1].querySelector('.swiper')
const swiperDevices = sectionContent[2].querySelector('.swiper')
const swiperServices = sectionContent[3].querySelector('.swiper')

let sliderBrands
let sliderDevices
let sliderServices

console.log('Hello Swiper') /*&& swiperServices.dataset.mobile == 'false' */

function mobileSlider() {
  if (
    window.innerWidth <= 767 &&
    swiperBrands.dataset.mobile == 'false' &&
    swiperDevices.dataset.mobile == 'false'
  ) {
    sliderBrands = new Swiper(swiperBrands, {
      spaceBetween: 16,
      slidesPerView: 'auto',
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      }
    })

    sliderDevices = new Swiper(swiperDevices, {
      spaceBetween: 16,
      slidesPerView: 'auto',
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      }
    })

    sliderServices = new Swiper(swiperServices, {
      spaceBetween: 16,
      slidesPerView: 'auto',
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        enabled: true
      }
    })

    swiperBrands.dataset.mobile = 'true'
    swiperDevices.dataset.mobile = 'true'
    swiperServices.dataset.mobile = 'true'
  }

  if (window.innerWidth >= 768) {
    swiperBrands.dataset.mobile = 'false'
    swiperDevices.dataset.mobile = 'false'
    swiperServices.dataset.mobile = 'false'

    if (
      swiperBrands.classList.contains('swiper-initialized') &&
      swiperDevices.classList.contains('swiper-initialized') &&
      swiperServices.classList.contains('swiper-initialized')
    ) {
      sliderBrands.destroy()
      sliderDevices.destroy()
      sliderServices.destroy()
    }
  }
}

mobileSlider()

window.addEventListener('resize', () => {
  mobileSlider()
})
