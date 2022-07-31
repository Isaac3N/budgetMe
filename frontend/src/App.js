import React from "react";
import "./App.css";
import ArticlePage from "./pages/articlePage/ArticlePage";
import LandingPage from "./pages/landingPage/LandingPage";
import { Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/registerPage/RegisterPage";

import { GlobalProvider } from "./context/Provider";
import Dashboard from "./pages/dashboard/Dashboard";
import LoginPage from "./pages/loginPage/LoginPage";

const App = () => {
	return (
		<GlobalProvider className="App">
			<Routes>
				<Route path="/" element={<LandingPage />} />
				<Route path="/articles" element={<ArticlePage />} />
				<Route path="/register" element={<RegisterPage />} />
				<Route path="/login" element={<LoginPage />} />
				<Route path="/dashboard" element={<Dashboard />} />
			</Routes>
		</GlobalProvider>
	);
};

export default App;
