import { gsap } from 'gsap';
const callback = function (entries, observer) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      // play the individual target.timeline
      entry.target.timeline.play();
    } else {
      //entry.target.timeline.pause(0);
    }
  });
};

const options = {
  lethreshold: 0.6, // target 'section' should be 60% visible
  rootMargin: '0px 0px -10% 0px',
  //rootMargin isn't active in a normal CodePen.
  //Change View: use DebugMode
};

const targets: any = document.querySelectorAll('.js-gsap-target');
// a loop: create the individual target timelines
targets.forEach(function (target) {
  const action = gsap
    .timeline({ paused: true })
    .from(target, { autoAlpha: 0, y: 100, duration: 1 }, 0);

  target.timeline = action;
});

const observer = new IntersectionObserver(callback, options);

// Looping through the ELEMENTS and adding them as targets of the observer
// https://developer.mozilla.org/en-US/docs/Web/API/NodeList#Example

Array.prototype.forEach.call(targets, (el) => {
  observer.observe(el);
});
