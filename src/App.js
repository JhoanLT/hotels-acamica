import React from "react";
import "react-bulma-components/dist/react-bulma-components.min.css";
import Header from "./components/header/header";
import moment from "moment";
import Hotels from "./components/hotels";
import Filters from "./components/filters";
import pick from "lodash/pick";
import isEqual from "lodash/isEqual";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			filters: {
				availabilityFrom: moment(new Date()).format("YYYY-MM-DD"),
				availabilityTo: moment().add(1, "month").format("YYYY-MM-DD"),
				country: "select",
				price: "select",
				rooms: "select",
			},
			hotels: [],
			information: ``,
		};

		this.handleChangeFilter = this.handleChangeFilter.bind(this);
	}

	componentDidMount() {
		fetch(
			"https://wt-8a099f3e7c73b2d17f4e018b6cfd6131-0.sandbox.auth0-extend.com/acamica"
		)
			.then((data) => data.json())
			.then((hotels) => this.setState(() => ({ hotels })))
			.catch((err) => `Error loading information ${err}`);
	}

	handleChangeFilter({ target }) {
		this.setState((state) => {
			const filters = state.filters;
			filters[target.name] = target.value;
			return filters;
		});
	}

	filterHotels() {
		const { hotels, filters } = this.state;
		this.setState(() => ({
			hotels: this.filter(),
		}));
	}

	filter() {
		const {
			hotels,
			filters: { availabilityFrom, availabilityTo, country, price, rooms },
		} = this.state;
		const filterData = [];

		hotels.filter((hotel) => {
			let valid = false;
			if (
				hotel.availabilityFrom >= availabilityFrom &&
				hotel.availabilityTo <= availabilityTo
			) {
				valid = true;
			}
			if (hotel.price === price) {
				valid = true;
			}
			if (hotel.rooms === rooms) {
				valid = true;
			}
			if (hotel.country === country) {
				valid = true;
			}
		});

		return hotels;
	}

	/*filterHotels(dataset, filterState) {
		return dataset.filter((item) => {
			const filterKeys = Object.keys(filterState); // ["rooms", "city", ...]
			const itemFilterEntries = pick(item, filterKeys); // {rooms: 1, city: 1, ...}
			return isEqual(itemFilterEntries, filterState);
    });
	}*/

	render() {
		const { hotels, filters } = this.state;

		return (
			<div className="App">
				<Header
					title="Hoteles"
					subtitle="desde el Martes, 1 de Enero de 2020 hasta el Miércoles, 2 de Enero de 2020"
					filters={filters}
				/>
				<Filters
					filters={filters}
					handleChangeFilter={this.handleChangeFilter}
				/>
				<Hotels hotels={hotels} />
			</div>
		);
	}
}

export default App;
