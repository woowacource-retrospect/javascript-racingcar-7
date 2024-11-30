import CarController from './controller/CarController.js';

class App {
  async run() {
    const carController = new CarController();
    await carController.start();
  }
}

export default App;
