import './App.css';
import Timeline from './Components/Timeline';

function App() {
  return (
    <>
      <div className="link-container">
        <a href="https://github.com/PovilasU/React-Timeline">
          Link to git repository
        </a>
      </div>
      <h1>Events timeline</h1>
      <h3>
        Every 5 seconds new event is added to the timeline and last 5th event is
        removed
      </h3>
      <Timeline />
    </>
  );
}

export default App;
