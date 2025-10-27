import { Console, MissionUtils } from "@woowacourse/mission-utils";

export const runRacingGame = (carArray, totalAttempts) => {
  let stepMax = 1;
  return startRace(carArray, totalAttempts, stepMax);
};
const startRace = (carArray, totalAttempts, stepMax) => {
  for (let i = 0; i < totalAttempts; i++) {
    stepMax = moveCar(carArray, stepMax);
    printCarMove(carArray);
  }
  return stepMax;
};
const moveCar = (carArray, stepMax) => {
  carArray.forEach((e) => {
    stepMax = updateStep(e, stepMax);
  });
  return stepMax;
};
const updateStep = (car, stepMax) => {
  if (decideRandomly()) car.step++;
  return decideMaxStep(stepMax, car.step);
};
const decideRandomly = () => {
  return MissionUtils.Random.pickNumberInRange(0, 9) >= 4;
};
const decideMaxStep = (max, step) => {
  if (max < step) return step;
  return max;
};
const printCarMove = (carArray) => {
  carArray.forEach((e) => {
    Console.print(`${e.name} : ${"-".repeat(e.step)}`);
  });
  Console.print("\n");
};
