import { gsap, TweenMax, Linear, TimelineMax, Power1, Power4 } from 'gsap';
import Swiper from 'swiper';
import _ from 'underscore';
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
            TweenMax.set(this, {
              'stroke-dasharray': totalLen,
              'stroke-dashoffset': totalLen,
            });
          } else {
            TweenMax.set(this, { scale: 0, transformOrigin: '50% 50%' });
          }
        });
    });
  },
  callback: [
    {
      name: 'illust01',
      func: function illust01() {
        var tl = new TimelineMax();

        var $container = $('.visual01');

        // app.mainSwiper.autoplay.stop();

        tl.add([
          TweenMax.staggerTo(
            [].slice.call($container.find('.line')).reverse(),
            0.35,
            { 'stroke-dashoffset': 0, ease: Power4.easeOut },
            0.1
          ),
          TweenMax.to($container.find('.animateTxt01'), 0.55, {
            y: 0,
            opacity: 1,
            ease: Power1.easeOut,
          }),
        ]);

        tl.add(
          [
            TweenMax.staggerTo(
              [].slice.call($container.find('.circle')).reverse(),
              0.55,
              { scale: 1, ease: Linear.easeOut },
              0.1
            ),
            TweenMax.to($container.find('.animateTxt02'), 0.55, {
              y: 0,
              opacity: 1,
              ease: Power1.easeOut,
            }),
            TweenMax.to($container.find('#circleLine01'), 0.95, {
              'stroke-dashoffset': 0,
              ease: Power1.easeOut,
            }),
          ],
          '-=0.1'
        );
        tl.to(
          $container.find('.animateTxt03'),
          0.55,
          { y: 0, opacity: 1, ease: Linear.easeNone },
          '-=0.2'
        );
        tl.to(
          $container.find('.visualTxt'),
          0.55,
          {
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

        var tl = new TimelineMax();

        var $container = $('.visual02');

        tl.staggerTo(
          [].slice.call($container.find('.circle01')),
          0.55,
          { scale: 1, ease: Linear.easeOut },
          0.15
        );
        tl.to(
          $container.find('#circleLine02'),
          0.85,
          { 'stroke-dashoffset': 0, ease: Linear.easeOut },
          '0.1'
        ),
          tl.to(
            $container.find('.animateTxt01'),
            0.55,
            { y: 0, opacity: 1, ease: Power1.easeOut },
            '-=0.85'
          );

        tl.add([
          TweenMax.staggerTo(
            [].slice.call($container.find('.circle02')),
            0.55,
            { scale: 1, ease: Linear.easeOut },
            0.1
          ),
          TweenMax.to($container.find('#circleLine03'), 1, {
            'stroke-dashoffset': 0,
            delay: 0.25,
            ease: Linear.easeOut,
          }),
          TweenMax.to($container.find('.animateTxt02'), 0.55, {
            y: 0,
            opacity: 1,
            delay: 0.1,
            ease: Power1.easeOut,
          }),
        ]);
        tl.to(
          $container.find('.animateTxt03'),
          0.55,
          { y: 0, opacity: 1, ease: Linear.easeNone },
          '-=0.2'
        );
        tl.to(
          $container.find('.visualTxt'),
          0.55,
          {
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

        var tl = new TimelineMax();

        var $container = $('.visual03');

        tl.add([
          TweenMax.to($container.find('#circleLine04'), 1, {
            'stroke-dashoffset': 0,
            ease: Linear.easeOut,
          }),
          TweenMax.staggerTo(
            [].slice.call($container.find('.circle01')),
            0.55,
            { scale: 1, ease: Linear.easeOut },
            0.15
          ),
          TweenMax.to($container.find('.animateTxt01'), 0.55, {
            y: 0,
            opacity: 1,
            ease: Power1.easeOut,
          }),
        ]);

        tl.to(
          $container.find('.circle02'),
          0.55,
          { scale: 1, ease: Power1.easeOut },
          '-=0.25'
        ),
          tl.add(
            [
              TweenMax.to($container.find('#circleLine05'), 0.45, {
                'stroke-dashoffset': 0,
                ease: Linear.easeOut,
              }),
              TweenMax.to($container.find('.animateTxt02'), 0.55, {
                y: 0,
                opacity: 1,
                ease: Power1.easeOut,
              }),
              TweenMax.to($container.find('.circle03'), 0.35, {
                scale: 1,
                ease: Power1.easeOut,
              }),
            ],
            '-=0.2'
          );

        tl.to($container.find('.animateTxt03'), 0.55, {
          y: 0,
          opacity: 1,
          ease: Linear.easeNone,
        });
        tl.to(
          $container.find('.visualTxt'),
          0.55,
          {
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

        TweenMax.delayedCall(0.35, function () {
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

    TweenMax.to(app.$header.find('.bg'), 0.5, {
      scaleY: 1,
      delay: 0.15,
      ease: Power1.easeOut,
      onStart: function () {
        app.$depth02.each(function () {
          app.tweens = TweenMax.staggerTo(
            [].slice.call($(this).find('li')),
            0.3,
            { y: 0 + '%', autoAlpha: 1, ease: Power1.easeOut },
            0.1
          );
        });
      },
    });
  });

  app.$header.on('mouseleave', function () {
    TweenMax.killTweensOf(app.tweens);
    TweenMax.set(app.$depth02.find('li'), { y: 100 + '%', autoAlpha: 0 });

    TweenMax.to(app.$header.find('.bg'), 0.5, {
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
  var tl = new TimelineMax();

  tl.staggerTo($container.find('.value'), 0.45, {
    y: 0,
    opacity: 1,
    ease: Power1.easeOut,
  });
  tl.staggerTo(
    $container.find('.description'),
    0.35,
    { y: 0, opacity: 1, ease: Power1.easeOut },
    '-=0.1'
  );
}

function animate02() {
  var $container = $('.subSection');
  var tl = new TimelineMax();
  tl.staggerTo(
    [].slice.call($container.find('.txtWrap').children()),
    0.45,
    { y: 0, opacity: 1, ease: Power1.easeOut },
    0.1
  );
  tl.staggerTo(
    [].slice.call($container.find('.news')),
    0.45,
    { scaleY: 1, ease: Power4.easeOut },
    0.1,
    '0.45'
  );
  tl.to(
    $container.find('.stock'),
    0.45,
    { scaleY: 1, ease: Power4.easeOut },
    '0.55'
  );
  tl.staggerTo(
    [].slice.call($container.find('.news .box')),
    0.35,
    { y: -100 + '%', ease: Power1.easeOut },
    0.1,
    '0.85'
  );
  tl.to(
    $container.find('.stock .box'),
    0.35,
    { y: -100 + '%', delay: 0.15, ease: Power1.easeOut },
    '0.95'
  );
}

function animate03() {
  var $container = $('.productInfo');
  var tl = new TimelineMax();
  tl.staggerTo(
    [].slice.call($container.find('.detail').children()),
    0.45,
    { y: 0, opacity: 1, ease: Power1.easeOut },
    0.1
  );
  tl.to(
    $container.find('.thumb'),
    0.45,
    { scaleY: 1, ease: Power4.easeOut, onComplete: function () {} },
    '0.35'
  );
  tl.to(
    $container.find('.thumb .box'),
    0.35,
    { y: -100 + '%', ease: Power1.easeOut },
    '0.75'
  );
}

function animate04() {
  var $container = $('.section04');
  var tl = new TimelineMax();

  tl.staggerTo(
    $container.find('.recruit'),
    0.45,
    { scaleY: 1, ease: Power4.easeOut },
    0.1,
    0,
    function () {
      TweenMax.staggerTo(
        $container.find('.recruit .box'),
        0.35,
        { y: -100 + '%', ease: Power1.easeOut },
        0.1
      );
      TweenMax.staggerTo(
        $container.find('.recruitTxt'),
        0.35,
        { y: 0, opacity: 1, delay: 0.1, ease: Power1.easeOut },
        0.1
      );
    }
  );
}

function animate05() {
  var $container = $('.anime').eq(0);

  var tl = new TimelineMax();
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

  var tl = new TimelineMax();

  tl.to(
    $container.find('h3'),
    0.45,
    { y: 0, opacity: 1, ease: Power1.easeOut },
    '+=0.5'
  );
  tl.staggerTo(
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
        TweenMax.set(app.$header, { y: -100 + '%' });
        $('.locationWrap').css({ position: 'fixed', top: 0 });
        if (prevScrollTop > viewTop) {
          TweenMax.set(app.$header, { y: 0 + '%' });
          $('.locationWrap').css({ top: app.$header.outerHeight() });
        }
      } else {
        TweenMax.set(app.$header, { y: 0 + '%' });
        $('.locationWrap').css({ position: 'absolute', top: 0 });
      }

      prevScrollTop = viewTop;
    });
  $(window).trigger('scroll');
};

$('.btnTab').on('click', function () {
  $(this).parent('.tab').addClass('on').siblings().removeClass('on');

  var tl = new TimelineMax();
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
    tl.staggerTo($tabCon.find('.scale'), 0.45, {
      scaleY: 1,
      ease: Power4.easeOut,
    });
    tl.staggerTo($tabCon.find('.scale .box'), 0.35, {
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
  var tl = new TimelineMax();
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
