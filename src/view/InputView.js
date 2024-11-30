import { Console } from '@woowacourse/mission-utils';

import Validator from '../utils/Validator.js';
import { CAR_NAME_INPUT_TEXT, TRY_COUNT_INPUT_TEXT } from '../constants/constants.js';

const InputView = {
  async readCarNameInput() {
    const carNameInput = await Console.readLineAsync(CAR_NAME_INPUT_TEXT);
    Validator.validateCarNameInput(carNameInput);
    return carNameInput;
  },

  async readTryCount() {
    const tryCountInput = await Console.readLineAsync(TRY_COUNT_INPUT_TEXT);
    Validator.validateIsNumber(tryCountInput);
    return Number(tryCountInput);
  },
};
export default InputView;
