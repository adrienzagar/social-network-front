import React, { useState, MouseEventHandler } from "react";
import PropTypes from "prop-types";
import SignUpForm from "./SignUpForm";
import SignInForm from "./SignInForm";

const Log = () => {
	const [signUpModal, setSignUpModal] = useState(true);
	const [signInModal, setSignInModal] = useState(false);

	const handleModals : MouseEventHandler = (e) => {
		if ((e.target as HTMLElement).id === "register") {
			setSignInModal(false);
			setSignUpModal(true);
		} else if ((e.target as HTMLElement).id === "login") {
			setSignInModal(true);
			setSignUpModal(false);
		}
	};

	return (
		<div className="connection-form">
			<div className="form-container">
				<ul>
					<li onClick={handleModals} id="register" className={signUpModal ? "active-btn" : ""}>S&apos;inscrire</li>
					<li onClick={handleModals} id="login"  className={signInModal ? "active-btn" : ""} >Se connecter</li>
				</ul>
				{signUpModal && <SignUpForm/>}
				{signInModal && <SignInForm/>}
			</div>
		</div>
	);
};

Log.propTypes = {

};

export default Log;
