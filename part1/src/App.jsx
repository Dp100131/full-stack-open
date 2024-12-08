const Header = ({ course }) => {
  return <h1>{course}</h1>;
};

const Part = ({ content: { name, exercises } }) => (
  <p>
    {name} {exercises}
  </p>
);

const Content = ({ content }) => {
  return (
    <>
      {content.map((content) => (
        <Part key={content.name} content={content} />
      ))}
    </>
  );
};

const Total = ({ exercises }) => (
  <p>
    Number of exercises {exercises.reduce((acc, b) => acc + b.exercises, 0)}
  </p>
);

const App = () => {
  const course = "Half Stack application development";
  const part1 = { name: "Fundamentals of React", exercises: 10 };
  const part2 = { name: "Using props to pass data", exercises: 7 };
  const part3 = { name: "State of a component", exercises: 14 };

  const parts = [part1, part2, part3];

  return (
    <div>
      <Header course={course} />
      <Content content={parts} />
      <Total exercises={parts} />
    </div>
  );
};

export default App;
