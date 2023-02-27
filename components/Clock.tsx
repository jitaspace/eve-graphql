import { ReactElement, useEffect, useState } from 'react';

const Clock = (): ReactElement => {
  const [time, setTime] = useState(new Date().toISOString());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toISOString());
    }, 500);

    return () => clearInterval(interval);
  });
  return <div>{time}</div>;
};

export default Clock;
