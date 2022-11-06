import {createAll, cleanConsole} from './data';
const companies = createAll();

cleanConsole(1, example1(companies));

console.log('---- EXAMPLE 1 --- ', companies);

function example1(array) {
  return array.map((company) => {
    const updateCompany = {...company};
    updateCompany.name = updateCompany.name[0].toUpperCase() + updateCompany.name.slice(1);
    updateCompany.users = updateCompany.users.map((user) => {
      const updateUser = {...user};
      Object.entries({...updateUser}).forEach(([key, value])=>{
        if (value === undefined) {
          updateUser[key] = '';
        };
        if (typeof value === 'string') {
          updateUser[key] = updateUser[key][0].toUpperCase() + updateUser[key].slice(1);
        };
      });
      return {...updateUser};
    }).sort((a, b) => a.firstName.localeCompare(b.firstName));
    return {...updateCompany};
  }).sort((a, b) => b.usersLength - a.usersLength);
}
// -----------------------------------------------------------------------------
// INSTRUCCIONES EN ESPAÑOL

// Crear una función tomando la variable "companies" como parámetro y reemplazando
// todos los valores "undefined" en "usuarios" por un string vacío.
// El nombre de cada "company" debe tener una letra mayúscula al principio, así como
// el apellido y el nombre de cada "user".
// Las "companies" deben ordenarse por su total de "user" (orden decreciente)
// y los "users" de cada "company" deben aparecer en orden alfabético.
