import "./App.css";
import pokemon from "./pokemon.json";

function App() {
  return (
    <div
      style={{
        margin: "auto",
        paddingTop: "1rem",
        width: "800px",
      }}
    >
      <h1 className="title">Pokemon Search</h1>
      <table width="100%">
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Bulbasaur</td>
            <td>Grass, Poison</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
