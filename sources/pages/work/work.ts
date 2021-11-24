import "core-js/stable";
import { gsap, Linear, Power1, Power4 } from 'gsap';
import Swiper from 'swiper';
import _ from 'lodash';
import './work.scss';

var app = app || {};

app.illust = {
  init: function () {
    this.$container = $("[class*='illust']");
    this.$container.find('g').each(function () {
      $(this)
        .children()
        .each(function () {
          if (
            this.nodeName === 'polyline' ||
            this.nodeName === 'line' ||
            this.nodeName === 'polygon' ||
            this.nodeName === 'path'
          ) {
            var totalLen = Math.ceil(this.getTotalLength());
            gsap.set(this, {
              'stroke-dasharray': totalLen,
              'stroke-dashoffset': totalLen,
            });
          } else {
            gsap.set(this, { scale: 0, transformOrigin: '50% 50%' });
          }
        });
    });
  },
  callback: [
    {
      name: 'illust01',
      func: function illust01() {
        var tl = gsap.timeline();

        var $container = $('.visual01');

        // app.mainSwiper.autoplay.stop();

        tl.add([
          gsap.to(
            [].slice.call($container.find('.line')).reverse(),
            { duration: 0.1, 'stroke-dashoffset': 0, ease: Power4.easeOut },
          ),
          gsap.to($container.find('.animateTxt01'), {
            duration: 0.55,
            y: 0,
            opacity: 1,
            ease: Power1.easeOut,
          }),
        ]);

        tl.add(
          [
            gsap.to(
              [].slice.call($container.find('.circle')).reverse(),
              { duration: 0.55, scale: 1, ease: Linear.easeOut },
            ),
            gsap.to($container.find('.animateTxt02'), {
              duration: 0.55,
              y: 0,
              opacity: 1,
              ease: Power1.easeOut,
            }),
            gsap.to($container.find('#circleLine01'), {
              duration: 0.95,
              'stroke-dashoffset': 0,
              ease: Power1.easeOut,
            }),
          ],
          '-=0.1'
        );
        tl.to(
          $container.find('.animateTxt03'),
          { duration: 0.55, y: 0, opacity: 1, ease: Linear.easeNone },
          '-=0.2'
        );
        tl.to(
          $container.find('.visualTxt'),
          {
            duration: 0.55,
            y: 0,
            opacity: 1,
            ease: Linear.easeNone,
            onComplete: function () {
              app.mainSwiper.autoplay.start();
            },
          },
          '+=0.1'
        );
      },
    },
    {
      name: 'illust02',
      func: function illust02() {
        // app.mainSwiper.autoplay.stop();

        var tl = gsap.timeline();

        var $container = $('.visual02');

        tl.to(
          [].slice.call($container.find('.circle01')),
          { duration: 0.55, scale: 1, ease: Linear.easeOut },
        );
        tl.to(
          $container.find('#circleLine02'),
          { duration: 0.85, 'stroke-dashoffset': 0, ease: Linear.easeOut },
          '0.1'
        ),
          tl.to(
            $container.find('.animateTxt01'),
            { duration: 0.55, y: 0, opacity: 1, ease: Power1.easeOut },
            '-=0.85'
          );

        tl.add([
          gsap.to(
            [].slice.call($container.find('.circle02')),
            { duration: 0.1, scale: 1, ease: Linear.easeOut },
          ),
          gsap.to($container.find('#circleLine03'), {
            duration: 1,
            'stroke-dashoffset': 0,
            delay: 0.25,
            ease: Linear.easeOut,
          }),
          gsap.to($container.find('.animateTxt02'), {
            duration: 0.55,
            y: 0,
            opacity: 1,
            delay: 0.1,
            ease: Power1.easeOut,
          }),
        ]);
        tl.to(
          $container.find('.animateTxt03'),
          { duration: 0.55, y: 0, opacity: 1, ease: Linear.easeNone },
          '-=0.2'
        );
        tl.to(
          $container.find('.visualTxt'),
          {
            duration: 0.55,
            y: 0,
            opacity: 1,
            ease: Linear.easeNone,
            onComplete: function () {
              app.mainSwiper.autoplay.start();
            },
          },
          '+=0.2'
        );
      },
    },
    {
      name: 'illust03',
      func: function illust03() {
        // app.mainSwiper.autoplay.stop();

        var tl = gsap.timeline();

        var $container = $('.visual03');

        tl.add([
          gsap.to($container.find('#circleLine04'), 1, {
            'stroke-dashoffset': 0,
            ease: Linear.easeOut,
          }),
          gsap.to(
            [].slice.call($container.find('.circle01')),
            { duration: 0.15, scale: 1, ease: Linear.easeOut },
          ),
          gsap.to($container.find('.animateTxt01'), {
            duration: 0.55,
            y: 0,
            opacity: 1,
            ease: Power1.easeOut,
          }),
        ]);

        tl.to(
          $container.find('.circle02'),
          { duration: 0.55, scale: 1, ease: Power1.easeOut },
          '-=0.25'
        ),
          tl.add(
            [
              gsap.to($container.find('#circleLine05'), {
                duration: 0.45,
                'stroke-dashoffset': 0,
                ease: Linear.easeOut,
              }),
              gsap.to($container.find('.animateTxt02'), {
                duration: 0.55,
                y: 0,
                opacity: 1,
                ease: Power1.easeOut,
              }),
              gsap.to($container.find('.circle03'), {
                duration: 0.35,
                scale: 1,
                ease: Power1.easeOut,
              }),
            ],
            '-=0.2'
          );
        tl.to($container.find('.animateTxt03'), {
          duration: 0.55,
          y: 0,
          opacity: 1,
          ease: Linear.easeNone,
        });
        tl.to(
          $container.find('.visualTxt'),
          {
            duration: 0.55,
            y: 0,
            opacity: 1,
            ease: Linear.easeNone,
            onComplete: function () {
              app.mainSwiper.autoplay.start();
            },
          },
          '+=0.2'
        );
      },
    },
  ],
  _call: function (id) {
    _.first(
      _.filter(this.callback, function (val) {
        return val.name === id;
      })
    ).func.call();
  },
};

