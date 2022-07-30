import React from "react";
import "./App.css";
import ArticlePage from "./pages/ArticlePage";
import LandingPage from "./pages/LandingPage";
import { Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import { GlobalContext } from "./context/Provider";

const App = () => {
	return (
		<GlobalContext.Provider className="App">
			<Routes>
				<Route path="/" element={<LandingPage />} />
				<Route path="/articles" element={<ArticlePage />} />
				<Route path="/register" element={<RegisterPage />} />
				<Route path="/login" element={<LoginPage />} />
			</Routes>
		</GlobalContext.Provider>
	);
};

export default App;
