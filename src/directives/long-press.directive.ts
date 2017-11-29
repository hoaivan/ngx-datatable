import {
  Directive, Input, Output, EventEmitter, HostBinding,
  HostListener, OnDestroy
} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
<<<<<<< HEAD
import 'rxjs/add/operator/takeUntil';
import { MouseEvent } from './../events';
=======
import { takeUntil } from 'rxjs/operators';

import { MouseEvent } from '../events';
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2

@Directive({ selector: '[long-press]' })
export class LongPressDirective implements OnDestroy {

  @Input() pressEnabled: boolean = true;
  @Input() pressModel: any;
  @Input() duration: number = 500;

  @Output() longPressStart: EventEmitter<any> = new EventEmitter();
  @Output() longPressing: EventEmitter<any> = new EventEmitter();
  @Output() longPressEnd: EventEmitter<any> = new EventEmitter();

  pressing: boolean;
  isLongPressing: boolean;
  timeout: any;
  mouseX: number = 0;
  mouseY: number = 0;

  subscription: Subscription;

  @HostBinding('class.press')
  get press(): boolean { return this.pressing; }

  @HostBinding('class.longpress')
  get isLongPress(): boolean {
    return this.isLongPressing;
  }

<<<<<<< HEAD
  @HostListener('mousedown', [ '$event' ])
  onMouseDown(event: MouseEvent): void {
    // don't do right/middle clicks
    if(event.which !== 1 || !this.pressEnabled) return;

    // don't start drag if its on resize handle
    const target = (<HTMLElement>event.target);
    if(target.classList.contains('resize-handle')) return;
=======
  @HostListener('mousedown', ['$event'])
  onMouseDown(event: MouseEvent): void {
    // don't do right/middle clicks
    if (event.which !== 1 || !this.pressEnabled) return;

    // don't start drag if its on resize handle
    const target = (<HTMLElement>event.target);
    if (target.classList.contains('resize-handle')) return;
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2

    this.mouseX = event.clientX;
    this.mouseY = event.clientY;

    this.pressing = true;
    this.isLongPressing = false;

    const mouseup = Observable.fromEvent(document, 'mouseup');
    this.subscription = mouseup.subscribe((ev: MouseEvent) => this.onMouseup());

    this.timeout = setTimeout(() => {
      this.isLongPressing = true;
      this.longPressStart.emit({
        event,
        model: this.pressModel
      });

      this.subscription.add(
        Observable.fromEvent(document, 'mousemove')
<<<<<<< HEAD
          .takeUntil(mouseup)
=======
          .pipe(takeUntil(mouseup))
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
          .subscribe((mouseEvent: MouseEvent) => this.onMouseMove(mouseEvent))
      );

      this.loop(event);
    }, this.duration);

    this.loop(event);
  }

  onMouseMove(event: MouseEvent): void {
    if (this.pressing && !this.isLongPressing) {
      const xThres = Math.abs(event.clientX - this.mouseX) > 10;
      const yThres = Math.abs(event.clientY - this.mouseY) > 10;

      if (xThres || yThres) {
        this.endPress();
      }
    }
  }

<<<<<<< HEAD
  loop(event: Event): void {
=======
  loop(event: MouseEvent): void {
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
    if (this.isLongPressing) {
      this.timeout = setTimeout(() => {
        this.longPressing.emit({
          event,
          model: this.pressModel
        });
        this.loop(event);
      }, 50);
    }
  }

  endPress(): void {
    clearTimeout(this.timeout);
    this.isLongPressing = false;
    this.pressing = false;
    this._destroySubscription();

    this.longPressEnd.emit({
      model: this.pressModel
    });
  }

  onMouseup(): void {
    this.endPress();
  }

  ngOnDestroy(): void {
    this._destroySubscription();
  }

  private _destroySubscription(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
      this.subscription = undefined;
    }
  }

}
