import React from "react";

const Person = ({ person, deletePerson }) => (
  <tr>
    <td>{person.name}</td>
    <td>{person.number}</td>
    <td><button onClick={() => deletePerson(person)}>delete</button></td>
  </tr>
);

const Numbers = ({ persons, filterString, deletePerson }) => (
  <table>
    <tbody>
      {persons
        .filter(
          (person) => person.name.toLowerCase().match(filterString) !== null
        )
        .map((person) => (
          <Person person={person} key={person.name} deletePerson={deletePerson} />
        ))}
    </tbody>
  </table>
);

export default Numbers;
