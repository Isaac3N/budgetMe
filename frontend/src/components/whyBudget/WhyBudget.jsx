import React from 'react'
import Feature from '../../components/feature/Feature'
import "./why-budget.css"

const featuresData = [
  {
    title: "It Helps You Keep Your Eye on the Prize",
    text: "A budget helps you figure out your long-term goals and work toward them. If you just drift aimlessly through life, tossing your money at every pretty, shiny object that happens to catch your eye, how will you ever save up enough money to buy a car or put a down payment on a house?"
  },
  {
    title: "It Helps Ensure You Don't Spend Money You Don't Have",
    text: "Far too many consumers spend money they don't have—and we owe it all to credit cards. As a matter of fact, the average credit card debt per household reached $5,525 in 2021. If you create and stick to a budget, you'll never find yourself in this precarious position. You'll know exactly how much money you earn, how much you can afford to spend each month, and how much you need to save."
  },
  {
    title: "It Helps You Prepare for Emergencies",
    text: "Life is filled with unexpected surprises, some better than others. When you get laid off, become sick or injured, go through a divorce, or have a death in the family, it can lead to some serious financial turmoil. Of course, it seems like these emergencies always arise at the worst possible time—when you're already strapped for cash. This is exactly why everyone needs an emergency fund."
  },
  {
    title: "It Helps Shed Light on Bad Spending Habits",
    text: "Building a budget forces you to take a close look at your spending habits. You may notice that you're spending money on things you don't need. Do you honestly watch all 500 channels on your costly extended cable plan or multiple streaming subscriptions? Do you really need 30 pairs of black shoes? Budgeting allows you to rethink your spending habits and refocus your financial goals."
  }
]

const feature = () => {
  return (
    <div className='budgetme-features section-padding' id="features">
      <div className='budgetme-features-heading'>
        <h1 className='gradient-text'>
          Here is Why we (and other professionals) Think you should start Investing Today.
        </h1>
        <a className='' target="_blank" rel="noreferrer" href="https://www.investopedia.com/financial-edge/1109/6-reasons-why-you-need-a-budget.aspx#:~:text=A%20budget%20helps%20create%20financial,day%20and%20the%20long%20term.">Source -- Investopedia Article: 6 Reasons Why You need A Budget</a>
      </div>
      <div className="budgetme-features-container">
        {featuresData.map((item, index)=> (<Feature title={item.title} text={item.text} key={index}/>))}
      </div>
    </div>
  )
}

export default feature