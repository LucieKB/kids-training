import { FriSatSun, MonTues, WedThur } from "../lib/SessionsByDay";
import { useEffect, useState } from "react";
import "./Activities.css";

interface ActivitiesProps {
  value: Date | null;
  // Other props if any
}

export const Activities: React.FC<ActivitiesProps> = ({ value }) => {
  // Component implementation
  const dayOfTheWeek = value?.getDay();
  const [training, setTraining] = useState<string[]>([]);

  useEffect(() => {
    if (dayOfTheWeek === 1 || dayOfTheWeek === 2) {
      setTraining(MonTues);
    } else if (dayOfTheWeek === 3 || dayOfTheWeek === 4) {
      setTraining(WedThur);
    } else if (dayOfTheWeek === 5 || dayOfTheWeek === 6 || dayOfTheWeek === 0) {
      setTraining(FriSatSun);
    } else {
      setTraining([]);
    }
  }, [value]);

  console.log(training);

  return (
    <div className="white-board">
      <h2>
        <u>Today's Schedule</u>
      </h2>
      {training.map((act, i) => (
        <ul key={i}>{act}</ul>
      ))}
    </div>
  );
};
