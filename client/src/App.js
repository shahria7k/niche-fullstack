import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import SingleProduct from "./Components/SingleProduct/SingleProduct";
import Home from "./Components/Home/Home";
import Header from "./Components/Header/Header";
function App() {
	return (
		<div className="App">
			<Header></Header>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/products/:productId" element={<SingleProduct />} />
			</Routes>
		</div>
	);
}

export default App;
