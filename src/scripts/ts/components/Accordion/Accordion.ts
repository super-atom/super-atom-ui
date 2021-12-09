import gsap from 'gsap';

export default class Accordion {
  public el: HTMLElement;
  private readonly items: NodeListOf<Element>;
  private readonly itemClass: string = '.js-accordion';
  private readonly contentWrapperClass: string = '.js-content';
  private readonly css: object = {
    open: 'is-open',
  };

  constructor(el) {
    this.el = document.querySelector(el);
    this.items = document.querySelectorAll(`${el} .js-accordion`);
    if (this.items.length > 0) {
      this.init();
    }
  }

  private init(): void {
    for (let i = 0; i < this.items.length; i++) {
      this.items[i].addEventListener('click', (ev) => {
        ev.preventDefault();
        const current: HTMLElement = ev.currentTarget as HTMLElement;
        const contentWrapper: HTMLElement = current.querySelector(
          this.contentWrapperClass
        ) as HTMLElement;

        if (!current.classList.contains(this.css['open'])) {
          this.slideDown(current, contentWrapper);
          return;
        }

        this.closeItem();
      });
    }
  }

  private getActiveElement(): HTMLElement | null {
    const target = this.el.classList[this.el.classList.length - 1];
    const accordionItems: NodeListOf<Element> = document.querySelectorAll(
      `.${target} ${this.itemClass}`
    );
    let active = null;

    for (let i = 0; i < accordionItems.length; i++) {
      if (accordionItems[i].classList.contains(this.css['open'])) {
        active = accordionItems[i];
      }
    }
    return active;
  }

  private slideDown(element: HTMLElement, content: HTMLElement): void {
    const contentHeight = 0;
    const active: HTMLElement = this.getActiveElement() as HTMLElement;

    for (let i = 0; i < this.items.length; i++) {
      this.items[i].classList.remove(this.css['open']);
    }

    element.classList.add(this.css['open']);

    if (active) {
      const activeContent: HTMLElement = active.querySelector(
        this.contentWrapperClass
      ) as HTMLElement;
      gsap.to(activeContent, {
        duration: 0.6,
        height: 0,
        onStart: () => {
          this.openItem(content, contentHeight);
        },
      });
      return;
    }
    // else
    this.openItem(content, contentHeight);
  }

  private openItem(content: HTMLElement, contentHeight: number): void {
    gsap.set(content, {
      height: 'auto',
      onComplete: () => {
        contentHeight = content.clientHeight;
        gsap.set(content, {
          height: 0,
          onComplete: () => {
            gsap.to(content, {
              duration: 0.4,
              height: contentHeight,
              onComplete: () => {
                gsap.set(content, {
                  height: 'auto',
                });
              },
            });
          },
        });
      },
    });
  }

  private closeItem(): void {
    const active: HTMLElement = this.getActiveElement() as HTMLElement;

    if (active) {
      const activeContent: HTMLElement = active.querySelector(
        this.contentWrapperClass
      ) as HTMLElement;
      active.classList.remove(this.css['open']);
      gsap.to(activeContent, {
        duration: 0.6,
        height: 0,
      });
    }
  }
}
