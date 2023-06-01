import {BrowserRouter, Routes, Route} from "react-router-dom";

import './App.css';
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialog/Dialog'

function App() {
  return (
    <BrowserRouter>
    <div className = "app-wrapper">
       <Header/> 
        <Nav/>
        <div className = "app-wrapper-content">
        <Routes>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/dialogs" element={<Dialogs/>}/>
        </Routes>
        </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
