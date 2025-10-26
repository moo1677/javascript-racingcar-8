import { Console, MissionUtils } from "@woowacourse/mission-utils";

export const runRacingGame = (car_array, num_race) => {
  let step_max = 1;
  return startRace(car_array, num_race, step_max);
};
const startRace = (car_array, num_race, step_max) => {
  for (let i = 0; i < num_race; i++) {
    step_max = moveCar(car_array, step_max);
    printCarMove(car_array);
  }
  return step_max;
};
const moveCar = (car_array, step_max) => {
  car_array.forEach((e) => {
    step_max = updateStep(e, step_max);
  });
  return step_max;
};
const updateStep = (car, step_max) => {
  if (decideRandomly()) car.step++;
  return decideMaxStep(step_max, car.step);
};
const decideRandomly = () => {
  const random_num = MissionUtils.Random.pickNumberInRange(0, 9);
  return random_num >= 4;
};
const decideMaxStep = (max, step) => {
  if (max < step) return step;
  return max;
};
const printCarMove = (car_array) => {
  car_array.forEach((e) => {
    Console.print(`${e.car_name} : ${"-".repeat(e.step)}`);
  });
  Console.print("\n");
};
