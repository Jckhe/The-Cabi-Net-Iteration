import React from "react";


export default function Navbar(props) {
  return (
    <div className="nav-bar">
      <h1>The-Cabi.net</h1>
      <div>
      <button className="logout" onClick={props.logout} >Logout</button>
      </div>
    </div>
  )
} 
//add logout button