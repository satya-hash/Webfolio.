import React from "react";
import dp from "../assets/satya.jpg";
import { FaFacebookSquare, FaGithub, FaLinkedin } from "react-icons/fa";

function Home() {
	return (
		<div className="home">
			<div className="intro">
				<div>
					<h5> HELLO , AMIGOS </h5>
					<h2>
						I'M <span>SATYA SURENDRA</span>
					</h2>
					<h5>
						WEB-DEVELOPER <span>|</span> WEB-DESIGNER <span>|</span> STUDENT{" "}
					</h5>
				</div>
				<div>
					<ul>
						<li>
							<a
								target="_blank"
								href="https://www.linkedin.com/in/satya-surendra/"
							>
								{" "}
								<FaLinkedin size={36} />{" "}
							</a>
						</li>
						<li>
							<a target="_blank" href="https://www.github.com/satya-hash/">
								{" "}
								<FaGithub size={36} />{" "}
							</a>
						</li>
					</ul>
				</div>
			</div>

			<div className="dp blob">
				<img src={dp} alt="img" />
			</div>
		</div>
	);
}

export default Home;
