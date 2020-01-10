import { Observable } from "./observable";
import { Observer } from "./observer";
import { Subscription } from "./subscription";

export class Subject extends Observable {


    private observers: Observer[] = [];

    constructor() {
        super()
    }


    subscribe(oberver: Observer) {
        this.observers.push(oberver);
        return new Subscription()
    }

    next(value: any) {
        this.observers.forEach(observer => observer.next(value));
    }

    error(err: any) {
        this.observers.forEach(obs => obs.error(err));
    }

    complete() {
        this.observers.forEach(obs => obs.complete());
    }
}