import {createAll} from './data';
import {example4} from './example-4';
const companies = createAll();
// cleanConsole,
// cleanConsole(5, companies);
console.log('Example 5', example5(companies));
console.log('---- EXAMPLE 5 --- ', companies);

export function example5(companies) {
  const object = {};
  object.size = example4(companies).length;
  object.average = example4(companies).reduce((sum, user) => sum + user.age, 0) / object.size;
  object.hasCar = example4(companies).filter((user) => user.car).length;
  object.averageWithCar = example4(companies).filter((user) => user.car)
      .reduce((sum, user) => sum + user.age, 0) / object.size;
  return object;
};

// -----------------------------------------------------------------------------
// INSTRUCCIONES EN ESPAÑOL

// Use la función creada en el ejemplo 4 para crear una nueva función tomando
// como parámetro la variable "companies" y devuelve un nuevo objeto con los
// siguientes atributos:
//     'size' => total de "users"
//     'average' => edad promedio de "users"
//     'hasCar' => total de "users" propietarios de un carro
//     'averageWithCar' => edad promedio de los "users" con un carro

// -----------------------------------------------------------------------------
// INSTRUCTIONS IN ENGLISH

// Use the function created in example 4 to create a
// new function taking as parameter the "companies" variable and returning
// a new object with the following attributes:
//     'size' => number of "users"
//     'average' => average age of "users"
//     'hasCar' => number of "users" owning a car
//     'averageWithCar' => average age of users with a car.
