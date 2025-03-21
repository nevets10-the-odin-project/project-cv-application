import React, { useState } from "react";

export default function Field({ name, type = "text", isEdit }) {
	const [value, setValue] = useState("");

	if (isEdit) {
		return (
			<label>
				<p>{name}: </p>
				<input
					type={type}
					value={value}
					onChange={(e) => setValue(e.target.value)}
				/>
			</label>
		);
	} else {
		return (
			<div>
				{name}: {value}
			</div>
		);
	}
}
