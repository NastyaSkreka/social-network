import {BrowserRouter, Routes, Route} from "react-router-dom";

import './App.css';
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import ProfileContainer from "./components/Profile/ProfileContainer";
import UsersContainer from './components/Users/UsersContainer';


function App(props) {

  return (
    <BrowserRouter>
    <div className = "app-wrapper">
       <Header/>  
        <Nav/>
        <div className = "app-wrapper-content">
        <Routes>
          {/* <Route path="/dialogs" render={ () => <DialogsContainer/>}/> */}  
            <Route path="/profile" render={ () =>  <ProfileContainer/>}/>
            <Route path="/users" render={ () => <UsersContainer/>}/>
        </Routes>
        </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