app.initSwiper = function () {
  app.mainSwiper = new Swiper('.swiper-container-main', {
    slidesPerView: 'auto',
    allowTouchMove: false,
    pagination: {
      el: '.swiper-pagination-main',
      type: 'bullets',
      clickable: true,
    },
    autoplay: {
      delay: 4000,
    },
    on: {
      init: function () {
        var _this = this;

        var activeIndex = this.activeIndex;

        var $btnAutoplayToggle = $('.btnAutoplayToggle');

        var id = $('.swiper-slide')
          .eq(activeIndex)
          .find("[class*='illust']")
          .attr('class');

        $(_this.slides[activeIndex]).find('video').get(0).play();

        gsap.delayedCall(0.35, function () {
          app.illust._call(id);
        });

        $btnAutoplayToggle.on('click', function () {
          if ($(this).toggleClass('on').hasClass('on')) {
            _this.autoplay.stop();
          } else {
            _this.autoplay.start();
          }
        });
      },
      slideChangeTransitionEnd: function () {
        var _this = this;
        var activeIndex = this.activeIndex;
        var id = $('.swiper-slide')
          .eq(activeIndex)
          .find("[class*='illust']")
          .attr('class');
        app.illust._call(id);
        $(_this.slides[activeIndex]).find('video').get(0).play();
      },
    },
  });
};

app.GNB = function () {
  app.$header = $('#header');

  app.$depth01 = app.$header.find('.menu > a');
  app.$depth02 = app.$header.find('.depth02');

  app.isMouseEntered = false;

  app.$depth01.on('mouseenter', function () {
    if (app.isMouseEntered) return;
    app.isMouseEntered = true;

    app.$header.css({ overflow: 'visible' }).addClass('on');

    gsap.to(app.$header.find('.bg'), 0.5, {
      scaleY: 1,
      delay: 0.15,
      ease: Power1.easeOut,
      onStart: function () {
        app.$depth02.each(function () {
          app.tweens = gsap.to(
            [].slice.call($(this).find('li')),
            0.3,
            { duration: 0.1, y: 0 + '%', autoAlpha: 1, ease: Power1.easeOut },
          );
        });
      },
    });
  });

  app.$header.on('mouseleave', function () {
    gsap.killTweensOf(app.tweens);
    gsap.set(app.$depth02.find('li'), { y: 100 + '%', autoAlpha: 0 });

    gsap.to(app.$header.find('.bg'), 0.5, {
      scaleY: 0,
      ease: Power1.easeOut,
      onComplete: function () {
        app.$header.css({ overflow: 'hidden' });

        if ($(window).scrollTop() <= 0 && !$('#wrap').hasClass('sub')) {
          app.$header.removeClass('on');
        }
        app.isMouseEntered = false;
      },
    });
  });
};

