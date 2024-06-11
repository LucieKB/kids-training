import "@mantine/dates/styles.css";
import { useState } from "react";
import { Calendar } from "@mantine/dates";
import dayjs from "dayjs";
import { Activities } from "./Activities";

export const Calendrier = () => {
  // const [hovered, setHovered] = useState<Date | null>(null);
  const [value, setValue] = useState<Date | null>(new Date());
  const [showCalendar, setShowCalendar] = useState(true);

  function getDay(date: Date) {
    const day = date.getDay();
    return day === 0 ? 6 : day - 1;
  }

  function startOfWeek(date: Date) {
    return new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate() - getDay(date) - 1
    );
  }

  function endOfWeek(date: Date) {
    return dayjs(
      new Date(
        date.getFullYear(),
        date.getMonth(),
        date.getDate() + (6 - getDay(date))
      )
    )
      .endOf("date")
      .toDate();
  }

  function isInWeekRange(date: Date, value: Date | null) {
    return value
      ? dayjs(date).isBefore(endOfWeek(value)) &&
          dayjs(date).isAfter(startOfWeek(value))
      : false;
  }

  console.log(value);
  return (
    <>
      <div>
        <button onClick={() => setShowCalendar(!showCalendar)}>
          {showCalendar ? "Show Calendar" : "Hide Calendar"}
        </button>
        {showCalendar ? null : (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Calendar
              withCellSpacing={false}
              minDate={new Date()}
              maxDate={new Date("Fri Jul 19 2024 00:00:00 GMT-0100")}
              getDayProps={(date) => {
                const isSelected = isInWeekRange(date, value);
                const isInRange = isSelected;
                return {
                  inRange: isInRange,
                  firstInRange: isInRange && date.getDay() === 1,
                  lastInRange: isInRange && date.getDay() === 0,
                  selected: isSelected,
                  onClick: () => setValue(date),
                };
              }}
            />
          </div>
        )}

        <Activities value={value} />
      </div>
    </>
  );
};
