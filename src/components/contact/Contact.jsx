import React, { useRef, useState } from "react";
import phoneSvg from "../../assets/svgs/phone.svg";
import mailSvg from "../../assets/svgs/mail.svg";
import whatsappSvg from "../../assets/svgs/whatsapp.svg";
import emailjs from "@emailjs/browser";
import "./contact.scss";

function Contact() {
	const formRef = useRef();
	const [mail, setMail] = useState({
		user_name: "",
		user_email: "",
		message: "",
	});

	function handleSubmit(e) {
		e.preventDefault();
		emailjs
			.sendForm(
				"service_eql1w98",
				"template_e8pd39a",
				formRef.current,
				"shArcUAVQ6avTrywq"
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);
		e.target.reset();
	}

	function handleChange(e) {
		let { name, value } = e.target;
		setMail((prev) => ({ ...prev, [name]: value }));
	}

	return (
		<div className="contact">
			<h3> Contact </h3>

			<div>
				<div className="touch">
					{" "}
					<h2>Get in touch</h2>{" "}
					<p>
						{" "}
						Want to get in touch? I'd love to hear from you. Here's how you can
						reach out...{" "}
					</p>
					<div className="icons">
						<ul>
							<li>
								<a href="tel:9550973113">
									<img src={phoneSvg} alt="" />
								</a>
							</li>
							<li>
								<a href="https://wa.link/xm1g3j" target="_blank">
									<img src={whatsappSvg} alt="" />
								</a>
							</li>
							<li>
								<a href="mailto:sathyagangadhara@gmail.com">
									<img src={mailSvg} alt="" />
								</a>
							</li>
						</ul>
					</div>
				</div>
				<form ref={formRef} onSubmit={handleSubmit}>
					<input
						onChange={handleChange}
						type="text"
						name="user_name"
						id="name"
						value={mail.name}
						placeholder="Enter Name"
					/>
					<input
						onChange={handleChange}
						type="email"
						name="user_email"
						id="email"
						value={mail.email}
						placeholder="Enter Mail"
					/>
					<textarea
						onChange={handleChange}
						name="message"
						id="message"
						placeholder="Message..."
						value={mail.message}
						cols="30"
						rows="10"
					></textarea>
					<button type="submit"> Send </button>
				</form>
			</div>
		</div>
	);
}

export default Contact;
