import { Observable } from "./src/observable";
import { Subscriber } from "./src/subscriber";
import { observer } from "./src/observer";
import { map } from "./src/operators";
import { Subject } from "./src/subject";


const observable = new Observable((subscriber: Subscriber) => {
    console.log(subscriber)
    subscriber.next('sialala')

    return () => {
        console.log('usubscribed');
    }
})


const subs = observable
.pipe(
    map((v: string) => v.toUpperCase())
)
.subscribe(observer);

subs.unsubscribe();


const subject = new Subject();

const s1 = subject.subscribe(observer);
const s2 = subject.subscribe(observer);

subject.next('for subject');


s2.unsubscribe();




