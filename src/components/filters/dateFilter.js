import React from "react";
import PropTypes from "prop-types";

/**
 * Component for filters by date
 * @author Jhoan Lopez <jhoanlt19@gmail.com>
 * @param {*} param0
 */
const DateFilter = ({ date, onChange, name, label }) => (
	<div className="field">
		<div className="control has-icons-left">
			<label className="has-text-white">{label}</label>
			<input
				className="input"
				type="date"
				value={date}
				onChange={onChange}
				name={name}
			/>
			<span className="icon is-small is-left">
				<i className="fas"></i>
			</span>
		</div>
	</div>
);

DateFilter.propTypes = {
	date: PropTypes.string,
	onChange: PropTypes.func,
	name: PropTypes.string,
	label: PropTypes.string,
};

export default DateFilter;
