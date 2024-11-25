import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/HeaderComponent";
import Button from "./Components/ButtonComponent";
import Image from "./Components/imageComponent";
import Cards from "./Components/cardsComponent";

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
        className="bg-dark text-white p-3 "
        specificheBtn="btn border border-primary color blueBtn"
      />

      <Image
        src="https://images.unsplash.com/photo-1552288092-76e7d732366c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGFub3JhbWljfGVufDB8fDB8fHww"
        alt="panoramic city"
        style={{ width: "100%" }}
      />

      <div className="container p-5">
        <div className="row">
          <div className="col">
            <Cards
              src="https://images.unsplash.com/photo-1694673767387-dc6cfff76b6c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGFub3JhbWljfGVufDB8fDB8fHww"
              cardTitle="Posti meravigliosi"
              btnText="Visita ora!"
              classBtn="btn btn-secondary"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
