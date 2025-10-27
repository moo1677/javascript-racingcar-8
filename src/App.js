import { Console } from "@woowacourse/mission-utils";
import input from "./input.js";
import { parseCar } from "./parseCar.js";
import { checkNumRace } from "./checkInput.js";
import { runRacingGame } from "./moveCar.js";
import { printWinner } from "./printWinner.js";

class App {
  async run() {
    try {
      let cars = await input.carStr();
      const carArray = parseCar(cars);

      const totalAttempts = await input.numRace();
      checkNumRace(totalAttempts);

      let stepMax = runRacingGame(carArray, totalAttempts);
      printWinner(carArray, stepMax);
    } catch (error) {
      Console.print(`[ERROR] ${error.message}`);
      throw new Error("[ERROR]");
    }
  }
}
export default App;
