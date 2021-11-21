import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "../../pages/Home";
import Profil from "../../pages/Profil";
import Trending from "../../pages/Trending";

const index = (): JSX.Element => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home/>} />
				<Route path="/profil" element={<Profil/>} />
				<Route path="/trending" element={<Trending/>} />
				<Route
					path="*"
					element={<Navigate to="/" />}
				/>
			</Routes>
		</Router>
	);
};

index.propTypes = {

};

export default index;
