import React from "react";
import PropTypes from "prop-types";

/**
 * Filter component (*)
 * @author Jhoan Lopez <jhoanlt19@gmail.com>
 * @param {*} param0
 */
const OptionsFilter = ({ options, onChange, name, label }) => (
	<div className="field">
		<div className="control has-icons-left">
			<label className="has-text-white">{label}</label>
			<div className="select" style={{ width: "100%" }}>
				<select style={{ width: "100%" }} onChange={onChange} name={name}>
					{options.map((opt, key) => (
						<option value={opt.value} key={`${opt.value}-${key}`}>
							{opt.name}
						</option>
					))}
				</select>
			</div>
			<div className="icon is-small is-left">
				<i className="fas"></i>
			</div>
		</div>
	</div>
);

OptionsFilter.propTypes = {
	options: PropTypes.arrayOf(
		PropTypes.shape({
			name: PropTypes.string,
			value: PropTypes.any,
		})
	),
	onChange: PropTypes.func,
	name: PropTypes.string,
	label: PropTypes.string,
};

export default OptionsFilter;
