import React from 'react'

import {
	Blog,
	CTA,
	FAQ,
	Footer,
	Hackathon,
	Header,
	Navbar,
	WhatIsBudgetMe,
	WhyBudget,
} from "../../components/base"

const LandingPage = () => {
  return (
    <div>
      <div className="gradient-bg">
				<Navbar />
				<Header />
			</div>
			<Hackathon />
			<WhatIsBudgetMe />
			<WhyBudget />
			<FAQ />
			<CTA />
			<Blog />
			<Footer />
    </div>
  )
}

export default LandingPage