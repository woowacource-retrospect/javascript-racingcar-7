import { Console } from '@woowacourse/mission-utils';
import { PROCESS_RESULT_TEXT, RACING_PROCESS_TEXT, WINNER_CARS } from '../constants/constants.js';

const OutputView = {
  printResultText() {
    Console.print(PROCESS_RESULT_TEXT);
  },

  printRacingProcess(name, countText) {
    Console.print(RACING_PROCESS_TEXT(name, countText));
  },

  printWinnerCars(winnerCars) {
    Console.print(WINNER_CARS(winnerCars));
  },
};

export default OutputView;
