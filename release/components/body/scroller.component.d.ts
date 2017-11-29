<<<<<<< HEAD
import { ElementRef, EventEmitter, Renderer, OnInit, OnDestroy } from '@angular/core';
export declare class ScrollerComponent implements OnInit, OnDestroy {
    private renderer;
=======
import { ElementRef, EventEmitter, NgZone, OnInit, OnDestroy } from '@angular/core';
export declare class ScrollerComponent implements OnInit, OnDestroy {
    private ngZone;
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
    scrollbarV: boolean;
    scrollbarH: boolean;
    scrollHeight: number;
    scrollWidth: number;
    scroll: EventEmitter<any>;
    scrollYPos: number;
    scrollXPos: number;
    prevScrollYPos: number;
    prevScrollXPos: number;
    element: any;
    parentElement: any;
    onScrollListener: any;
<<<<<<< HEAD
    constructor(element: ElementRef, renderer: Renderer);
=======
    constructor(ngZone: NgZone, element: ElementRef);
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
    ngOnInit(): void;
    ngOnDestroy(): void;
    setOffset(offsetY: number): void;
    onScrolled(event: MouseEvent): void;
    updateOffset(): void;
}
