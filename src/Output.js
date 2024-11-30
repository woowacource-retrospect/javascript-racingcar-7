import { Console } from "@woowacourse/mission-utils";
import { IO_MESSAGE, SPECIAL_CHARACTERS } from "./constants/constants.js";

class Output {
  static printMessage(message) {
    Console.print(message);
  }
  static printResult(carPosition) {
    for (const [carName, position] of Object.entries(carPosition)) {
      Console.print(`${carName} ${SPECIAL_CHARACTERS.COLON} ${position}`);
    }
    Console.print(SPECIAL_CHARACTERS.EMPTY_STRING);
  }

  static printWinner(winnerList) {
    const winners = winnerList.join(`${SPECIAL_CHARACTERS.COMMA} `);

    Console.print(
      `${IO_MESSAGE.PRINT_WINNER} ${SPECIAL_CHARACTERS.COLON} ${winners}`
    );
  }
}
export default Output;
