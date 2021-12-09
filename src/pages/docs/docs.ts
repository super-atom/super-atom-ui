import './docs.scss';

const $js_btn: JQuery<HTMLElement> = $('.js_button');
const $js_aside_nav_btn = $('.js_aside_nav_btn');
const $js_nav__link_depth_1_wrap = $('.js_nav__link_depth_1_wrap');
$js_btn.on('click', (e) => {
  if (e.target.parentElement.classList[0] === 'nav__link-depth-1') {
    e.target.parentElement.classList.toggle('on');
  }
});

$js_aside_nav_btn.on('click', () => {
  $js_nav__link_depth_1_wrap.toggleClass('on');
});
