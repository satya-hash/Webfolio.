import React, { useEffect } from "react";
import dp from "../../assets/satya.jpg";
import linkedinSvg from "../../assets/svgs/linkedin.svg";
import githubSvg from "../../assets/svgs/github.svg";
import sr from "../ScrollReveal";
import "./home.scss";

function Home() {
	useEffect(() => {
		sr.reveal(".dp", { delay: "100" });
		sr.reveal(".home-title", { delay: "150" });
		sr.reveal(".icon", { delay: "250" });
	}, []);

	return (
		<div className="home">
			<div className="intro">
				<div className="home-title">
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
								<img className="icon" src={linkedinSvg} alt="" />
							</a>
						</li>
						<li>
							<a target="_blank" href="https://www.github.com/satya-hash/">
								{" "}
								<img className="icon" src={githubSvg} alt="" />
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
