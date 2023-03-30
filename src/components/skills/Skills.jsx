import React, { useEffect } from "react";
import htmlSvg from "../../assets/svgs/html5.svg";
import cssSvg from "../../assets/svgs/css3.svg";
import jsSvg from "../../assets/svgs/javascript.svg";
import reactSvg from "../../assets/svgs/react.svg";
import sassSvg from "../../assets/svgs/sass.svg";
import nodeSvg from "../../assets/svgs/node-js.svg";
import gitSvg from "../../assets/svgs/git.svg";
import cSvg from "../../assets/svgs/c.svg";
import figmaSvg from "../../assets/svgs/figma.svg";
import firebaseSvg from "../../assets/svgs/firebase.svg";
import sr from "../ScrollReveal";

import "./skills.scss";

function Skills() {
	let skills = [
		htmlSvg,
		cssSvg,
		jsSvg,
		sassSvg,
		reactSvg,
		nodeSvg,
		firebaseSvg,
		figmaSvg,
		gitSvg,
		cSvg,
	];

	useEffect(() => {
		skills.forEach((skill, i) => {
			sr.reveal(`.icon-${i}`, { delay: `${i}00` });
		});
	}, []);
	return (
		<div className="skills">
			<h3> Skills </h3>
			<div className="skills-icons">
				<ul>
					{skills.map((skill, i) => (
						<li key={i}>
							<img className={`icon-${i}`} src={skill} alt="" />
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}

export default Skills;
