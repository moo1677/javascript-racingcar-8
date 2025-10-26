import { Console, MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    const car_array = [];
    let car_str = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );
    const num_race = await Console.readLineAsync(
      "시도할 횟수는 몇 회인가요?\n"
    );
    car_str = car_str.split(",");
    car_str.forEach((element) => {
      car_array.push({ car_name: element, step: 0 });
    });
    runRacingGame(num_race, car_array);
  }
}
const runRacingGame = (num_race, car_array) => {
  Console.print("\n실행 결과");
  for (let i = 0; i < num_race; i++) {
    moveCar(car_array);
  }
};
const moveCar = (car_array) => {
  car_array.forEach((e) => {
    if (decideRandomly()) {
      e.step++;
    }
  });
};
const decideRandomly = () => {
  const random_num = MissionUtils.Random.pickNumberInRange(0, 9);
  return random_num >= 4;
};

export default App;
