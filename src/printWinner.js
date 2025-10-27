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
    const winner_array = [];
    this.carArray.map((car) => winner_array.push(this.selectWinner(car)));
    this.winner = winner_array.filter(Boolean);
  }
  selectWinner(car) {
    if (car.step === this.stepMax) return car.name;
  }
  winnerPrint() {
    Console.print(`최종 우승자 : ${this.winner.join(", ")}`);
  }
}
export default PrintWinner;