function animate01() {
  var $container = $('.section01');
  var tl = gsap.timeline();

  tl.to($container.find('.value'), 0.45, {
    y: 0,
    opacity: 1,
    ease: Power1.easeOut,
  });
  tl.to(
    $container.find('.description'),
    0.35,
    { y: 0, opacity: 1, ease: Power1.easeOut },
    '-=0.1'
  );
}

function animate02() {
  var $container = $('.subSection');
  var tl = gsap.timeline();
  tl.to(
    [].slice.call($container.find('.txtWrap').children()),
    0.45,
    { y: 0, opacity: 1, ease: Power1.easeOut },
    0.1
  );
  tl.to(
    [].slice.call($container.find('.news')),
    0.45,
    { duration: '0.45', scaleY: 1, ease: Power4.easeOut },
    0.1,
  );
  tl.to(
    $container.find('.stock'),
    0.45,
    { duration: 0.55, scaleY: 1, ease: Power4.easeOut },
  );
  tl.to(
    [].slice.call($container.find('.news .box')),
    0.35,
    { duration: 0.85, y: -100 + '%', ease: Power1.easeOut },
    0.1,
  );
  tl.to(
    $container.find('.stock .box'),
    0.35,
    { duration: 0.95, y: -100 + '%', delay: 0.15, ease: Power1.easeOut },
  );
}

function animate03() {
  var $container = $('.productInfo');
  var tl = gsap.timeline();
  tl.to(
    [].slice.call($container.find('.detail').children()),
    0.45,
    { y: 0, opacity: 1, ease: Power1.easeOut },
    0.1
  );
  tl.to(
    $container.find('.thumb'),
    0.45,
    { duration: 0.35, scaleY: 1, ease: Power4.easeOut, onComplete: function () { } },
  );
  tl.to(
    $container.find('.thumb .box'),
    0.35,
    { duration: 0.75, y: -100 + '%', ease: Power1.easeOut },
  );
}

function animate04() {
  var $container = $('.section04');
  var tl = gsap.timeline();

  tl.to(
    $container.find('.recruit'),
    0.45,
    { duration: 0, scaleY: 1, ease: Power4.easeOut },
    0.1,
  );
  tl.to(
    $container.find('.recruit .box'),
    0.35,
    { y: -100 + '%', ease: Power1.easeOut },
    0.1
  );
  tl.to(
    $container.find('.recruitTxt'),
    0.35,
    { y: 0, opacity: 1, delay: 0.1, ease: Power1.easeOut },
    0.1
  );
}

function animate05() {
  var $container = $('.anime').eq(0);

  var tl = gsap.timeline();
  tl.to(
    $container.find('h3'),
    0.45,
    { y: 0, opacity: 1, ease: Power1.easeOut },
    '+=0.5'
  )
    .to($container.find('.visualTxt'), 0.55, {
      scaleY: 1,
      ease: Power4.easeOut,
    })
    .to($container.find('.visualTxt .box'), 0.45, {
      y: -100 + '%',
      ease: Power1.easeOut,
    })
    .to($container.find('.description'), 0.45, {
      y: 0,
      opacity: 1,
      ease: Power1.easeOut,
    });
}

function animate06() {
  var $container = $('.anime').last();

  var tl = gsap.timeline();

  tl.to(
    $container.find('h3'),
    0.45,
    { y: 0, opacity: 1, ease: Power1.easeOut },
    '+=0.5'
  );
  tl.to(
    [].slice.call($container.find('.title')),
    0.55,
    { y: 0, opacity: 1, ease: Power1.easeOut },
    0.1
  );
  tl.to(
    $container.find('.text'),
    0.45,
    { y: 0, opacity: 1, ease: Power1.easeOut },
    '-=0.4'
  );
}

