type HeaderProps = {
  course: string;
};

type PartType = {
  name: string;
  exercises: number;
};

type ContentProps = {
  parts: PartType[];
};

type TotalProps = {
  parts: PartType[];
};

function Header({ course }: HeaderProps) {
  return <h1>{course}</h1>;
}

function Part({ name, exercises }: PartType) {
  return (
    <p>
      {name} {exercises}
    </p>
  );
}

function Content({ parts }: ContentProps) {
  return parts.map((part) => (
    <Part name={part.name} exercises={part.exercises} key={part.name} />
  ));
}

function Total({ parts }: TotalProps) {
  return (
    <p>
      Number of exercises{' '}
      {parts.reduce((prev, curr) => prev + curr.exercises, 0)}
    </p>
  );
}

function App() {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
      },
      {
        name: 'State of a component',
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
}

export default App;
