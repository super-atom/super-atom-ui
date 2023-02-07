import './ingredient.scss';

const $body = $('body');
const $js_themeless_btn = $('.js_themeless_btn');
const $js_base_theme_btn = $('.js_base_theme_btn');
const $js_atom_theme_btn = $('.js_atom_theme_btn');
const $js_tokens_theme_btn = $('.js_tokens_theme_btn');

$js_base_theme_btn.on('click', () => {
  $body.attr('data-theme', 'base');
});

$js_atom_theme_btn.on('click', () => {
  $body.attr('data-theme', 'atom');
});

$js_tokens_theme_btn.on('click', () => {
  $body.attr('data-theme', 'tokens');
});

$js_themeless_btn.on('click', () => {
  $body.attr('data-theme', '');
});
