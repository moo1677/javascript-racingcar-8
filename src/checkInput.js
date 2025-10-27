import { Console } from "@woowacourse/mission-utils";

const checkInput = {
  carNames(names) {
    if (names.length === 1 && names[0] == "")
      throw new Error("문자를 입력해주세요");
    if (names.length <= 1)
      throw new Error("경주를 하려면 2대 이상의 자동차가 필요합니다");
    names.forEach((name) => {
      if (!name) throw new Error("유효한 자동차의 이름을 입력해주세요");
      if (name.length >= 6 || name.length < 1)
        throw new Error("자동차 이름은 1자 이상 5자 이하입니다");
    });
  },
  numRace(num) {
    if (isNaN(num)) throw new Error("유효한 숫자를 입력해주세요");
    if (!Number.isInteger(num)) throw new Error("정수를 입력해주세요");
    if (num < 1) throw new Error("1 이상의 숫자를 입력해주세요");
  },
};
export default checkInput;
