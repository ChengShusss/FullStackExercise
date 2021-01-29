import React, { useState, useEffect } from "react";
import Filter from "./components/Filter";
import Numbers from "./components/Numbers";
import PersonForm from "./components/PersonForm";
import personServices from "./services/persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    personServices.getAllPerson().then((persons) => {
      setPersons(persons);
    });
  }, []);

  const handleNewName = (event) => {
    setNewName(event.target.value);
  };

  const handleNewNumber = (event) => {
    setNewNumber(event.target.value);
  };

  const handleFilter = (event) => {
    setFilter(event.target.value);
  };

  const addPerson = (event) => {
    event.preventDefault();

    let existPerson = persons.find(person => {return person.name === newName})

    if (existPerson !== undefined) {
      const result = window.confirm(
        `${newName} is already added to phonebook, replace the old number with a new one?`
      );
      if (result) {
        existPerson = {...existPerson, number:newNumber}
        personServices.
          updatePerson(existPerson.id, existPerson)
          .then(returnPerson => {
            setPersons(persons.map(
              person => person.id !== existPerson.id ? person : returnPerson))})
      }
    } else {
      const personObject = {
        name: newName,
        number: newNumber,
      };

      personServices.createPerson(personObject).then((returnPerson) => {
        setPersons(persons.concat(returnPerson));
        setNewName("");
        setNewNumber("");
      });
    }
  };

  const deletePerson = (person) => {
    console.log("to delete id " + person.id);
    const result = window.confirm(
      `Are you sure to delete the phone of ${person.name}`
    );
    if (result) {
      const delResult = personServices.deletePerson(person.id);
      console.log("delete result: " + delResult)
      setPersons(persons.filter(personItem => personItem.id !==person.id))
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter filter={filter} onChange={handleFilter} />
      <h2>add a new</h2>

      <PersonForm
        addPerson={addPerson}
        newName={newName}
        newNumber={newNumber}
        handleNewName={handleNewName}
        handleNewNumber={handleNewNumber}
      />

      <h2>Numbers</h2>

      <Numbers
        persons={persons}
        filterString={filter}
        deletePerson={deletePerson}
      />
    </div>
  );
};

export default App;
