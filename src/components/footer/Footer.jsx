import React from "react";
import { FaFacebookSquare, FaGithub, FaLinkedin } from "react-icons/fa";
import "./footer.scss";

function Footer() {
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
			</div>
			<div className="divider" />
			<p>
				Copyright &copy; {new Date().getFullYear()} by <span>Satya</span>
			</p>
		</footer>
	);
}

export default Footer;
