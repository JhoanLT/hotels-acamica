import React from "react";
import moment from "moment";
import "moment/locale/es";
import PropTypes from "prop-types";

/**
 * Component to display filter information
 * @author Jhoan López <jhoanlt19@gmail.com>
 * @param {*} param0
 */
const Header = ({ title, filters: { availabilityFrom, availabilityTo } }) => {
	const dayFrom = moment(availabilityFrom).format("dddd[,] D MMMM [del] YYYY");
	const dayTo = moment(availabilityTo).format("dddd[,] D MMMM [del] YYYY");

	let message = "";
	if (dayFrom === "Invalid date") {
		message =
			"Introduce las fechas de viaje para ver las mejores ofertas de hoteles para tus necesidades de alojamiento.";
	} else if (dayTo === "Invalid date") {
		message = `desde el ${dayFrom}`;
	} else {
		message = `desde el ${dayFrom} hasta el ${dayTo}`;
	}

	return (
		<div className="hero is-primary">
			<div className="hero-body">
				<div className="container">
					<h1 className="title">{title}</h1>
					<h2 className="subtitle">{message}</h2>
				</div>
			</div>
		</div>
	);
};

Header.propTypes = {
	title: PropTypes.string,
	filters: PropTypes.shape({
		availabilityFrom: PropTypes.string,
		availabilityTo: PropTypes.string,
	}),
};

export default Header;
