import React, { useState } from "react";
import ReactDOM from "react-dom";

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const Panel = ({ title, sentence }) => (
  <div>
    <h1>{title}</h1>
    <Anecdote sentence={sentence} />
  </div>
);

const Anecdote = ({ sentence }) => {
  return <div>{sentence}</div>;
};

const CustomedButton = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const App = (props) => {
  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState(new Array(anecdotes.length).fill(0));
  const [index, setIndex] = useState(0);

  const changeAnecdote = () => {
    setSelected(getRndInteger(0, 6));
  };

  const addVotes = () => {
    const copy = [...points];
    copy[selected] += 1;
    setPoints(copy);
    var max = Math.max(...copy);
    setIndex(copy.indexOf(max));
    console.log("copy", copy)
    console.log("max element", max)
    console.log("index", index)
  };

  return (
    <div>
      <Panel title="Anecdote of the day" sentence={props.anecdotes[selected]} />
      <p>has {points[selected]} votes</p>
      <CustomedButton handleClick={addVotes} text="vote" />
      <CustomedButton handleClick={changeAnecdote} text="next anecdote" />
      <Panel title="Anecdote of the day" sentence={props.anecdotes[index]} />
    </div>
  );
};

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById("root"));
