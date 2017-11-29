import { EventEmitter, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
<<<<<<< HEAD
import 'rxjs/add/operator/takeUntil';
=======
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
export declare class LongPressDirective implements OnDestroy {
    pressEnabled: boolean;
    pressModel: any;
    duration: number;
    longPressStart: EventEmitter<any>;
    longPressing: EventEmitter<any>;
    longPressEnd: EventEmitter<any>;
    pressing: boolean;
    isLongPressing: boolean;
    timeout: any;
    mouseX: number;
    mouseY: number;
    subscription: Subscription;
    readonly press: boolean;
    readonly isLongPress: boolean;
    onMouseDown(event: MouseEvent): void;
    onMouseMove(event: MouseEvent): void;
<<<<<<< HEAD
    loop(event: Event): void;
=======
    loop(event: MouseEvent): void;
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
    endPress(): void;
    onMouseup(): void;
    ngOnDestroy(): void;
    private _destroySubscription();
}
