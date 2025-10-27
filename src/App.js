import { Console } from "@woowacourse/mission-utils";
import input from "./input.js";
import { parseCar } from "./parseCar.js";
import checkInput from "./checkInput.js";
import RacingGame from "./RacingGame.js";
import PrintWinner from "./PrintWinner.js";

class App {
  async run() {
    try {
      let cars = await input.carStr();
      const carArray = parseCar(cars);

      const totalAttempts = await input.numRace();
      checkInput.numRace(totalAttempts);

      const game = new RacingGame(carArray, totalAttempts);
      const maxStep = game.run();
      const printWinner = new PrintWinner(carArray, maxStep);
      printWinner.run();
    } catch (error) {
      throw new Error(`[ERROR] ${error.message}`);
    }
  }
}
export default App;
