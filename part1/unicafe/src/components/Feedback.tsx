import { Button } from '@/components/Button.tsx';

type FeedbackProps = {
  good: number;
  neutral: number;
  bad: number;
  setGood: React.Dispatch<React.SetStateAction<number>>;
  setNeutral: React.Dispatch<React.SetStateAction<number>>;
  setBad: React.Dispatch<React.SetStateAction<number>>;
};

export function Feedback({
  good,
  neutral,
  bad,
  setGood,
  setNeutral,
  setBad,
}: FeedbackProps) {
  function handleGood() {
    setGood(good + 1);
  }

  function handleNeutral() {
    setNeutral(neutral + 1);
  }

  function handleBad() {
    setBad(bad + 1);
  }

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button onClick={handleGood}>good</Button>
      <Button onClick={handleNeutral}>neutral</Button>
      <Button onClick={handleBad}>bad</Button>
    </div>
  );
}
