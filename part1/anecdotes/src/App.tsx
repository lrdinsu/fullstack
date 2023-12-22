import { useState } from 'react';

import { Button } from '@/components/Button.tsx';

const anecdotes = [
  'If it hurts, do it more often.',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
  'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
  'The only way to go fast, is to go well.',
];
function App() {
  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState(() =>
    Array<number>(anecdotes.length).fill(0),
  );
  const mostVotes = points.reduce(
    (prev, curr) => (curr >= prev ? curr : prev),
    0,
  );

  function handleSelect() {
    setSelected(Math.floor(Math.random() * anecdotes.length));
  }

  function handleVote() {
    const copy = [...points];
    copy[selected] += 1;
    setPoints(copy);
  }

  return (
    <div>
      <h2>Anecdote of the day</h2>
      <p>{anecdotes[selected]}</p>
      <p>has {points[selected]} votes</p>
      <Button onClick={handleVote}>vote</Button>
      <Button onClick={handleSelect}>next anecdote</Button>
      <h2>Anecdote with most votes</h2>
      <p>{anecdotes[points.indexOf(mostVotes)]}</p>
      <p>has {mostVotes} votes</p>
    </div>
  );
}

export default App;
