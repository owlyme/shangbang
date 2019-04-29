
import "swiper/dist/css/swiper.min.css"
import Swiper from 'swiper';

export default () => {
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
    },

   });
 }

