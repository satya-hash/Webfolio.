import React, { useState, useEffect } from "react";
import { HiMenu, HiX, HiSun, HiMoon } from "react-icons/hi";
import "./navbar.scss";

function Navbar({ theme, setTheme }) {
	const [isopen, setIsopen] = useState(false);
	function handleOpen() {
		setIsopen(!isopen);
		document.querySelector(".nav-keys").classList.toggle("show");
	}
	return (
		<nav>
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
						<a>Home</a>
					</li>
					<li>
						<a>About</a>
					</li>
					<li>
						<a>Skills</a>
					</li>
					<li>
						<a>Work</a>
					</li>
					<li>
						<a>Contact</a>
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
