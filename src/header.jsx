import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './index.css';
import { ImHome3 } from "react-icons/im";
import { Button } from '@carbon/react';

function Header() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // You can perform logout logic here, if needed.
    // For now, simply navigate to the login page.
    navigate('/');
  };
  const [isSideBar,setSideBar]=useState(false)
  const togglebutton=useRef(null);

  console.log("HERE")
  console.log(document.body.clientWidth)
  useEffect(()=>{
    if(togglebutton.current){
    document.getElementById("sidebar").style.translate="-100% 0%";
    document.getElementById("togglebutton").style.translate="-200px 0px";
    document.getElementById("togglebutton").innerHTML=">";}},[]);

  return (
    <div>
    <div id="togglebutton" ref={togglebutton} 
    style={{position:"fixed",left:"200px",top:"-5px",zIndex:"1",transition:"0.3s",
            height:"calc( 100vh + 5px)",
            backgroundColor:"#0530ad",color:"white",padding:"0.3em 0.6em 0.3em 0.6em",cursor:"pointer",
            fontSize:"20px"}}
    onClick={()=>{
      setSideBar(!isSideBar);
      document.getElementById("sidebar").style.translate=isSideBar?"0% 0%":"-100% 0%";
      document.getElementById("togglebutton").style.translate=isSideBar?"0 0":"-200px 0px";
      document.getElementById("togglebutton").innerHTML=isSideBar?"<":">";
    }}>
    </div>

    <header id="sidebar" style={{position:"fixed",transition:"0.3s"}}>
      <ul className="nav-list">
        <li className="header_logo">
          <a>HeadCount</a>
        </li>

        <li className="nav-item">
  <Link to="/Home">
    <ImHome3 /> 
  </Link>
</li>

        <li className="nav-item">
          <Link to="/table">BluePage SyncUp</Link>
        </li>
        <li className="nav-item">
          <Link to="/dashboards">Dashboards</Link>
        </li>
        <li className="nav-item">
          <Button onClick={handleLogout}>Logout</Button>
        </li>
      </ul>
    </header>
    </div>

  );
}

export default Header;
