export interface Observer {
    next(value: any): any;
    error(error: any): any;
    complete(): void;
}

export const observer: Observer = {
    next: (v) => console.log('Value', v),
    error: (err) => console.log(err),
    complete: () => console.log('completed')
}