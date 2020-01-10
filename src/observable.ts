import { Subscription } from "./subscription";
import { Subscriber } from "./subscriber";
import { Observer } from "./observer";

export class Observable {

    private initFunc: Function;

    constructor(initFunc?: Function) {
        if (initFunc) {
            this.initFunc = initFunc;
        }
        
    }

    subscribe(observer: Observer): Subscription {
        const subscription = new Subscription();
        const subscriber = new Subscriber(observer, subscription);

        const tearDown = this.initFunc(subscriber);

        subscription.add(tearDown);
        return subscription;
    }

    pipe(...operators: ((source: Observable) => Observable)[]): Observable {
        return operators.reduce((source, next) => next(source), this);
    }


}