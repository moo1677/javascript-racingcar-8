import { Console } from "@woowacourse/mission-utils";

const input = {
  async carStr() {
    return await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );
  },
  async numRace() {
    const stringNumber = await Console.readLineAsync(
      "시도할 횟수는 몇 회인가요?\n"
    );
    const result = Number(stringNumber);
    return result;
  },
};
export default input;
