import React from "react";

const OptionsFilter = ({ options, onChange, name }) => (
	<div className="field">
		<div className="control has-icons-left">
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

export default OptionsFilter;
