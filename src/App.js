import "./App.css";
import ComposeComponent from "./Compose-component/ComposeComponent";
import ReactBoxes from "./React-Boxes/ReactBoxes";

function App() {
  return (
    <div className="wrapper">
      <h3> Sample App: Compose Component </h3>
      <ComposeComponent></ComposeComponent>
      <br />
      <br />
      <br />
      <h3>Sample App: React-Boxes</h3>
      <ReactBoxes></ReactBoxes>
    </div>
  );
}

export default App;
