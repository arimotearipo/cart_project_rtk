import "./App.css";
import { useSelector } from "react-redux";
import Navbar from "./components/Navbar";
import Shop from "./components/Shop";
import Cart from "./components/Cart";

function App() {
	const showCart = useSelector((state) => state.navbar.showCart);
	return (
		<div className="App">
			<Navbar />
			{showCart ? <Cart /> : <Shop />}
		</div>
	);
}

export default App;
