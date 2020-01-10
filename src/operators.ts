import { Observable } from "./observable";
import { Subscriber } from "./subscriber";


export function map(mapFunction: Function) {
    return (source: Observable) => new Observable((subscriber: Subscriber) => {

        const subs = source.subscribe({
            next: (value) => subscriber.next(mapFunction(value)),
            error: (err) => subscriber.error(err),
            complete: () => subscriber.complete()
        })

        return () => {
            console.log('map tear down');
            subs.unsubscribe();
        }
    });
}