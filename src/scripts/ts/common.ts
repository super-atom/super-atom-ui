import '../../styles/common.scss';
import './motion/gsap';
import '../../../node_modules/@fortawesome/fontawesome-free/scss/fontawesome.scss';
import '../../../node_modules/@fortawesome/fontawesome-free/scss/solid.scss';
import '../../../node_modules/@fortawesome/fontawesome-free/scss/brands.scss';
console.log('COMMON');

const $nav = $('.nav');
const $nav__toggle_btn = $('.js-nav__toggle-btn');
const $nav__dim = $nav.find('.nav__dim');
$nav__toggle_btn.on('click', () => {
  $nav.toggleClass('on');
});
$nav__dim.on('click', () => {
  $nav.toggleClass('on');
});
