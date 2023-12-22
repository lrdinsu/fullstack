import { StatisticsLine } from '@/components/StatisticsLine.tsx';

type StatisticsProps = {
  good: number;
  neutral: number;
  bad: number;
};

export function Statistics({ good, neutral, bad }: StatisticsProps) {
  const allCount = good + neutral + bad;
  const average = (good - bad) / allCount;
  const positive = (good / allCount) * 100;

  return (
    <div>
      <h2>Statistics</h2>
      {!good && !neutral && !bad ? (
        <p>No feedback given</p>
      ) : (
        <table>
          <tbody>
            <StatisticsLine text="good" value={good.toString()} />
            <StatisticsLine text="neutral" value={neutral.toString()} />
            <StatisticsLine text="bad" value={bad.toString()} />
            <StatisticsLine text="all" value={allCount.toString()} />
            <StatisticsLine text="average" value={average.toFixed(1)} />
            <StatisticsLine text="positive" value={`${positive.toFixed(1)}%`} />
          </tbody>
        </table>
      )}
    </div>
  );
}
