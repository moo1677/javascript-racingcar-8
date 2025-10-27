import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();

  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("자동차 경주", () => {
  test("기능 테스트", async () => {
    // given
    const MOVING_FORWARD = 4;
    const STOP = 3;
    const inputs = ["pobi,woni", "1"];
    const logs = ["pobi : -", "woni : ", "최종 우승자 : pobi"];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([MOVING_FORWARD, STOP]);

    // when
    const app = new App();
    await app.run();

    // then
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test("예외 테스트 1: 자동차가 1대일 때", async () => {
    const inputs = ["pobi"];
    mockQuestions(inputs);
    const app = new App();

    await expect(app.run()).rejects.toThrow(
      "[ERROR] 경주를 하려면 2대 이상의 자동차가 필요합니다"
    );
  });
  test("예외 테스트 2: 자동차 이름에 6자 이상이 입력되었을 때", async () => {
    const inputs = ["pobi,javaji"];
    mockQuestions(inputs);
    const app = new App();

    await expect(app.run()).rejects.toThrow(
      "[ERROR] 자동차 이름은 1자 이상 5자 이하입니다"
    );
  });
  test("예외 테스트 3-1: 이름에 공백 혹은 쉼표만 입력되었을 때", async () => {
    const inputs = [""];
    mockQuestions(inputs);
    const app = new App();

    await expect(app.run()).rejects.toThrow("[ERROR] 문자를 입력해주세요");
  });
  test("예외 테스트 3-2: 이름에 공백 혹은 쉼표만 입력되었을 때", async () => {
    const inputs = [","];
    mockQuestions(inputs);
    const app = new App();

    await expect(app.run()).rejects.toThrow(
      "[ERROR] 유효한 자동차의 이름을 입력해주세요"
    );
  });
  test("예외 테스트 4: 쉼표 사이가 공백일 때", async () => {
    const inputs = ["a,,b"];
    mockQuestions(inputs);
    const app = new App();

    await expect(app.run()).rejects.toThrow(
      "[ERROR] 유효한 자동차의 이름을 입력해주세요"
    );
  });
  test("예외 테스트 5: 시도할 횟수가 0 또는 공백일 때", async () => {
    const inputs = ["a,b,c", ""];
    mockQuestions(inputs);
    const app = new App();

    await expect(app.run()).rejects.toThrow(
      "[ERROR] 1 이상의 숫자를 입력해주세요"
    );
  });
  test("예외 테스트 6: 시도할 횟수에 문자가 들어왔을 때", async () => {
    const inputs = ["a,b,c", "a"];
    mockQuestions(inputs);
    const app = new App();

    await expect(app.run()).rejects.toThrow(
      "[ERROR] 유효한 숫자를 입력해주세요"
    );
  });
  test("예외 테스트 7: 시도할 횟수에 정수가 아닌 숫자가 들어왔을 때", async () => {
    const inputs = ["a,b,c", "1.5"];
    mockQuestions(inputs);
    const app = new App();

    await expect(app.run()).rejects.toThrow("[ERROR] 정수를 입력해주세요");
  });
});
