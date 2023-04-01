import React, { useEffect } from "react";
import dp from "../../assets/satya.jpg";
import sr from "../ScrollReveal";
import "./about.scss";

function About() {
	useEffect(() => {
		sr.reveal(".image", { delay: "100" });
		sr.reveal(".details", { delay: "150" });
		// sr.reveal(".dp", { delay: "100" });
	}, []);
	return (
		<div className="about">
			<h3> About </h3>
			<div className="intro">
				<div className="dp">
					<img className="image" src={dp} alt="dp" />
				</div>
				<div className="details">
					<h2>
						I'am <span>Satya</span>{" "}
					</h2>
					<p>
						I am a final year student studying B.tech at Andhra university
						college of engineering.As a frontend developer, I have a strong
						passion for creating beautiful, responsive and user-friendly
						websites. I have experience working with web-technologies to create
						engaging and dynamic web pages. I am skilled in using tools like
						Git, Sketch, and Figma. <br />
						In my spare time, I enjoy keeping up-to-date with the latest
						frontend development trends. <br />
						Thank you for considering my application.
					</p>
					<button> Contact </button>
				</div>
			</div>
		</div>
	);
}

export default About;
