import { form, sense, category } from "./variables.js";
import { UI, UIcarSense } from "./clases.js";

export let cars = [];
let recaudado = [];
let car = {};
let vehiculos;

function errorMessage() {
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: "Faltan completar datos",
  });
}

export function validateEntry(e) {
  e.preventDefault();

  if (Number(sense.value) === 0 || Number(category.value) === 0) {
    errorMessage();
  } else {
    car = {
      sense: Number(sense.value),
      category: Number(category.value),
    };
    cars = [...cars, car];

    console.log(cars);

    resetFormulario();
  }
}

export function getPrint(e) {
  switch (e) {
    case "1":
      amountBothSense(cars);
      break;

    case "2":
      amountOnlySense(cars);
      break;

    case "3":
      averageCategory();
      break;

    default:
      break;
  }
}

function resetFormulario() {
  form.reset();
}

export function amountBothSense(cars) {
  let sumCat1 = 0,
    sumCat2 = 0,
    sumCat3 = 0;
  vehiculos = cars.filter((car) => {
    switch (car.category) {
      case 1:
        if (car.sense === 1) {
          sumCat1++;
        } else {
          sumCat1++;
        }
        break;
      case 2:
        if (car.sense === 1) {
          sumCat2++;
        } else {
          sumCat2++;
        }
        break;

      case 3:
        if (car.sense === 1) {
          sumCat3++;
        } else {
          sumCat3++;
        }
        break;

      default:
        break;
    }
  });

  const ui = new UI(sumCat1, sumCat2, sumCat3);
  ui.printAmountBothTotal();
  

  //retornamos la suma para sacar el promedio de recaudo de la categoria 1
  return sumCat1;
}

function amountOnlySense(cars) {
  let sumCat1Sense1 = 0,
    sumCat1Sense2 = 0,
    sumCat2Sense1 = 0,
    sumCat2Sense2 = 0,
    sumCat3Sense1 = 0,
    sumCat3Sense2 = 0;

  vehiculos = cars.filter((car) => {
    switch (car.category) {
      case 1:
        if (car.sense === 1) {
          sumCat1Sense1++;
        } else {
          sumCat1Sense2++;
        }
        break;
      case 2:
        if (car.sense === 1) {
          sumCat2Sense1++;
        } else {
          sumCat2Sense2++;
        }
        break;

      case 3:
        if (car.sense === 1) {
          sumCat3Sense1++;
        } else {
          sumCat3Sense2++;
        }
        break;

      default:
        break;
    }
  });

  const uiOnlySense = new UIcarSense(
    sumCat1Sense1,
    sumCat1Sense2,
    sumCat2Sense1,
    sumCat2Sense2,
    sumCat3Sense1,
    sumCat3Sense2
  );

  uiOnlySense.printAmountTotal();
}
