export class Subscription {

    private teardowns: Function[];

    constructor() {
      this.teardowns = [];
    }

    add(teardown) {
      this.teardowns.push(teardown);
    }
    
    unsubscribe() {
      this.teardowns.forEach(teardown => teardown())
      this.teardowns = [];
    }
  }