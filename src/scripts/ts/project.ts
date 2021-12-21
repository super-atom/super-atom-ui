const $yonseiPayBtn = $('.js_yonseiPayBtn');
const $bottomSheet = $('.js_bottom_sheet');
const $bottomSheetDim = $('.js_bottom_sheet_dim');

$yonseiPayBtn.on('click', () => {
  $bottomSheet.toggleClass('on');
  $bottomSheetDim.toggleClass('on');
});

$bottomSheetDim.on('click', () => {
  $bottomSheet.toggleClass('on');
  $bottomSheetDim.toggleClass('on');
});
