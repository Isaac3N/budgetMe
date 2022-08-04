import React from 'react'
import { Link } from 'react-router-dom'
import "./cta.css"

const cta = () => {
  return (
    <div className='budgetme-cta'>
      <div className='budgetme-cta-content'>
        <p>Join the Thousands of People Achieving Financial Freedom</p>
        <h3>SignUp Today to Start Tracking your Expenses and Budgeting Smartly</h3>
      </div>
      <div className="budgetme-cta-btn">
        <button type="button"><Link to={"/register"}>Get Started</Link></button>
      </div>
    </div>
  )
}

export default cta