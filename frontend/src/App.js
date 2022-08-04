import React from "react";
import "./App.css";
import ArticlePage from "./pages/articlePage/ArticlePage";
import LandingPage from "./pages/landingPage/LandingPage";
import { Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/registerPage/RegisterPage";

import { GlobalProvider } from "./context/Provider";
import Dashboard from "./pages/dashboard/pages/Dashboard";
import LoginPage from "./pages/loginPage/LoginPage";
import PrivateRoutes from "./routes/PrivateRoutes";
import TaskPage from "./pages/dashboard/pages/Tasks/TaskPage";

import IncomeTablePage from "./pages/dashboard/pages/IncomeTable/IncomeTablePage";
import AddIncome from "./pages/dashboard/pages/IncomeTable/AddIncome";
import ExpenseTablePage from "./pages/dashboard/pages/ExpenseTable/ExpenseTablePage";
import AddExpense from "./pages/dashboard/pages/ExpenseTable/AddExpense";
import Miss from "./pages/dashboard/pages/Chart";

const App = () => {
	return (
		<GlobalProvider className="App">
			<Routes>
				<Route path="/" element={<LandingPage />} />
				<Route path="/articles" element={<ArticlePage />} />
				<Route path="/register" element={<RegisterPage />} />
				<Route path="/login" element={<LoginPage />} />
				<Route element={<PrivateRoutes />}>
					<Route exact path="/dashboard" element={<Dashboard />} />
					<Route path="/dashboard/goals" element={<TaskPage />} />
					<Route path="/dashboard/income-table" element={<IncomeTablePage />} />
					<Route path="/dashboard/chart" element={<Miss />} />
					<Route
						path="/dashboard/income-table/add-income"
						element={<AddIncome />}
					/>
					<Route
						path="/dashboard/expense-table"
						element={<ExpenseTablePage />}
					/>
					<Route
						path="/dashboard/expense-table/add-expense"
						element={<AddExpense />}
					/>
				</Route>
			</Routes>
		</GlobalProvider>
	);
};

export default App;
