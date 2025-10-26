import { Console, MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    try {
      let car_str = await inputCarStr();
      const num_race = await inputNumRace();
      const car_array = [];
      initRacingGame(car_str, car_array);
      runRacingGame(car_array, num_race);
    } catch {}
  }
}
const initRacingGame = (car_str, car_array) => {
  car_str = splitCarArray(car_str);
  createCarObj(car_str, car_array);
};

const inputCarStr = () => {
  return Console.readLineAsync(
    "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
  );
};
const inputNumRace = () => {
  return Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");
};

const splitCarArray = (car_str) => {
  car_str = car_str.split(",");
  return car_str;
};
const createCarObj = (car_str, car_array) => {
  car_str.forEach((element) => {
    car_array.push({ car_name: element, step: 0 });
  });
};
const runRacingGame = (car_array, num_race) => {
  let step_max = 1;
  const winner = [];
  Console.print("\n실행 결과");
  startRace(car_array, num_race, step_max);
  winner.push(...decideWinner(car_array, step_max));
  winnerPrint(winner);
};
const startRace = (car_array, num_race, step_max) => {
  for (let i = 0; i < num_race; i++) {
    step_max = moveCar(car_array, step_max);
    printCarMove(car_array);
  }
};
const moveCar = (car_array, step_max) => {
  car_array.forEach((e) => {
    if (decideRandomly()) {
      e.step++;
    }
    step_max = decideMaxStep(step_max, e.step);
  });
  return step_max;
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
export default App;
