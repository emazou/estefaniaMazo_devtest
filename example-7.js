import {cleanConsole, createAll} from './data';

const companies = createAll();
const update = {
  isOpen: false,
  name: 'New Name',
  usersLength: 54,
};
const newUser = {
  firstName: 'Juan',
  lastName: 'Delgado',
  age: 35,
  car: true,
};
const updateUser = {
  firstName: 'Estefania',
  lastName: 'Mazo',
  age: 21,
  car: false,
};

cleanConsole(7, companies);
console.log('---- EXAMPLE 7 part 1 --- ', example7Part1(6));
console.log('---- EXAMPLE 7 part 2 --- ', example7Part2(4));
console.log('---- EXAMPLE 7 part 3 --- ', example7Part3(3));
console.log('---- EXAMPLE 7 part 4 --- ', example7Part4(5, newUser));
console.log('---- EXAMPLE 7 part 5 --- ', example7Part5(1, update));
console.log('---- EXAMPLE 7 part 6 --- ', example7Part6(2, 10));
console.log('---- EXAMPLE 7 part 7 --- ', example7Part7(7, 3));
console.log('---- EXAMPLE 7 part 8 --- ', example7Part8(0, 1));
console.log('---- EXAMPLE 7 part 9 --- ', example7Part9(1, 2, 3));
// -----------------------------------------------------------------------------
// INSTRUCCIONES EN ESPAÑOL

// Parte 1: Crear una función tomando como parámetro un "id" de "company" y
// devolviendo el nombre de esta "company".

function example7Part1(id) {
  const result = companies.find((company) => company.id === id);
  return result ? result.name : 'No se encontró la compañía';
}
// Parte 2: Crear una función tomando como parámetro un "id" de "company" y
// quitando la "company" de la lista.

function example7Part2(id) {
  return companies.filter((company) => company.id !== id);
}
// Parte 3: Crear una función tomando como parámetro un "id" de "company" y
// permitiendo hacer un PATCH (como con una llamada HTTP) en todos los
// atributos de esta "company" excepto en el atributo "users".

function example7Part3(id) {
  const {isOpen, name, usersLength} = update;
  const index = companies.findIndex((company) => company.id === id);
  companies[index].isOpen = isOpen;
  companies[index].name = name;
  companies[index].usersLength = usersLength;
  return companies;
}
// Parte 4: Crear una función tomando como parámetro un "id" de "company" y un
// nuevo "user" cuyo el apelido es "Delgado", el nombre "Juan", de 35 años y
// dueño de un carro. El nuevo "user" debe agregarse a la lista de "users" de este
// "company" y tener un "id" generado automáticamente. La función también debe modificar
// el atributo "usersLength" de "company".

function example7Part4(id, user) {
  const index = companies.findIndex((company) => company.id === id);
  companies[index].users.push({...user, id: Math.floor(100 + Math.random() * (200 - 100))});
  companies[index].usersLength = companies[index].users.length;
  return companies;
}

// Parte 5: Crear una función tomando como parámetro un "id" de "company" y
// permitiendo hacer un PUT (como con una llamada HTTP) en esta "company" excepto
// en el atributo "users".

function example7Part5(id) {
  const {isOpen, name, usersLength} = update;
  const index = companies.findIndex((company) => company.id === id);
  if (index != -1) {
    companies[index] = {
      id,
      isOpen,
      name,
      usersLength,
      users: companies[index].users,
    };
  } else {
    return 'No se encontró la compañía';
  }
  return companies;
}

// Parte 6: Crear una función tomando como parámetro un "id" de "company" y un
// "id" de "user". La función debe quitar este "user" de la lista de "users"
// de "company" y cambiar el atributo "usersLength" de "company".

function example7Part6(idCompany, idUser) {
  const index = companies.findIndex((company) => company.id === idCompany);
  if (index != -1) {
    companies[index].users = companies[index].users.filter((user) => user.id != idUser);
    companies[index].usersLength = companies[index].users.length;
  } else {
    return 'No se encontró la compañía';
  }
  return companies;
}

