import {Routes, Route } from "react-router-dom"
import './App.css';
import TopBar from "./component/topbar/TopBar"
import Write from './pages/write/Write'
import Home from './pages/home/Home'
import Single from './pages/single/Single'
import Settings from './pages/settings/Settings'
import Register from './pages/register/Register'
import Login from './pages/login/Login'
import { useContext } from "react";
import { Context } from "./context/Context";

function App() {
 
  const {user}=useContext(Context)
 return (
    <div className="App">
    
      <Routes>
        <Route element={<TopBar/>}>
  
         
      <Route path="/login" element={user ?<Home/>:<Login/>} />
        
          <Route path="/" element={user ?<Home/>:<Login />} />
      
          <Route path="/write" element={user ?<Write/>:<Login/>} />
       
          <Route path="/post/:postId" element={<Single />} />
         
          <Route path="/register" element={user ?<Home/>:<Register/>}/>
            
          <Route path="/settings" element={user ?<Settings/>:<Login/>} />

        </Route>
         
      </Routes>
    </div>
  );
}

export default App;
