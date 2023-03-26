import React, { useState } from "react";
import { FaFacebookSquare, FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
	const [inp, setInp] = useState("");
	function handleSubmit(e) {
		e.preventDefault();
		console.log(inp);
	}
	return (
		<footer>
			<div className="social-links">
				<ul>
					<li>
						<a href="">
							{" "}
							<FaLinkedin size={32} />{" "}
						</a>
					</li>
					<li>
						<a href="">
							{" "}
							<FaGithub size={32} />{" "}
						</a>
					</li>
					<li>
						<a href="">
							{" "}
							<FaFacebookSquare size={32} />{" "}
						</a>
					</li>
				</ul>
				<form onSubmit={handleSubmit}>
					{" "}
					<input
						placeholder="Enter Email..."
						type="email"
						name="email"
						id="email"
						value={inp}
						onChange={(e) => setInp(e.target.value)}
					/>{" "}
					<button type="submit"> Send </button>{" "}
				</form>
			</div>
			<div className="divider" />
			<p>
				Copyright &copy; {new Date().getFullYear()} by <span>Satya</span>
			</p>
		</footer>
	);
}

export default Footer;
