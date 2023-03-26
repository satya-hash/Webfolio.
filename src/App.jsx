import "./styles/App.scss";
import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
	const [theme, setTheme] = useState("light");
	return (
		<div className={`App ${theme}`}>
			<Navbar id="navbar" theme={theme} setTheme={setTheme} />
			<Home id="home" />
			{/* <About id="about" />
			<Skills id="skills" />
			<Work id="work" />
			<Contact id="contact" /> */}
			<Footer id="footer" />
		</div>
	);
}

export default App;
