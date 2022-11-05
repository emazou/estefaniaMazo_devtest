import {createAll, cleanConsole} from './data';
const companies = createAll();

cleanConsole(1, firstExample(companies));

console.log('---- EXAMPLE 1 --- ', companies);


// -----------------------------------------------------------------------------
// INSTRUCCIONES EN ESPAÑOL

// Crear una función tomando la variable "companies" como parámetro y reemplazando
// todos los valores "undefined" en "usuarios" por un string vacío.
// El nombre de cada "company" debe tener una letra mayúscula al principio, así como
// el apellido y el nombre de cada "user".
// Las "companies" deben ordenarse por su total de "user" (orden decreciente)
// y los "users" de cada "company" deben aparecer en orden alfabético.

function firstExample(array) {
  return array.map((company) => {
    const updateCompany = {...company};
    updateCompany.name = capitalize(updateCompany.name);
    updateCompany.users = updateCompany.users.map((user) => {
      const updateUser = {...user};
      updateUser.firstName = updateName(updateUser.firstName);
      updateUser.lastName = updateName(updateUser.lastName);
      return {...updateUser};
    }).sort((a, b) => a.firstName.localeCompare(b.firstName));
    return {...updateCompany};
  }).sort((a, b) => b.usersLength - a.usersLength);
}

function capitalize(text) {
  return text[0].toUpperCase() + text.slice(1);
}
function updateName(name) {
  if (!name) {
    return '';
  } else {
    return capitalize(name);
  };
}
