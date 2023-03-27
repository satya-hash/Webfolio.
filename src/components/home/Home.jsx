import React from "react";
import dp from "../../assets/satya.jpg";
import "./home.scss";
import { FaFacebookSquare, FaGithub, FaLinkedin } from "react-icons/fa";

function Home() {
	return (
		<div className="home">
			<div className="intro">
				<div>
					<h4> HELLO , AMIGOS </h4>
					<h1>
						I'M <span>SATYA SURENDRA</span>
					</h1>
					<h4>
						WEB-DEVELOPER <span>|</span> WEB-DESIGNER <span>|</span> STUDENT{" "}
					</h4>
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
