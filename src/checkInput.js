export const checkCarNames = (names) => {
  names.forEach((name) => {
    if (!name) throw new Error("유효한 자동차의 이름을 입력해주세요");
    if (name.length > 6 || name.length < 1)
      throw new Error("자동차 이름은 1자 이상 6자 이하입니다.");
  });
};

export const checkNumRace = (num) => {
  if (num < 1 || !num) throw new Error("1 이상의 숫자를 입력해주세요");
};
