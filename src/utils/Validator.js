import { CAR_NAME_DUPLICATE_ERROR, CAR_NAME_LENGTH_ERROR, NUMBER_ERROR } from '../constants/constants.js';

const Validator = {
  validateCarNameInput(input) {
    const carNames = input.split(',');
    this.validateCarNameLength(carNames);
  },
  validateCarNameLength(carNames) {
    carNames.forEach((carName) => {
      if (carName.length > 5) {
        throw new Error(CAR_NAME_LENGTH_ERROR);
      }
    });
  },
  validateCarNameDuplicate(carNames) {
    if (new Set(carNames).size !== carNames.length) {
      throw new Error(CAR_NAME_DUPLICATE_ERROR);
    }
  },
  validateIsNumber(input) {
    const customInput = Number(input);
    if (!Number.isInteger(customInput) && customInput <= 0) {
      throw new Error(NUMBER_ERROR);
    }
  },
};

export default Validator;
