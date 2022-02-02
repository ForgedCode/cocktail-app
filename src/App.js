import { AnimatePresence } from "framer-motion";
import React from "react";
import MainPage from "./Pages/MainPage/MainPage";
import { GlobalStyle } from "./Styles/GlobalStyles";

const App = () => {
	return (
		<>
			<GlobalStyle />
			<AnimatePresence exitBeforeEnter>
				<MainPage />
			</AnimatePresence>
		</>
	);
};

export default App;
