import { Console } from "@woowacourse/mission-utils";

class PrintWinner {
  constructor(carArray, stepMax) {
    this.carArray = carArray;
    this.stepMax = stepMax;
    this.winner = [];
  }
  run() {
    this.decideWinner();
    this.winnerPrint();
  }
  decideWinner() {
    this.winner = this.carArray
      .filter((car) => car.step == this.stepMax)
      .map((car) => car.name);
  }
  selectWinner(car) {
    if (car.step === this.stepMax) return car.name;
  }
  winnerPrint() {
    Console.print(`최종 우승자 : ${this.winner.join(", ")}`);
  }
}
export default PrintWinner;
