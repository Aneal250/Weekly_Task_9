import logo from './logo.svg';
import './App.css';
import Project from './components/MaryAnn';

function App() {
  const Contribution = {
    name: 'MaryAnn Nwagor',
    project: 'Instagram Clone',
    set: 'Group 11'
  }
  return (
    <div className="App">
            <h1><b>Project Capstone Details</b></h1>

      <Project details = {Contribution}/>
    </div>
  );
}

export default App;
