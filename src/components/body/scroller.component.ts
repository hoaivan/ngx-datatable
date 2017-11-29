import {
<<<<<<< HEAD
  Component, Input, ElementRef, Output, EventEmitter, Renderer,
  OnInit, OnDestroy, HostBinding
=======
  Component, Input, ElementRef, Output, EventEmitter, NgZone,
  OnInit, OnDestroy, HostBinding, ChangeDetectionStrategy
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
} from '@angular/core';

import { MouseEvent } from '../../events';

@Component({
  selector: 'datatable-scroller',
  template: `
    <ng-content></ng-content>
  `,
  host: {
    class: 'datatable-scroll'
<<<<<<< HEAD
  }
=======
  },
  changeDetection: ChangeDetectionStrategy.OnPush
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
})
export class ScrollerComponent implements OnInit, OnDestroy {

  @Input() scrollbarV: boolean = false;
  @Input() scrollbarH: boolean = false;

  @HostBinding('style.height.px')
  @Input() scrollHeight: number;

  @HostBinding('style.width.px')
  @Input() scrollWidth: number;

  @Output() scroll: EventEmitter<any> = new EventEmitter();

  scrollYPos: number = 0;
  scrollXPos: number = 0;
  prevScrollYPos: number = 0;
  prevScrollXPos: number = 0;
  element: any;
  parentElement: any;
  onScrollListener: any;

<<<<<<< HEAD
  constructor(element: ElementRef, private renderer: Renderer) {
=======
  constructor(private ngZone: NgZone, element: ElementRef) {
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
    this.element = element.nativeElement;
  }

  ngOnInit(): void {
    // manual bind so we don't always listen
<<<<<<< HEAD
    if(this.scrollbarV || this.scrollbarH) {
      this.parentElement = this.element.parentElement.parentElement;
      this.onScrollListener = this.renderer.listen(
        this.parentElement, 'scroll', this.onScrolled.bind(this));
=======
    if (this.scrollbarV || this.scrollbarH) {
      this.parentElement = this.element.parentElement.parentElement;
      this.ngZone.runOutsideAngular(() => {
        this.parentElement.addEventListener('scroll', this.onScrolled.bind(this));
      });
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
    }
  }

  ngOnDestroy(): void {
<<<<<<< HEAD
    if(this.scrollbarV || this.scrollbarH) {
      this.onScrollListener();
=======
    if (this.scrollbarV || this.scrollbarH) {
      this.parentElement.removeEventListener('scroll', this.onScrolled.bind(this));
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
    }
  }

  setOffset(offsetY: number): void {
<<<<<<< HEAD
    if(this.parentElement) {
=======
    if (this.parentElement) {
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
      this.parentElement.scrollTop = offsetY;
    }
  }

  onScrolled(event: MouseEvent): void {
    const dom: Element = <Element>event.currentTarget;
<<<<<<< HEAD
    this.scrollYPos = dom.scrollTop;
    this.scrollXPos = dom.scrollLeft;

    requestAnimationFrame(this.updateOffset.bind(this));
=======
    requestAnimationFrame(() => {
      this.scrollYPos = dom.scrollTop;
      this.scrollXPos = dom.scrollLeft;
      this.updateOffset();
    });
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
  }

  updateOffset(): void {
    let direction: string;
<<<<<<< HEAD
    if(this.scrollYPos < this.prevScrollYPos) {
      direction = 'down';
    } else if(this.scrollYPos > this.prevScrollYPos) {
=======
    if (this.scrollYPos < this.prevScrollYPos) {
      direction = 'down';
    } else if (this.scrollYPos > this.prevScrollYPos) {
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
      direction = 'up';
    }

    this.scroll.emit({
      direction,
      scrollYPos: this.scrollYPos,
      scrollXPos: this.scrollXPos
    });

    this.prevScrollYPos = this.scrollYPos;
    this.prevScrollXPos = this.scrollXPos;
  }

}
