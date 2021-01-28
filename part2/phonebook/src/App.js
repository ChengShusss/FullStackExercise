import React, { useState } from "react";
import Filter from "./components/Filter";
import Numbers from "./components/Numbers";
import PersonForm from "./components/PersonForm";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456" },
    { name: "Ada Lovelace", number: "39-44-5323523" },
    { name: "Dan Abramov", number: "12-43-234345" },
    { name: "Mary Poppendieck", number: "39-23-6423122" },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");

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

    if (persons.map((person) => person.name).indexOf(newName) !== -1) {
      alert(`${newName} is already added to phonebook`);
    } else {
      const personObject = {
        name: newName,
        number: newNumber,
      };
      setPersons(persons.concat(personObject));
      setNewName("");
      setNewNumber("");
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter filter={filter} onChange={handleFilter} />
      <h2>add a new</h2>

      <PersonForm addPerson={addPerson} newName={newName} newNumber={newNumber} handleNewName={handleNewName} handleNewNumber={handleNewNumber} />

      <h2>Numbers</h2>

      <Numbers persons={persons} filterString={filter}/>

    </div>
  );
};

export default App;
