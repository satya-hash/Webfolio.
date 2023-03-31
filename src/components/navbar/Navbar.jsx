import React, { useState, useEffect } from "react";
import { HiMenu, HiX, HiSun, HiMoon } from "react-icons/hi";
import "./navbar.scss";

function Navbar({ theme, setTheme }) {
	const [isopen, setIsopen] = useState(false);
	function handleOpen() {
		setIsopen(!isopen);
		document.querySelector(".nav-keys").classList.toggle("show");
	}

	function handleScroll(e) {
		let value = e.target.getAttribute("value");
		let ele = document.querySelector(`.${value}`);
		handleOpen();
		ele.scrollIntoView({ behavior: "smooth", block: "start" });
	}

	function stickyNav() {
		let nav = document.querySelector("nav");
		if (window.scrollY > 100) {
			nav.classList.add("sticky-nav");
		} else {
			nav.classList.remove("sticky-nav");
		}
	}

	useEffect(() => {
		window.addEventListener("scroll", stickyNav);
	}, []);

	return (
		<nav className="sticky-nav">
			<div className="navbar">
				<div className="logo">
					<h4 className="">webfolio.</h4>
				</div>
				<div className="menu-icon" onClick={handleOpen}>
					{isopen ? <HiX size={24} /> : <HiMenu size={24} />}
				</div>
			</div>
			<div className="nav-keys">
				{" "}
				<ul className="">
					<li>
						<a onClick={handleScroll} value="home">
							Home
						</a>
					</li>
					<li>
						<a onClick={handleScroll} value="about">
							About
						</a>
					</li>
					<li>
						<a onClick={handleScroll} value="skills">
							Skills
						</a>
					</li>
					<li>
						<a onClick={handleScroll} value="work">
							Work
						</a>
					</li>
					<li>
						<a onClick={handleScroll} value="contact">
							Contact
						</a>
					</li>
				</ul>{" "}
				<button
					className=""
					onClick={() => {
						setTheme(theme === "light" ? "dark" : "light");
					}}
				>
					{theme === "light" ? <HiSun size={24} /> : <HiMoon size={24} />}
				</button>
			</div>
		</nav>
	);
}

export default Navbar;
