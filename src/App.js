import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home.js"
import AboutUs from "./Pages/AboutUs.js"
import Product from "./Pages/Product.js"
import Contact from "./Pages/Contact.js"
import Profile from "./Pages/Profile.js"
import Service from "./Pages/Service.js"
import Blog from "./Pages/Blog.js"
import Four04 from "./Pages/Four04.js"

import Navigation from "./Components/Header/Header.js"

function App() {
	return (
		<>
		<Navigation />
			<Routes>
				<Route
					path="/"
					element={
						<Home />
					}
				/>
				<Route path="/AboutUs" element={<AboutUs />} />
				<Route path="/Profile" element={<Profile />} />
				<Route path="/Products" element={<Product />} />
				<Route path="/Services" element={<Service />} />
				<Route path="/Blog" element={<Blog />} />
				<Route path="/Contact" element={<Contact />} />
				<Route path="*" element={<Four04 />} />
			</Routes>
		</>
	);
}


export default App;
