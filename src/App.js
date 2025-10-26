import { Console } from "@woowacourse/mission-utils";
import input from "./input.js";
import { parseCar } from "./parseCar.js";
import { checkNumRace } from "./checkInput.js";
import { runRacingGame } from "./moveCar.js";
import { printWinner } from "./printWinner.js";

class App {
  async run() {
    try {
      let car_str = await input.carStr();
      const car_array = parseCar(car_str);

      const num_race = await input.numRace();
      checkNumRace(num_race);

      const step_max = runRacingGame(car_array, num_race);
      printWinner(car_array, step_max);
    } catch (error) {
      Console.print(`[ERROR] ${error.message}`);
      throw new Error("[ERROR]");
    }
  }
}
export default App;
