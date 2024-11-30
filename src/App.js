import Input from "./Input.js";
import InputValidator from "./InputValidator.js";
import Car from "./Car.js";
import Winner from "./Winner.js";
import Output from "./Output.js";
import splitCarName from "./utils/splitCarName.js";

class App {
  async run() {
    const carNames = await Input.getCarName();
    const splittedCarNames = splitCarName(carNames);
    InputValidator.validateCarName(splittedCarNames);

    const tryCount = await Input.getTryCount();
    InputValidator.validateTryCount(tryCount);

    const car = new Car(splittedCarNames);
    const raceResult = car.startRace(tryCount);
    const winnerList = Winner.determineWinner(raceResult);
    Output.printWinner(winnerList);
  }
}

export default App;
