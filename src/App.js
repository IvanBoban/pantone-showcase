import "./App.css";
import sofry from "./assets/sofry.jpg";
function App() {
  return (
    <div className="App">
      <div className="card">
        <img src={sofry} alt="sofa with rest as a pack of fries" />
        <p className="desc">
          <div className="art-title"> So Fry</div>
          <div className="art-date">2021.</div>
        </p>
      </div>
    </div>
  );
}

export default App;
