import React from "react";
import "./App.css";
import ArticlePage from "./pages/ArticlePage";
import LandingPage from "./pages/LandingPage";
import { Routes, Route } from "react-router-dom";

const App = () => {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<LandingPage />} />
				<Route path="/articles" element={<ArticlePage />} />
			</Routes>
		</div>
	);
};

export default App;