// Parte 7: Crear una función tomando como parámetro un "id" de "company" y un
// "id" de "user" que permite hacer un PATCH (como con una llamada HTTP) en este
// "user".

function example7Part7(idCompany, idUser) {
  const indexCompany = companies.findIndex((company) => company.id === idCompany);
  if (indexCompany != -1) {
    const indexUser = companies[indexCompany].users.findIndex((user) => user.id === idUser);
    if (indexUser != -1) {
      companies[indexCompany].users[indexUser].firstName = 'Nombre Modificado PATCH';
    } else {
      return 'Usuario no encontrado';
    }
  } else {
    return 'Compañía no encontrada';
  }
  return companies;
}

// Parte 8: Crear una función tomando como parámetro un "id" de "company" y un
// "id" de "user" que permite hacer un PUT (como con una llamada HTTP) en este
// "user".

function example7Part8(idCompany, idUser) {
  const {lastName, firstName, age, car} = updateUser;
  const indexCompany = companies.findIndex((company) => company.id === idCompany);
  if (indexCompany != -1) {
    const indexUser = companies[indexCompany].users.findIndex((user) => user.id === idUser);
    if (indexUser != -1) {
      companies[indexCompany].users[indexUser] = {id: idUser, lastName, firstName, age, car};
    } else {
      return 'Usuario no encontrado';
    }
  } else {
    return 'Compañía no encontrada';
  }
  return companies;
}

// Parte 9: Crear una función tomando como parámetro dos "id" de "company" y
// un "id" de "user". La función debe permitir que el user sea transferido de la
// primera "company" a la segunda "company". El atributo "usersLength" de cada
// "company" debe actualizarse.

function example7Part9(idCompany1, idCompany2, idUser) {
  const indexCompany1 = companies.findIndex((company) => company.id === idCompany1);
  const indexCompany2 = companies.findIndex((company) => company.id === idCompany2);
  if (indexCompany1 != -1 && indexCompany2 != -1) {
    const indexUser = companies[indexCompany1].users.findIndex((user) => user.id === idUser);
    if (indexUser != -1) {
      companies[indexCompany2].users.push({...companies[indexCompany1].users[indexUser]});
      companies[indexCompany1].users.splice(indexUser, 1);
      companies[indexCompany1].usersLength = companies[indexCompany1].users.length;
      companies[indexCompany2].usersLength = companies[indexCompany2].users.length;
    } else {
      return 'No se encontró el usuario';
    }
  } else {
    return 'No se encontró la compañía';
  }
  return companies;
}

// -----------------------------------------------------------------------------
// INSTRUCTIONS IN ENGLISH

// Part 1: Create a function taking as parameter an "id" of "company" and
// returning the name of this "company".

// Part 2: Create a function taking as parameter an "id" of "company" and
// removing the "company" from the list.

// Part 3: Create a function taking as a parameter an "id" of "company" and
// allowing to make a PATCH (as with an HTTP call) on all
// attributes of this "company" except on the "users" attribute.

// Part 4: Create a function taking as parameter an "id" of "company" and a
// new "user" whose name is "Delgado", the first name "Juan", aged 35 and
// a car. The new "user" must be added to the "users" list of this
// "company" and have an automatically generated "id". The function must also modify
// the "usersLength" attribute of "company".

// Part 5: Create a function taking as parameter an "id" of "company" and
// allowing to make a PUT (as with an HTTP call) on this "company" except
// on the "users" attribute.

// Part 6: Create a function taking as a parameter an "id" of "company" and a
// "id" of "user". The function must remove this "user" from the list of "users"
// from "company" and change the attribute "usersLength" from "company".

// Part 7: Create a function taking as a parameter an "id" of "company" and a
// "id" of "user" allowing to make a PATCH (as with an HTTP call) on this
// "user".

// Part 8: Create a function taking as a parameter an "id" of "company" and a
// "id" of "user" allowing to make a PUT (as with an HTTP call) on this
// "user".

// Part 9: Create a function taking as parameter two "id" of "company" and
// an "id" of "user". The function must allow the user to be transferred as a parameter
// from the 1st "company" to the 2nd "company". The "usersLength" attribute of each
// "company" must be updated
