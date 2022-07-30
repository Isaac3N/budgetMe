import React from "react";
import "./App.css";
import ArticlePage from "./pages/articlePage/ArticlePage";
import LandingPage from "./pages/landingPage/LandingPage";
import { Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/registerPage/RegisterPage";
import LoginPage from "./pages/loginPage/LoginPage";
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
