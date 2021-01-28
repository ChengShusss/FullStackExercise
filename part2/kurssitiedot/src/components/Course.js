import React from "react";

const Header = ({ course }) => {
  return <h2>{course.name}</h2>;
};

const Total = ({ parts }) => {
  const sum = parts
    .map((part) => part.exercises)
    .reduce((acc, cur) => acc + cur, 0);

  return <p>Number of exercises {sum}</p>;
};

const Part = (props) => {
  return (
    <p>
      {props.name} {props.exercises}
    </p>
  );
};

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map((course) => (
        <Part name={course.name} exercises={course.exercises} key={course.id} />
      ))}
    </div>
  );
};

const Course = ({ course }) => {
  return (
    <div>
      <Header course={course} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

export default Course;
