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
		<div>
			<h1>Budget Me</h1>
			<Navbar />
			<Header />
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
