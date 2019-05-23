
import "swiper/dist/css/swiper.min.css"
import Swiper from 'swiper';

export const indexSwiper = () => {
  return new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay: true,
    lazy: {
      loadPrevNext: true,
    },

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }

   });
 }

 export const caseSwiper = () => {
  return new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 6
   });
 }

 export const casedetialSwiper = () => {
  return new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    // autoplay: true,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
   });
 }
