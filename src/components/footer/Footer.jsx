import React from "react";
import linkedinSvg from "../../assets/svgs/linkedin.svg";
import githubSvg from "../../assets/svgs/github.svg";
import facebookSvg from "../../assets/svgs/facebook.svg";

import { FaFacebookSquare, FaGithub, FaLinkedin } from "react-icons/fa";
import "./footer.scss";

function Footer() {
	return (
		<footer>
			<div className="social-links">
				<ul>
					<li>
						<a href="https://linkedin.com/in/satya-surendra" target="_blank">
							{" "}
							<img src={linkedinSvg} alt="" />
						</a>
					</li>
					<li>
						<a href="https://github.com/satya-hash" target="_blank">
							{" "}
							<img src={githubSvg} alt="" />
						</a>
					</li>
					<li>
						<a href="">
							{" "}
							<img src={facebookSvg} alt="" />
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
