import { observable, action } from 'mobx';

class Counter {
  @observable
  count = 0;

  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  @action
  countUp() {
    this.count++;
  }

  @action
  countDown() {
    this.count--;
  }
}

const store = new Counter();
export default store;