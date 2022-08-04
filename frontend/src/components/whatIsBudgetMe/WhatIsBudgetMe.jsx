import React from 'react'
import "./what-is-budget-me.css"
import Feature from '../feature/Feature'
import { Link } from 'react-router-dom'

const WhatIsBudgetMe = () => {
  return (
    <div className= "budgetme-what-is-budgetme section-margin" id="what-is-budget-me">
      <div className="budgetme-what-is-budgetme-feature">
        <Feature title="What is BudgetMe 🤔 " 
                  text="To become financially independent, you must turn part of your income into capital; 
                    turn capital into enterprise; turn enterprise into profit; turn a profit into an investment, 
                    and turn the investment into financial independence. - Jim Rohn"/>
      </div>
      <div className="budgetme-what-is-budgetme-heading">
        <h1 className='gradient-text'>
          Achieve Financial Freedom with BudgetMe
        </h1>
        <Link to={"/articles"}><p>Check out our well Curated Articles </p></Link>
      </div>
      <div className="budgetme-what-is-budgetme-container">
        <Feature title="Data Analysis 📈"  text="Budget Me provides in depth Data Analysis that would help you keep Track of your Earnings and Expenditures. So you can set your budget wisely"/>
        <Feature title="Track of your Goals 🏔" text="BudgetMe Helps your track your Yearly Financial goals. 
                                                    We believe that it is imperative for you to track your goals that is why we ,at BudgetMe, 
                                                    integrated a goal tracker so you can keep track of your goals and attain financial freedom"/>
        <Feature title="Goal Milestones 🚀" text="At BudgetMe we believe that it is important to celebrate goals and take notes of setbacks in order to achieve our financial goals.
                                                   So we integrated a goal milestone app into our project so we can keep track of those moments and look back on them when need arises"/>
        <Feature title="Curated Articles 📝  " text="We organize the most relevant and up to date financial articles to keep your financially ready."/>
      </div>
      <div className='footer-message gradient-text'>
        <p>All of These Features Accessible to you Completely Free of Charge.</p>
      </div>
    </div>
  )
}

export default WhatIsBudgetMe