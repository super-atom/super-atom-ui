import '../../styles/common.scss';
import './motion/gsap';
console.log('COMMON');

const $nav = $('.nav');
const $nav_toggle_btn = $('.js-nav__toggle-btn');
$nav_toggle_btn.on('click', () => {
  $nav.toggleClass('on');
});
