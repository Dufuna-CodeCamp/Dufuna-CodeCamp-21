import { Route,Routes } from "react-router-dom";

import Header from "./components/Header";
import CartPage from "./components/CartPage";
import VerificationPage from "./components/VerificationPage";

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route exact path="/" element={<CartPage/>} />
				<Route element={<VerificationPage/>} path="/verification" />
			</Routes>
		</>
	);
}

export default App;
