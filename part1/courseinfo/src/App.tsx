type HeaderProps = {
  course: string;
};

function Header({ course }: HeaderProps) {
  return <h1>{course}</h1>;
}

type PartProps = {
  part: string;
  exercise: number;
};

function Part({ part, exercise }: PartProps) {
  return (
    <p>
      {part} {exercise}
    </p>
  );
}

type ContentProps = {
  parts: string[];
  exercises: number[];
};

function Content({ parts, exercises }: ContentProps) {
  return parts.map((part, index) => (
    <Part part={part} exercise={exercises[index]} key={part} />
  ));
}

type TotalProps = {
  exercises: number[];
};

function Total({ exercises }: TotalProps) {
  return (
    <p>
      Number of exercises {exercises.reduce((prev, curr) => prev + curr, 0)}
    </p>
  );
}

function App() {
  const course = 'Half Stack application development';
  const part1 = 'Fundamentals of React';
  const exercises1 = 10;
  const part2 = 'Using props to pass data';
  const exercises2 = 7;
  const part3 = 'State of a component';
  const exercises3 = 14;

  const parts = [part1, part2, part3];
  const exercises = [exercises1, exercises2, exercises3];

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} exercises={exercises} />
      <Total exercises={exercises} />
    </div>
  );
}

export default App;
