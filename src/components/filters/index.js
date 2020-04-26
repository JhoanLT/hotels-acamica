import React from "react";
import DateFilter from "./dateFilter";
import OptionsFilter from "./optionsFilter";
import PropTypes from "prop-types";

const countries = [
	{ value: "", name: "Todos los países" },
	{ value: "Argentina", name: "Argentina" },
	{ value: "Brasil", name: "Brasil" },
	{ value: "Chile", name: "Chile" },
	{ value: "Uruguay", name: "Uruguay" },
];

const prices = [
	{ value: "", name: "Cualquier precio" },
	{ value: 1, name: "$" },
	{ value: 2, name: "$$" },
	{ value: 3, name: "$$$" },
	{ value: 4, name: "$$$$" },
];

const rooms = [
	{ value: "", name: "Cualquier tamaño" },
	{ value: "little", name: "Hotel pequeño" },
	{ value: "medium", name: "Hotel mediano" },
	{ value: "big", name: "Hotel grande" },
];

/**
 * Filters component
 * @author Jhoan López <jhoanlt19@gmail.com>
 * @param {*} param0
 */
const Filters = ({ filters, handleChangeFilter }) => (
	<nav className="navbar is-info" style={{ justifyContent: "center" }}>
		<div className="navbar-item">
			<DateFilter
				date={filters.availabilityFrom}
				icon="sign-in-alt"
				onChange={handleChangeFilter}
				name="availabilityFrom"
				label={"Desde"}
			/>
		</div>
		<div className="navbar-item">
			<DateFilter
				date={filters.availabilityTo}
				icon="sign-out-alt"
				onChange={handleChangeFilter}
				name="availabilityTo"
				label={"Hasta"}
			/>
		</div>
		<div className="navbar-item">
			<OptionsFilter
				options={countries}
				icon="globe"
				onChange={handleChangeFilter}
				name="country"
				label={"País"}
			/>
		</div>
		<div className="navbar-item">
			<OptionsFilter
				options={prices}
				icon="dollar-sign"
				onChange={handleChangeFilter}
				name="price"
				label={"Precio"}
			/>
		</div>
		<div className="navbar-item">
			<OptionsFilter
				options={rooms}
				icon="bed"
				onChange={handleChangeFilter}
				name="rooms"
				label={"Tamaño"}
			/>
		</div>
	</nav>
);

Filters.propTypes = {
	filters: PropTypes.shape({
		availabilityFrom: PropTypes.string,
		availabilityTo: PropTypes.string,
		country: PropTypes.string,
		price: PropTypes.string,
		rooms: PropTypes.string,
	}),
	handleChangeFilter: PropTypes.func,
};

export default Filters;
