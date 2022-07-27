import React from 'react'
import "./feature.css"

const Feature = ({title, text}) => {
  return (
    <div className='budgetme-features-container-feature'>
      <div className="budgetme-features-container-feature-title">
        <div/> 
        <h1>{title}</h1>
      </div>
      <div className="budgetme-features-container-feature-text"> 
        <p>{text}</p>
      </div>
    </div>
  )
}

export default Feature