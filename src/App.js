import './App.css';
import Timeline from './Components/Timeline';

function App() {
  return (
    <>
      <header>
        <h1>Events timeline</h1>
        <h4>
          Every 5 seconds a new event is added on top of the timeline and last
          5th event is removed
        </h4>
      </header>

      <Timeline />

      <footer>
        <h4>Povilas Urbonas (2022)</h4>
        <div className="link-container">
          <a href="https://github.com/PovilasU/React-Timeline">
            Link to git repository
          </a>
        </div>
      </footer>
    </>
  );
}

export default App;
