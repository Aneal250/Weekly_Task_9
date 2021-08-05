import logo from './logo.svg';
import './App.css';
import Jeremiah from './component/Jeremiah';

function App() {
  let guy = {name: "Jeremiah", project: "News App", seat: 24}
  return (
    <div className="App">
      <Jeremiah boy={guy} />
    </div>
  );
}

export default App;
