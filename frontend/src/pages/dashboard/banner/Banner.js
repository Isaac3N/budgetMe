import React from "react";
import { Link } from "react-router-dom";
import "./banner.css";

const cta = () => {
	return (
		<div className="budgetme-cta section-padding">
			<div className="budgetme-cta-content">
				<p>Try Budget Me Today and Get Your Finances in Check </p>
				<h3>
					Budget Me is the Easiest and Most Efficient way to Track your Expenses
				</h3>
			</div>
			<div className="budgetme-cta-btn">
				<button type="button">
					<Link to={"/dashboard/expense-table"}>Track an Expense</Link>{" "}
				</button>
			</div>
		</div>
	);
};

export default cta;
