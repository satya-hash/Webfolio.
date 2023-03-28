import React, { useState } from "react";
import "./contact.scss";

function Contact() {
	const [mail, setMail] = useState({
		name: "",
		email: "",
		msg: "",
	});

	function handleSubmit(e) {
		e.preventDefault();
		console.log(mail);
	}

	function handleChange(e) {
		let { name, value } = e.target;
		setMail((prev) => ({ ...prev, [name]: value }));
	}

	return (
		<div className="contact">
			<h3> GET IN TOUCH </h3>
			<form onChange={handleChange} onSubmit={handleSubmit}>
				<input
					type="text"
					name="name"
					id="name"
					value={mail.name}
					placeholder="Enter Name"
				/>
				<input
					type="email"
					name="email"
					id="email"
					value={mail.email}
					placeholder="Enter Mail"
				/>
				<textarea
					name="msg"
					id="msg"
					placeholder="Message..."
					value={mail.msg}
					cols="30"
					rows="10"
				></textarea>
				<button type="submit"> Send </button>
			</form>
		</div>
	);
}

export default Contact;
