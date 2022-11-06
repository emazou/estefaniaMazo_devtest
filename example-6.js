import {cleanConsole, createAll} from './data';
import {example4} from './example-4';
const companies = createAll();
cleanConsole(6, companies);
console.log('---- EXAMPLE 6 --- ', companies);
console.log('Example 6', example6(companies));

export function example6(companies) {
  const object = {};
  example4(companies).forEach((user, index) => {
    if (!user.firstName && !user.lastName) {
      object[`user${index}Age${user.age}`] = user.car;
    } else if (!user.lastName) {
      object[`${user.firstName}${user.age}`] = user.car;
    } else if (!user.firstName) {
      object[`${user.lastName}${user.age}`] = user.car;
    } else if (!object[`${user.firstName}${user.firstName}${user.age}`]) {
      object[`${user.firstName}${user.firstName}${user.age}`] = user.car;
    } else if (!!object[`${user.firstName}${user.firstName}${user.age}`]) {
      object[`${user.firstName}${index}${user.firstName}${user.age}`] = user.car;
    }
  });
  return object;
}
// -----------------------------------------------------------------------------
// INSTRUCCIONES EN ESPAÑOL

// Cree una función tomando la variable "companies" como parámetro y devolviendo
// un nuevo objeto cuyos atributos son la concatenación del apelido, nombre y
// edad de cada "user". Cada atributo debe tener el valor de boolean "car".
// Ver ejemplo a continuación.

// -----------------------------------------------------------------------------
// INSTRUCTIONS IN ENGLISH

// Create a function taking the "companies" variable as a parameter and returning
// a new object whose attributes are the concatenation of the name, first name and
// the age of each user. Each attribute must have the value of boolean "car".
// See example below

const example = {
  johnDoe32: true,
  BernardoMinet45: false,
  alinaChef23: true,
};

console.log(example);
