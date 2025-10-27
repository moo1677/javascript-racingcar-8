import { checkCarNames } from "./checkInput.js";

export const parseCar = (cars) => {
  const carNames = cars.split(",");

  checkCarNames(carNames);

  return createCarObj(carNames);
};

const createCarObj = (carNames) => {
  return carNames.map((element) => ({ name: element, step: 0 }));
};
