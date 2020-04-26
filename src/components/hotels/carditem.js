import React from "react";
import {
	MdPlace,
	MdAirlineSeatIndividualSuite,
	MdAttachMoney,
} from "react-icons/md";
import PropTypes from "prop-types";

/**
 * Card component for each item
 * @author Jhoan Lopez <jhoanlt19@gmail.com>
 * @param {*} param0
 */
const CardItem = ({ item }) => (
	<div className="card">
		<div className="card-image">
			<figure className="image is-4by3">
				<img src={item.photo} alt="Sainte Jeanne Boutique & Spa" />
			</figure>
		</div>
		<div className="card-content">
			<p className="title is-4">{item.name}</p>
			<p>{item.description}</p>
			<div
				className="field is-grouped is-grouped-multiline"
				style={{ marginTop: "1em" }}
			>
				<div className="control">
					<div className="tags has-addons">
						<span className="tag is-medium is-info">
							<MdPlace />
						</span>
						<span className="tag is-medium">{`${item.city}, ${item.country}`}</span>
					</div>
				</div>
				<div className="control">
					<div className="tags has-addons">
						<span className="tag is-medium is-info">
							<MdAirlineSeatIndividualSuite />
						</span>
						<span className="tag is-medium">{`${item.rooms} Habitaciones`}</span>
					</div>
				</div>
				<div className="control">
					<div className="tags">
						<span className="tag is-medium is-info">
							{new Array(item.price).fill(0).map((p, key) => (
								<MdAttachMoney key={`${p}-${key}`} />
							))}
						</span>
					</div>
				</div>
			</div>
		</div>
		<div className="card-footer">
			<button className="card-footer-item has-background-primary has-text-white has-text-weight-bold">
				Reservar
			</button>
		</div>
	</div>
);

CardItem.propTypes = {
	item: PropTypes.shape({
		availabilityFrom: PropTypes.number,
		availabilityTo: PropTypes.number,
		city: PropTypes.string,
		country: PropTypes.string,
		description: PropTypes.string,
		name: PropTypes.string,
		photo: PropTypes.string,
		price: PropTypes.number,
		rooms: PropTypes.number,
		slug: PropTypes.string,
	}),
};

export default CardItem;
