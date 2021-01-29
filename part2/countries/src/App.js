import React, { useState, useEffect } from "react";
import axios from "axios";

const Country = ({ country }) => {
  return (
    <div>
      <h2>{country.name}</h2>
      <p>capital {country.capital}</p>
      <p>population {country.population}</p>
      <h3>Languages</h3>
      <ul>
        {[
          country.languages.map((language) => {
            return <li key={language.name}>{language.name}</li>;
          }),
        ]}
      </ul>
      <img src={country.flag} width="200px" alt="Flag img" />
    </div>
  );
};

const CountryItem = ({country, setList}) => {
  const selectOne = () => {
    setList([country]);
  }
  return (
    <div>
      {country.name} <button onClick={selectOne}>Show more</button>
    </div>
  )
}

const List = ({ countries, setList }) => {
  if (countries.length === 0) {
    return <div>Waiting for data request Or no satisfied result.</div>;
  } else if (countries.length === 1) {
    return <Country country={countries[0]} />;
  } else if (countries.length <= 10) {
    return (
      <div>
        {[
          countries.map((country) => {
            // return <p key={country.name}>{country.name}</p>;
            return <CountryItem country={country} setList={setList}/>;
          }),
        ]}
      </div>
    );
  } else {
    return <div>Too many matches, specify another filter</div>;
  }
};

function App() {
  const [countries, setCountries] = useState([]);
  const [filterString, setFilterString] = useState("");
  const [currentList, setCurrentList] = useState([]);

  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all").then((response) => {
      setCountries(response.data);
      setCurrentList(response.data);
      console.log("Received all countries data.");
    });
  }, []);

  const handleNewFilter = (event) => {
    setFilterString(event.target.value);
    setCurrentList(
      countries.filter(
        (country) =>
          country.name.toLowerCase().match(filterString.toLowerCase()) !== null
      )
    );
  };

  return (
    <div>
      <div>
        find countries <input value={filterString} onChange={handleNewFilter} />
      </div>
      <List countries={currentList} setList={setCurrentList}/>
    </div>
  );
}

export default App;
