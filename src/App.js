import "./App.css";
import CardFlip from "./components/CardFlip";

function App() {
  return (
    <>
      <div>
        <h2 style={{textAlign:'center'}}>Card-Flip Task</h2>
        <div className="card-container">
          {Array.from({ length: 12 }, (_, i) => (
            <CardFlip key={i} number={i + 1} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
