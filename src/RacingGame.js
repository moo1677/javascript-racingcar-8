import { Console, MissionUtils } from "@woowacourse/mission-utils";

class RacingGame {
  constructor(carArray, totalAttempts) {
    this.carArray = carArray;
    this.totalAttempts = totalAttempts;
    this.stepMax = 0;
  }
  run() {
    Console.print("\n실행 결과");
    for (let i = 0; i < this.totalAttempts; i++) {
      this.moveCar();
      this.printCarMove();
    }
    return this.stepMax;
  }
  moveCar() {
    this.carArray.forEach((car) => {
      this.updateStep(car);
    });
  }
  updateStep(car) {
    if (this.decideRandomly()) car.step++;
    this.decideMaxStep(car.step);
  }
  decideRandomly() {
    return MissionUtils.Random.pickNumberInRange(0, 9) >= 4;
  }
  decideMaxStep(step) {
    if (this.stepMax < step) this.stepMax = step;
  }
  printCarMove() {
    this.carArray.forEach((car) => {
      Console.print(`${car.name} : ${"-".repeat(car.step)}`);
    });
    Console.print("");
  }
}
export default RacingGame;
