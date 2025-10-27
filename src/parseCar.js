import checkInput from "./checkInput.js";

export const parseCar = (cars) => {
  const carNames = cars.split(",");

  checkInput.carNames(carNames);

  return createCarObj(carNames);
};

const createCarObj = (carNames) => {
  return carNames.map((element) => ({ name: element, step: 0 }));
};
