import React from 'react'
import "./header.css"
import people from "../../assets/people.png"
import budget from "../../assets/budget.png"
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='budgetme-header section-padding' id="home">
      <div className="budgetme-header-content">
        <h1 className="gradient-text">
          Gain Financial Freedom by Monitoring your Expenses using BudgetMe.
        </h1>
        <p>
          BudgetMe is a Opensource Platform that allows users to keep track their Expenditures, Savings, Income, Goals and much more.
        </p>
        <div className="budgetme-header-content-input">
          <button type='button'><Link to={"/register"}>Get Started</Link></button>
        </div>
        <div className="budgetme-header-content-people">
          <img src={people} alt="people" />
          <p>Join the thousands of People achieving Financial Freedom</p>
        </div>
        
      </div>
      <div className="budgetme-header-image">
        <img src={budget} alt="budget" />
      </div>
    </div>
  )
}

export default Header