import { ERROR_MESSAGE } from "./constants/constants.js";

class InputValidator {
  static #validateCarCount(splittedCarNames) {
    if (splittedCarNames.length <= 1) {
      throw new Error(ERROR_MESSAGE.INVALID_CAR_COUNT);
    }
  }

  static #validateCarName(splittedCarNames) {
    for (const carName of splittedCarNames) {
      if (carName.length > 5 || carName.length < 1) {
        throw new Error(ERROR_MESSAGE.INVALID_CAR_NAME);
      }
    }
  }

  static #validateUniqueCarName(splittedCarNames) {
    if (splittedCarNames.length !== new Set(splittedCarNames).size) {
      throw new Error(ERROR_MESSAGE.DUPLICATED_CAR_NAME);
    }
  }

  static validateCarName(splittedCarNames) {
    this.#validateCarCount(splittedCarNames);
    this.#validateCarName(splittedCarNames);
    this.#validateUniqueCarName(splittedCarNames);
  }

  static validateTryCount(tryCount) {
    const tryCountNum = Number(tryCount);
    if (!Number.isInteger(tryCountNum) || tryCountNum <= 0) {
      throw new Error(ERROR_MESSAGE.INVALID_TRY_COUNT);
    }
  }
}
export default InputValidator;
