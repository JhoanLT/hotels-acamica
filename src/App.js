import React from "react";
import Header from "./components/header/header";
import moment from "moment";
import Hotels from "./components/hotels";
import Filters from "./components/filters";
import filter from "lodash/filter";
import "moment/locale/es";
import "bulma/css/bulma.css";

/**
 * Main component of the application
 * @author Jhoan Lopez <jhoanlt19@gmail.com>
 */
class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			filters: {
				availabilityFrom: moment().format("YYYY-MM-DD"),
				availabilityTo: moment().add(1, "month").format("YYYY-MM-DD"),
				country: "",
				price: "",
				rooms: "",
			},
			hotels: [],
			sortedHotels: [],
			asking: false,
		};

		this.handleChangeFilter = this.handleChangeFilter.bind(this);
	}

	//Data consulting
	componentDidMount() {
		this.setState({ asking: true });
		fetch(
			"https://wt-8a099f3e7c73b2d17f4e018b6cfd6131-0.sandbox.auth0-extend.com/acamica"
		)
			.then((data) => data.json())
			.then((hotels) =>
				this.setState(() => ({ sortedHotels: hotels, hotels, asking: false }))
			)
			.catch((err) => `Error loading information ${err}`);
	}

	//Filter change control
	handleChangeFilter({ target }) {
		this.setState(
			(state) => {
				const filters = state.filters;
				filters[target.name] = target.value;
				return filters;
			},
			() => this.filter()
		);
	}

	//Data filtering
	filter() {
		let {
			filters: { availabilityFrom, availabilityTo, price, rooms, country },
			hotels,
		} = this.state;

		//all the rooms
		let tempHotels = [...hotels];

		//filter by dates
		if (availabilityFrom !== "" && availabilityTo !== "") {
			tempHotels = filter(tempHotels, (hotel) => {
				const hotelFrom = moment(hotel.availabilityFrom).format("YYYY-MM-DD");
				const hotelTo = moment(hotel.availabilityTo).format("YYYY-MM-DD");

				return hotelFrom >= availabilityFrom && hotelTo <= availabilityTo;
			});
		}

		//filter by country
		if (country !== "") {
			tempHotels = filter(tempHotels, { country });
		}

		//filter by price
		if (price !== "") {
			price = parseInt(price);
			tempHotels = filter(tempHotels, { price });
		}

		//filter by size
		if (rooms !== "") {
			if (rooms === "little") {
				tempHotels = filter(tempHotels, (hotel) => hotel.rooms <= 10);
			} else if (rooms === "medium") {
				tempHotels = filter(
					tempHotels,
					(hotel) => hotel.rooms > 10 && hotel.rooms <= 20
				);
			} else {
				tempHotels = filter(tempHotels, (hotel) => hotel.rooms > 20);
			}
		}

		//change state
		this.setState({
			sortedHotels: tempHotels,
		});
	}

	render() {
		const { sortedHotels, filters, asking } = this.state;

		return (
			<div className="App">
				<Header title="Hoteles" filters={filters} />
				<Filters
					filters={filters}
					handleChangeFilter={this.handleChangeFilter}
				/>
				<Hotels hotels={sortedHotels} asking={asking} />
			</div>
		);
	}
}

export default App;
