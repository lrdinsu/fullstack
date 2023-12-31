import { useState } from 'react';

import { Feedback } from '@/components/Feedback.tsx';
import { Statistics } from '@/components/Statistics.tsx';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <Feedback
        good={good}
        neutral={neutral}
        bad={bad}
        setGood={setGood}
        setNeutral={setNeutral}
        setBad={setBad}
      />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
}

export default App;
