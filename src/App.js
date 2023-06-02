import {BrowserRouter, Routes, Route} from "react-router-dom";

import './App.css';
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialog/Dialog'

function App(props) {

  return (
    <BrowserRouter>
    <div className = "app-wrapper">
       <Header/>  
        <Nav/>
        <div className = "app-wrapper-content">
        <Routes>
            <Route path="/profile" element={<Profile state={props.state.profilePage}/>}/>
            <Route path="/dialogs" element={<Dialogs state = {props.state.dialogsPage}/>}/>
        </Routes>
        </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
