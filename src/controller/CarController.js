import { Random } from '@woowacourse/mission-utils';
import Car from '../model/Car.js';
import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';

class CarController {
  async start() {
    const carNameInput = await InputView.readCarNameInput();
    const cars = this.extractCarName(carNameInput);
    const tryCount = await InputView.readTryCount();
    this.race(cars, tryCount);
    const winnerCars = this.extractWinner(cars);
    console.log(winnerCars);
    OutputView.printWinnerCars(winnerCars.map((car) => car).join(','));
  }

  extractCarName(carNameInput) {
    return carNameInput.split(',').map((carName) => (
      new Car(carName)
    ));
  }

  race(cars, tryCount) {
    OutputView.printResultText();
    for (let i = 0; i < tryCount; i++) {
      cars.forEach((car) => {
        const randomNumber = Random.pickNumberInRange(0, 9);
        car.runOrStay(randomNumber);
        OutputView.printRacingProcess(car.name, '-'.repeat(car.count));
      });
    }
  }

  extractWinner(cars) {
    let maxCount = 0;
    cars.forEach((car) => {
      maxCount = Math.max(maxCount, car.count);
    });
    const winnerCars = cars.filter((car) => car.count === maxCount);
    return winnerCars.map((car) => car.name);
  }
}

export default CarController;
