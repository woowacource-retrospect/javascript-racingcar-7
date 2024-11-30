import Output from "./Output.js";
import {
  IO_MESSAGE,
  MAGIC_NUMBER,
  SPECIAL_CHARACTERS,
} from "./constants/constants.js";
import extractRandNum from "./utils/extractRandNum.js";

class Car {
  constructor(carNames) {
    this.carPosition = this.initCarPosition(carNames);
  }

  initCarPosition(carNames) {
    const carPosition = {};
    for (const carName of carNames) {
      carPosition[carName] = SPECIAL_CHARACTERS.EMPTY_STRING;
    }
    return carPosition;
  }

  startRace(tryCount) {
    Output.printMessage(IO_MESSAGE.PRINT_RESULT);
    let tryNum = 0;
    while (tryNum < tryCount) {
      for (const car of Object.keys(this.carPosition)) {
        if (this.#canMoveForward()) {
          this.carPosition[car] += SPECIAL_CHARACTERS.DASH;
        }
      }
      Output.printResult(this.carPosition);
      tryNum++;
    }
    return this.carPosition;
  }

  #canMoveForward() {
    const randNum = extractRandNum();
    if (randNum >= MAGIC_NUMBER.FORWARD_STANDARD) {
      return true;
    }
    return false;
  }
}
export default Car;
