import { Console } from "@woowacourse/mission-utils";
import { IO_MESSAGE } from "./constants/constants.js";

class Input {
  static async getCarName() {
    return await Console.readLineAsync(IO_MESSAGE.CARNAME);
  }

  static async getTryCount() {
    return await Console.readLineAsync(IO_MESSAGE.TRYCOUNT);
  }
}
export default Input;
