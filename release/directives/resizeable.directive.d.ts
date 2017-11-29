import { ElementRef, EventEmitter, OnDestroy, AfterViewInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
<<<<<<< HEAD
import 'rxjs/add/operator/takeUntil';
=======
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
export declare class ResizeableDirective implements OnDestroy, AfterViewInit {
    resizeEnabled: boolean;
    minWidth: number;
    maxWidth: number;
    resize: EventEmitter<any>;
    element: HTMLElement;
    subscription: Subscription;
    resizing: boolean;
    constructor(element: ElementRef);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    onMouseup(): void;
    onMousedown(event: MouseEvent): void;
    move(event: MouseEvent, initialWidth: number, mouseDownScreenX: number): void;
    private _destroySubscription();
}
