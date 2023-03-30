import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

function ScrollToTop() {
	const [show, setShow] = useState(false);

	function scrolltoTop() {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	}

	useEffect(() => {
		window.addEventListener("scroll", () => {
			if (window.scrollY > 300) {
				setShow(true);
			} else {
				setShow(false);
			}
		});
	}, []);

	return (
		<div
			style={{
				position: "relative",
			}}
		>
			{show && (
				<FaArrowUp
					style={{
						position: "fixed",
						bottom: "40px",
						right: "40px",

						zIndex: 10,
					}}
					onClick={scrolltoTop}
					size={24}
				/>
			)}
		</div>
	);
}

export default ScrollToTop;
