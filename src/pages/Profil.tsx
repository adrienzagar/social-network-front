import React, { useContext } from "react";
import PropTypes from "prop-types";
import Log from "../components/Log";
import { UidContext } from "../components/AppContext";
// import UpdateProfil from "../components/Profil/UpdateProfil";

const Profil = () : JSX.Element => {

	const uid = useContext(UidContext);

	return (
		<div className="profil-page">
			{uid ? (
				<h1>UPDATE PAGE</h1>
				// <UpdateProfil />
			) : (
				<div className="log-container">
					<Log signin={false} signup={true} />
					<div className="img-container">
						<img src="./img/log.svg" alt="img-log" />
					</div>
				</div>
			)}
		</div>
	);
};

Profil.propTypes = {

};

export default Profil;
