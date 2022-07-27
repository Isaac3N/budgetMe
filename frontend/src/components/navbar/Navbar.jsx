import React, { useState } from 'react';
import {RiMenu3Line, RiCloseLine } from "react-icons/ri"
import "./navbar.css"
import {Link} from "react-router-dom"


const MenuItems=()=> (
  <>
    <p><a href="#home">Home</a></p>
    <p><a href="#what-is-budget-me">What is BudgetMe</a></p>
    <p><a href="#dashboard">Dashboard</a></p>
    <p><a href="#FAQ">FAQ</a></p>
    <p><Link to={"/articles"}>Articles</Link></p>

  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <div className="budgetme-navbar">
      <div className="budgetme-navbar-links">
      < div className="budgetme-navbar-links-logo">
          <p>BUDGET ME</p>
        </div>
        <div className="budgetme-navbar-links-container">
          <MenuItems/>

        </div>
      </div>
      <div className="budgetme-navbar-sign">
        <p>Sign in</p>
        <button type='button'>Sign Up</button>
      </div>
      <div className="budgetme-navbar-menu">
        {
          toggleMenu ? <RiCloseLine color="#03A9F4" size={27} onClick={()=> setToggleMenu(false)}/> : 
          <RiMenu3Line color="#03A9F4" size={27} onClick={()=> setToggleMenu(true)}/>
        }
        {toggleMenu && (
          <div className="budgetme-navbar-menu-container scale-up-center">
            <div className="budgetme-navbar-menu-container-links">
              <MenuItems/>
              <div className="budgetme-navbar-menu-container-links-sign">
                <p>Sign in</p>
                <button type='button'>Sign Up</button>
              </div>
            </div>
          </div>
          
        )}
      </div>
    </div>
  )
}

export default  Navbar