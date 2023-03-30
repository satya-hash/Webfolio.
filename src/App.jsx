import About from "./components/about/About";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import Skills from "./components/skills/Skills";
import Work from "./components/work/Work";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import { useEffect, useState } from "react";
import ScrollToTop from "./components/ScrollToTop";

function App() {
	const [theme, setTheme] = useState("light");

	useEffect(() => {
		if (theme === "light") {
			document.body.classList.add("dark");
			document.body.classList.remove("light");
		} else {
			document.body.classList.add("light");
			document.body.classList.remove("dark");
		}
	}, [theme]);

	return (
		<div className={`App `}>
			<Navbar id="navbar" theme={theme} setTheme={setTheme} />
			<Home id="home" />
			<About id="about" />
			<Skills id="skills" />
			<Work id="work" />
			<Contact id="contact" />
			<Footer id="footer" />
			<ScrollToTop />
		</div>
	);
}

export default App;

// how to use the scrollreveal package in react functional components?
