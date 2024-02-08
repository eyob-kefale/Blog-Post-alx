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
  // Access user information from the context
  const {user}=useContext(Context)
 return (
    <div className="App">
    {/* Define routes using React Router's <Routes> and <Route> components */}
      <Routes>
        <Route element={<TopBar/>}>
  
          {/* Different routes based on the URL path */}
          {/* If the user is logged in, show Home page, otherwise, show Login page */}
      <Route path="/login" element={user ?<Home/>:<Login/>} />
          {/* If the user is logged in, show Home page, otherwise, show Login page */}
          <Route path="/" element={user ?<Home/>:<Login />} />
        {/* If the user is logged in, show Write page, otherwise, show Login page */}
          <Route path="/write" element={user ?<Write/>:<Login/>} />
        {/* Show Single post page */}
          <Route path="/post/:postId" element={<Single />} />
         {/* If the user is logged in, show Home page, otherwise, show Register page */}
          <Route path="/register" element={user ?<Home/>:<Register/>}/>
             {/* If the user is logged in, show Settings page, otherwise, show Login page */}
          <Route path="/settings" element={user ?<Settings/>:<Login/>} />

        </Route>
         
      </Routes>
    </div>
  );
}

export default App;
