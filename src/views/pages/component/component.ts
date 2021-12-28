import './component.scss';
import '../../../scripts/ts/components/Accordion/Accordion.scss';
import Accordion from '../../../scripts/ts/components/Accordion/Accordion';
import MobileDetect from 'mobile-detect';

const md = new MobileDetect(window.navigator.userAgent);
const isNotPc = md.userAgent() !== null;

const $js_btn: JQuery<HTMLElement> = $('.js_btn');
const $js_aside_nav_btn = $('.js_aside_nav_btn');
const $js_nav__link_depth_1_wrap = $('.js_nav__link_depth_1_wrap');
const $js_nav__link_depth_1 = $('.js_nav__link_depth_1');

new Accordion('.js_component_accodion');

if (isNotPc) {
  if (window.innerWidth >= 768) {
    $js_nav__link_depth_1.addClass('on');
  }
} else {
  $js_nav__link_depth_1.addClass('on');
}

$js_btn.on('click', (e) => {
  if (e.target.parentElement.classList[0] === 'nav__link-depth-1') {
    e.target.parentElement.classList.toggle('on');
  }
});

$js_aside_nav_btn.on('click', () => {
  $js_nav__link_depth_1_wrap.toggleClass('on');
  if ($js_nav__link_depth_1.hasClass('on')) {
    $js_nav__link_depth_1.removeClass('on');
  } else {
    $js_nav__link_depth_1.addClass('on');
  }
});
