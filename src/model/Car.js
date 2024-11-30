import { RUN_CONDITION, RUN_COUNT_FOR_ONCE } from '../constants/constants.js';

class Car {
  #name;

  #count;

  constructor(name) {
    this.#name = name;
    this.#count = 0;
  }

  runOrStay(randomNumber) {
    if (randomNumber >= RUN_CONDITION) {
      this.#count += RUN_COUNT_FOR_ONCE;
    }
  }

  get name() {
    return this.#name;
  }

  get count() {
    return this.#count;
  }
}

export default Car;
