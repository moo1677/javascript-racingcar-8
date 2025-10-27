import { Console } from "@woowacourse/mission-utils";

export const printWinner = (carArray, stepMax) => {
  const winner = decideWinner(carArray, stepMax);
  winnerPrint(winner);
};
const decideWinner = (carArray, stepMax) => {
  const winner_array = [];
  carArray.map((e) => winner_array.push(selectWinner(e, stepMax)));
  return winner_array.filter(Boolean);
};
const selectWinner = (car, stepMax) => {
  if (car.step === stepMax) return car.name;
};
const winnerPrint = (winner) => {
  Console.print(`최종 우승자 : ${winner.join(", ")}`);
};
