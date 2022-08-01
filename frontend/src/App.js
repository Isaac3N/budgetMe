import React, { useState } from "react";
import "./App.css";
import ArticlePage from "./pages/articlePage/ArticlePage";
import LandingPage from "./pages/landingPage/LandingPage";
import { Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/registerPage/RegisterPage";

import { GlobalProvider } from "./context/Provider";
import Dashboard from "./pages/dashboard/Dashboard";
import LoginPage from "./pages/loginPage/LoginPage";
import Protected from "./routes";
import isAuthenticated from "./utils/isAuthenticated";
import PrivateRoutes from "./routes/PrivateRoutes";

const App = () => {
	return (
		<GlobalProvider className="App">
			<Routes>
				<Route path="/" element={<LandingPage />} />
				<Route path="/articles" element={<ArticlePage />} />
				<Route path="/register" element={<RegisterPage />} />
				<Route path="/login" element={<LoginPage />} />
				<Route element={<PrivateRoutes />}>
					<Route path="/dashboard" element={<Dashboard />} />
				</Route>
			</Routes>
		</GlobalProvider>
	);
};

export default App;
