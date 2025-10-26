import { Console } from "@woowacourse/mission-utils";

export const printWinner = (car_array, step_max) => {
  const winner = decideWinner(car_array, step_max);
  winnerPrint(winner);
};
const decideWinner = (car_array, step_max) => {
  const winner_array = [];
  car_array.map((e) => winner_array.push(selectWinner(e, step_max)));
  return winner_array.filter(Boolean);
};
const selectWinner = (car, step_max) => {
  if (car.step === step_max) return car.car_name;
};
const winnerPrint = (winner) => {
  Console.print(`최종 우승자 : ${winner.join(", ")}`);
};
