import React from "react";
import PropTypes from "prop-types";
import Log from "../components/Log";

const Profil = () : JSX.Element => {
	return (
		<div className="profil-page">
			<div className="log-container">
				<Log signin={false} signup={true} />
				<div className="img-container">
					<img src="./img/log.svg" alt="img-log" />
				</div>
			</div>
		</div>
	);
};

Profil.propTypes = {

};

export default Profil;
