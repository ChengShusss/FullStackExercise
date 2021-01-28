import React from "react";

const Person = ({ name, number }) => (
  <tr>
    <td>{name}</td>
    <td>{number}</td>
  </tr>
);

const Numbers = ({ persons, filterString }) => (
  <table>
    <tbody>
      {persons
        .filter(
          (person) => person.name.toLowerCase().match(filterString) !== null
        )
        .map((person) => (
          <Person name={person.name} number={person.number} key={person.name} />
        ))}
    </tbody>
  </table>
);

export default Numbers;
