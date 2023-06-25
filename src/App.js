import './App.css';
import ImageLoader from "./ImageLoader";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Hello sibu Dhital
        <ImageLoader src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Snake_River_%285mb%29.jpg/1200px-Snake_River_%285mb%29.jpg?20080122031527" alt="Example Image" />
      </header>
    </div>
  );
}

export default App;
