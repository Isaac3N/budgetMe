import React from 'react'
import "./hackathon.css"
import { hashnode, planetscale, xIcon } from './imports'

const Hackathon = () => {
  return (
    <div className="budgetme-brand section-padding">
      <div >
        <img className='budgetme-brand-image' src={hashnode} alt="hashnode" />
      </div>  
      <div>
        <img className='budgetme-xicon' src={xIcon} alt="" />
      </div>
      <div className='budgetme-planetscale'>
        <img className='budgetme-brand-image' src={planetscale} alt="planetscale" />
      </div>
    </div>
  )
}

export default Hackathon