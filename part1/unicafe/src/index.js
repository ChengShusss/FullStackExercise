import React, { useState } from "react";
import ReactDOM from "react-dom";

const CustomedButton = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const Statistic = ({ name, count }) => (
  <tr>
    <td>{name}</td>
    <td>{count}</td>
  </tr>
);

const Feedback = ({ addGood, addNeutral, addBad }) => (
  <div>
    <h1>give feedback</h1>
    <div>
      <CustomedButton handleClick={addGood} text="good" />
      <CustomedButton handleClick={addNeutral} text="neutral" />
      <CustomedButton handleClick={addBad} text="bad" />
    </div>
  </div>
);

const Statistics = ({ good, neutral, bad }) => {
  if (good + neutral + bad === 0) {
    return (
      <div>
        <h1>statistics</h1>
        <div>No feedback given</div>
      </div>
    );
  }
  return (
    <div>
      <h1>statistics</h1>
      <table>
        <tbody>
          <Statistic name="good" count={good} />
          <Statistic name="neural" count={neutral} />
          <Statistic name="bad" count={bad} />
          <Statistic name="all" count={good + neutral + bad} />
          <Statistic
            name="average"
            count={(good - bad) / (good + bad + neutral)}
          />
          <Statistic
            name="postive"
            count={(good / (good + bad + neutral)) * 100 + "%"}
          />
        </tbody>
      </table>
    </div>
  );
};

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const addGood = () => {
    setGood(good + 1);
  };

  const addNeutral = () => {
    setNeutral(neutral + 1);
  };

  const addBad = () => {
    setBad(bad + 1);
  };

  return (
    <div>
      <Feedback addGood={addGood} addNeutral={addNeutral} addBad={addBad} />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
