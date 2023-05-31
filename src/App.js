import './App.css';
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialog/Dialog'

function App() {
  return (
    <div className = "app-wrapper">
       <Header/> 
        <Nav/>
        <div className = "app-wrapper-content">
       {/* <Profile/>*/}
        <Dialogs/>
        </div>
    </div>
  );
}

export default App;
