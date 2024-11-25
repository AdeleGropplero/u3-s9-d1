import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/HeaderComponent";
import Button from "./Components/ButtonComponent";

function App() {
  return (
    <div className="App">
      <Header
        logo={logo}
        style={{ color: "#7fffd4" }}
        className="border-md p-1 "
      />

      <Button
        title="Cerca qui quello che vuoi!"
        buttonText="Cerca"
        className="bg-dark text-white p-3"
        specificheBtn="btn btn-outline-success"
      />

      <Button
        title="Trova qui quello che cerchi"
        buttonText="Cerca"
        className="bg-dark text-white p-3"
        style={{ backgroundColor: "blue", color: "#61DAFB" }}
        specificheBtn="btn border border-primary color"
      />
    </div>
  );
}

export default App;
