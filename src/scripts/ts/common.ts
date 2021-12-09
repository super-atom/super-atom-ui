import '../../styles/common.scss';
import './motion/gsap';
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
