import React from "react";
import "./App.css";

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
} from "./components/base";

const App = () => {
	return (
		<div className="App">
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
	);
};

export default App;
