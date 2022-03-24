import React from 'react'
import './nav.css'
import { Link ,useLocation} from "react-router-dom";
function Nav() {
  const yourLinkStyle={
    textDecoration:"none",
    fontSize:"20px",
    fontWeight:"bold",
    color: useLocation().pathname === "/yours" ? "#FF3366":"black"
    
  }
  const allLinkStyle={
    textDecoration:"none",
    fontSize:"20px",
    fontWeight:"bold",
    color: useLocation().pathname === "/" ? "#FF3366":"black"
  }

  const blockLinkStyle={
     textDecoration:"none",
    fontSize:"20px",
    fontWeight:"bold",
    color: useLocation().pathname === "/blocked" ? "#FF3366":"black"
  }
  console.log(useLocation())
  return (
    <div className="nav-container">
      <div className="nav-container-item"><Link   style={yourLinkStyle} to="/yours">Yours</Link></div>
      <div className="nav-container-item"><Link style={allLinkStyle} to="/">All</Link></div>
      <div className="nav-container-item"><Link style={blockLinkStyle} to="/blocked">Blocked</Link></div>
      
    </div>
  )
}

export default Nav