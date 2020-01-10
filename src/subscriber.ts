import { Subscription } from "./subscription";
import { Observer } from "./observer";

export class Subscriber {
    
    private observer: Observer;

    private closed = false;

    private subscription: Subscription;

    constructor(observer: Observer, subscription: Subscription) {
        this.observer = observer;
        this.subscription = subscription;
        this.subscription.add(() => this.closed = true);
    }

    next(value: any) {
        if (!this.closed) {
            this.observer.next(value);
        }
    }

    error(err: any) {
        if (!this.closed) {
            this.closed = true;
            this.observer.error(err);
            this.subscription.unsubscribe();
        }
    }

    complete() {
        if (!this.closed) {
            this.closed = true;
            this.observer.complete();
            this.subscription.unsubscribe();
        }
    }
}