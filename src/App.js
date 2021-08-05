import './App.css';
import ProjectData from './Components/ProjectData';

function App() {
  const project = {
    name: 'Ochuko',
    group: 'Group 8-Inventory Management Sysyem',
    seat: 25,
  };
  return (
    <div className="App">
      <ProjectData myProject={project} />
    </div>
  );
}

export default App;
