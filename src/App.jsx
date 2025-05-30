/* eslint-disable react/no-unescaped-entities */

import "./App.css";


import { Outlet } from "react-router-dom";
import Aside from "./components/Aside";
import Navbar from "./components/Navbar";
import ProjectDetails from './pages/ProjectDetails';


const App=() =>{
  return (
    <>
       <Aside/>
      <div className="main-content">
       <Navbar/>
        <section style={{
          scrollBehavior: "smooth"
        }}><Outlet/>
        </section>
      </div>
    </>
  );
}

export default App;