import {createAll} from './data';
const companies = createAll();
// cleanConsole
// cleanConsole(4, example4(companies));
console.log('Example 4', example4(companies));
console.log('---- EXAMPLE 4 --- ', companies);

export function example4(companies) {
  return companies.map((company) => {
    const updateCompany = {...company};
    updateCompany.users.forEach((user) => user.company = updateCompany.name);
    return {...updateCompany};
  }).map((item) => item.users)
      .flat()
      .sort((a, b)=> b.age - a.age);
}

// -----------------------------------------------------------------------------
// INSTRUCCIONES EN ESPAÑOL

// Crear una función tomando como parámetro la variable "companies" y agrupando
// todos los "users" de todas las "companies" en una sola tabla. Cada "user"
// debe tener un nuevo atributo "company" que tenga como valor el nombre de la
// dicha "company". Los "users" deben ordenarse de acuerdo con sus edad
// (de mayor a menor).


// -----------------------------------------------------------------------------
// INSTRUCTIONS IN ENGLISH

// Create a function taking as parameter the "companies" variable and grouping
// all "users" of all "companies" in a single table. Each "user"
// must have a new attribute "company" having for value the name of the "company"
// to which it belongs. The "users" must be sorted according to their
// age (from oldest to youngest)
