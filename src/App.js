import logo from './logo.svg';
import './App.css';
import MyProfile from './components/Ogechukwu';
function App() {
  const Profile = {
    Name: 'Ogechukwu Okoh',
    Project: 'Instagram Cloning',
    Sit: 33
  }
  return (
    <div className="App">
      <MyProfile Okoh = {Profile}/>
      <h1>Adding My Profile Information</h1>
      
    </div>
  );
}

export default App;
