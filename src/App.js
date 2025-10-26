import { Console, MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    try {
      const car_array = [];
      let car_str = await inputCarStr();
      initRacingGame(car_str, car_array);
      const num_race = await inputNumRace();
      runRacingGame(car_array, num_race);
    } catch (error) {
      Console.print(`[ERROR] ${error.message}`);
      throw new Error("[ERROR]");
    }
  }
}

/* 입출력 및 문자열을 객체 배열로 변환 */
const inputCarStr = () => {
  return Console.readLineAsync(
    "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
  );
};
const inputNumRace = () => {
  return Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");
};
const initRacingGame = (car_str, car_array) => {
  car_str = splitCarArray(car_str);
  createCarObj(car_str, car_array);
};
const splitCarArray = (car_str) => {
  car_str = car_str.split(",");
  checkCarNameLength(car_str);
  return car_str;
};
const createCarObj = (car_str, car_array) => {
  car_str.forEach((element) => {
    car_array.push({ car_name: element, step: 0 });
  });
};
const checkCarNameLength = (car_str) => {
  car_str.forEach((e) => {
    if (!e) throw new Error("유효한 자동차의 이름을 입력해주세요");
    if (e.length > 6 || e.length < 1)
      throw new Error("자동차 이름은 1자 이상 6자 이하입니다.");
  });
};
/* 레이싱게임 실행 */
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

/* 실행 과정 출력 */
const printCarMove = (car_array) => {
  car_array.forEach((e) => {
    Console.print(`${e.car_name} : ${"-".repeat(e.step)}`);
  });
  Console.print("\n");
};

/* 우승자 출력 */
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
