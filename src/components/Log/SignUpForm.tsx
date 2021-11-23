import React, { useState,  FormEvent } from "react";
import axios from "axios";
import SignInForm from "./SignInForm";

const SignUpForm = () => {
	const [formSubmit, setFormSubmit] = useState(false);
	const [pseudo, setPseudo] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [controlPassword, setControlPassword] = useState("");
	const [pseudoErrorMess, setPseudoError] = useState("");
	const [emailErrorMess, setEmailError] = useState("");
	const [passwordErrorMess, setPasswordError] = useState("");
	const [termsErrorMess, setTermsError] = useState("");

	const handleRegister = async (e :  FormEvent) => {
		e.preventDefault();
		const terms = document.getElementById("terms");
		
		if (terms !== null ){
			if (password !== controlPassword || !(terms as HTMLInputElement).checked) {
				if (password !== controlPassword)
					
					setPasswordError("Les mots de passe ne correspondent pas");

				if ( !(terms as HTMLInputElement).checked)
					setTermsError("Veuillez valider les conditions générales");
			} else {
				await axios({
					method: "post",
					url: `${process.env.REACT_APP_API_URL}api/user/register`,
					data: {
						pseudo,
						email,
						password,
					},
				})
					.then((res) => {
						console.log(res);
						if (res.data.errors) {
							setPseudoError(res.data.errors.pseudo);
							setEmailError(res.data.errors.email);
							setPasswordError(res.data.errors.password);
							
						} else {
							setFormSubmit(true);
						}
					})
					.catch((err) => console.log(err));
			}}
	};

	return (
		<>
			{formSubmit ? (
				<>
					<SignInForm />
					<span></span>
					<h4 className="success">
            Enregistrement réussi, veuillez-vous connecter
					</h4>
				</>
			) : (
				<form action="" onSubmit={handleRegister} id="sign-up-form">
					<label htmlFor="pseudo">Pseudo</label>
					<br />
					<input
						type="text"
						name="pseudo"
						id="pseudo"
						onChange={(e) => setPseudo(e.target.value)}
						value={pseudo}
					/>
					<div className="pseudo error">{pseudoErrorMess}</div>
					<br />
					<label htmlFor="email">Email</label>
					<br />
					<input
						type="text"
						name="email"
						id="email"
						onChange={(e) => setEmail(e.target.value)}
						value={email}
					/>
					<div className="email error">{emailErrorMess}</div>
					<br />
					<label htmlFor="password">Mot de passe</label>
					<br />
					<input
						type="password"
						name="password"
						id="password"
						onChange={(e) => setPassword(e.target.value)}
						value={password}
					/>
					<div className="password error">{passwordErrorMess}</div>
					<br />
					<label htmlFor="password-conf">Confirmer mot de passe</label>
					<br/>
					<input
						type="password"
						name="password"
						id="password-conf"
						onChange={(e) => setControlPassword(e.target.value)}
						value={controlPassword}
					/>
					<div className="password-confirm error">{passwordErrorMess}</div>
					<br />
					<input type="checkbox" id="terms" />
					<label htmlFor="terms">
            J&apos;accepte les{" "}
						<a href="/" target="_blank" rel="noopener noreferrer">
              conditions générales
						</a>
					</label>
					<div className="terms error">{termsErrorMess}</div>
					<br />
					<input type="submit" value="Valider inscription" />
				</form>
			)}
		</>
	);
};

export default SignUpForm;
