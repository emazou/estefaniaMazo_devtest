import {cleanConsole, createAll} from './data';
import {example1} from './example-1';
const companies = createAll();

cleanConsole(3, example3(example1(companies)));

console.log('---- EXAMPLE 3 --- values before your modifications  :', example3(example1(companies)));
console.log('---- EXAMPLE 3 --- ', companies);

export function example3(companies) {
  const patron = /^[A-Z]/;
  return companies.every((company) => {
    return patron.test(company.name) && (company.users.every((user) => (
      patron.test(user.firstName) && patron.test(user.lastName)
    )));
  });
}

// -----------------------------------------------------------------------------
// INSTRUCCIONES EN ESPAÑOL

// Cree una función tomando la variable "companies" como parámetro y devolviendo
// un booleano que valida que todos los nombres de las empresas y los atributos
// "firstName" y "lastName" de "users" están en mayúsculas.
// Debes probar la operación de esta función importando la función creada
// en el "example-1.js".

// -----------------------------------------------------------------------------
// INSTRUCTIONS IN ENGLISH

// Create a function taking the "companies" variable as a parameter and returning
// a boolean validating that all the names of the companies and the attributes "firstName"
// and "lastName" of "users" are capitalized. You must test the operation
// of this function by importing the function created for "example-1.js"
