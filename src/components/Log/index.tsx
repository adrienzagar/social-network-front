import React, { useState, MouseEventHandler } from "react";
import PropTypes from "prop-types";
import SignUpForm from "./SignUpForm";
import SignInForm from "./SignInForm";

interface Sign {
    signin: boolean,
    signup: boolean
}

const Log = ({signin, signup}: Sign) => {
	const [signUpModal, setSignUpModal] = useState(signup);
	const [signInModal, setSignInModal] = useState(signin);

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
	signin: PropTypes.bool,
	signup: PropTypes.bool,
};

export default Log;
