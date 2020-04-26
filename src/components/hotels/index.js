import React from "react";
import CardItem from "./carditem";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import PropTypes from "prop-types";

/**
 * Component to list the hotels
 * @author Jhoan Lopez <jhoanlt19@gmail.com>
 * @param {*} param0
 */
const Hotels = ({ hotels, asking }) => (
	<section className="section">
		<div className="container">
			<div className="columns is-multiline is-centered">
				{asking ? (
					<Loader type="Puff" color="#3298dc" height={150} width={150} />
				) : hotels.length > 0 ? (
					hotels.map((hotel, key) => (
						<div
							key={`hotel-${hotel.slug}-${key}`}
							className="column is-one-third"
						>
							<CardItem item={hotel} />
						</div>
					))
				) : (
					<div>No hay datos para mostrar!</div>
				)}
			</div>
		</div>
	</section>
);

Hotels.propTypes = {
	hotels: PropTypes.array,
	asking: PropTypes.bool,
};

export default Hotels;