app.Scroll = function () {
  var $animated = $('.animated'),
    $anime = $('.anime');

  var prevScrollTop = 0;

  var handleScroll = function () {
    var viewTop = $(this).scrollTop(),
      viewHeight = $(this).outerHeight(),
      viewBottom = viewTop + viewHeight;

    if (viewTop > 0) {
      app.$header.addClass('on');
    } else {
      if (app.isMouseEntered) return;
      !$('#wrap').hasClass('sub') && app.$header.removeClass('on');
    }

    $animated.each(function () {
      var callbackName2 = $(this).data('animate');
      var elementTop = $(this).offset().top,
        elementHeight = $(this).outerHeight(),
        elementBottom = elementTop + elementHeight;

      if (elementBottom > viewTop && elementTop < viewBottom) {
        var callbackName = $(this).data('animate');
        // window[callbackName].call();
        eval(`${callbackName}()`);
      }
    });

    $anime.each(function () {
      var elementTop = $(this).offset().top,
        elementHeight = $(this).outerHeight(),
        elementBottom = elementTop + elementHeight;

      if (elementBottom > viewTop && elementTop < viewBottom) {
        var callbackName = $(this).data('animate');
        // window[callbackName].call();
        eval(`${callbackName}()`);
      }
    });
  };

  $(window).on('scroll', _.debounce(handleScroll, 100));
  $('#wrap').hasClass('sub') &&
    $(window).on('scroll', function () {
      var viewTop = $(this).scrollTop();

      if (viewTop >= $('.contents').offset().top) {
        gsap.set(app.$header, { y: -100 + '%' });
        $('.locationWrap').css({ position: 'fixed', top: 0 });
        if (prevScrollTop > viewTop) {
          gsap.set(app.$header, { y: 0 + '%' });
          $('.locationWrap').css({ top: app.$header.outerHeight() });
        }
      } else {
        gsap.set(app.$header, { y: 0 + '%' });
        $('.locationWrap').css({ position: 'absolute', top: 0 });
      }

      prevScrollTop = viewTop;
    });
  $(window).trigger('scroll');
};

$('.btnTab').on('click', function () {
  $(this).parent('.tab').addClass('on').siblings().removeClass('on');

  var tl = gsap.timeline();
  var $tabCon = $(this).next();

  tl.to($tabCon.find('.tabTit'), 0.65, {
    y: 0,
    opacity: 1,
    ease: Power1.easeOut,
  }).to(
    $tabCon.find('.coreTxt'),
    0.45,
    { y: 0, opacity: 1, ease: Power1.easeOut },
    '-=0.1'
  );

  $tabCon.find('.description').length > 0 &&
    tl.to(
      $tabCon.find('.description'),
      0.45,
      { y: 0, opacity: 1, ease: Power1.easeOut },
      '-=0.1'
    );

  if ($tabCon.find('.scale').length > 0) {
    tl.to($tabCon.find('.scale'), 0.45, {
      scaleY: 1,
      ease: Power4.easeOut,
    });
    tl.to($tabCon.find('.scale .box'), 0.35, {
      y: -100 + '%',
      ease: Power1.easeOut,
    });
  }

  $tabCon.find('.opacity').length > 0 &&
    tl.to($tabCon.find('.opacity'), 0.75, {
      opacity: 1,
      ease: Linear.easeNone,
    });
});

$('.toggle').on('click', 'button', function () {
  if ($(this).parent('.toggle').toggleClass('on').hasClass('on')) {
    $(this).parent('.toggle').siblings('.toggle').removeClass('on');
  }
});

$(document).on('click', function (e) {
  if (
    e.target.nodeName !== 'button' &&
    !$(e.target).parent().hasClass('toggle')
  ) {
    $('.toggle.on').find('button').trigger('click');
  }
});

function ani() {
  var tl = gsap.timeline();
  var $container = $('.ani');
  tl.to($container.find('.tit'), 0.45, {
    y: 0,
    opacity: 1,
    ease: Power1.easeOut,
  })
    .to(
      $container.find('.subTit'),
      0.45,
      { y: 0, opacity: 1, ease: Power1.easeOut },
      '-=0.1'
    )
    .to(
      $container.find('.line'),
      0.55,
      { scaleX: 1, ease: Power4.easeOut },
      '-=0.2'
    )
    .to(
      $container.find('.txt'),
      0.45,
      { y: 0, opacity: 1, ease: Linear.easeNone },
      '-=0.2'
    )
    .to(
      $container.find('.subTxt'),
      0.45,
      { y: 0, opacity: 1, ease: Linear.easeNone },
      '-=0.1'
    );
  console.log('ANI TEST');
}

console.log('start');
app.illust.init();
app.initSwiper();
app.GNB();
app.Scroll();
ani();
console.log('end');
