import "./App.css";
import { Calendrier } from "./components/Calendrier";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";

const fullWords: { [key: string]: string } = {
  Mon: "Monday",
  Tue: "Tuesday",
  Wed: "Wednesday",
  Thu: "Thursday",
  Fri: "Friday",
  Sat: "Saturday",
  Sun: "Sunday",
  Jun: "June",
  Jul: "July",
};

function App() {
  const today = new Date()
    .toString()
    .slice(0, 15)
    .replace(/Mon|Tue|Wed|Thu|Fri|Sat|Sun|Jun|Jul/g, function (matched) {
      return fullWords[matched];
    });
  console.log(today);
  return (
    <MantineProvider>
      <>
        <h1> Training Schedule </h1>
        <h2>Agathe & Emil</h2>
        <h4>{today}</h4>

        <div>
          <Calendrier />
        </div>
      </>
    </MantineProvider>
  );
}

export default App;
