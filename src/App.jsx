import About from "./components/about/About";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import Skills from "./components/skills/Skills";
import Work from "./components/work/Work";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import { useState } from "react";

function App() {
	const [theme, setTheme] = useState("light");
	return (
		<div className={`App ${theme}`}>
			<Navbar id="navbar" theme={theme} setTheme={setTheme} />
			<Home id="home" />
			<About id="about" />
			<Skills id="skills" />
			<Work id="work" />
			{/* <Contact id="contact" /> */}
			<Footer id="footer" />
		</div>
	);
}

export default App;
