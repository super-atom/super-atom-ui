import '../../styles/common.scss';
import './motion/gsap';
import '../../../node_modules/@fortawesome/fontawesome-free/scss/fontawesome.scss';
import '../../../node_modules/@fortawesome/fontawesome-free/scss/solid.scss';
import '../../../node_modules/@fortawesome/fontawesome-free/scss/brands.scss';
import './project';
console.log('COMMON');

const $nav = $('.nav');
const $nav__toggle_btn = $('.js_nav__toggle_btn');
const $nav__dim = $nav.find('.nav__dim');
const $js_copy_btn = $('.js_copy_btn');

$nav__toggle_btn.on('click', () => {
  $nav.toggleClass('on');
});
$nav__dim.on('click', () => {
  $nav.toggleClass('on');
});

$js_copy_btn.on('click', (e) => {
  const isCodeTag = e.target.previousElementSibling.tagName === 'CODE';
  const text = e.target.previousElementSibling.textContent;
  if (isCodeTag) {
    navigator.clipboard.writeText(text);
    window.alert(`Copy complete : ${text}`);
  }
});
