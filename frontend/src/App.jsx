import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";
import Details from "./components/pages/Details";
import AddContact from "./components/pages/AddContact";
import Favorites from "./components/pages/Favorites";
import Recents from "./components/pages/Recents";
import Navigation from "./components/navigation/Navigation";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/:contactId" element={<Details />} />
					<Route path="/addContact" element={<AddContact />} />
					<Route path="/favorites" element={<Favorites />} />
					<Route path="/recents" element={<Recents />} />
				</Routes>
				<Navigation />
			</BrowserRouter>
		</>
	);
}

export default App;
