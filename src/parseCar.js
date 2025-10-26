import { checkCarNames } from "./checkInput.js";

export const parseCar = (car_str) => {
  const car_names = car_str.split(",");

  checkCarNames(car_names);

  return createCarObj(car_names);
};

const createCarObj = (car_names) => {
  return car_names.map((element) => ({ car_name: element, step: 0 }));
};
