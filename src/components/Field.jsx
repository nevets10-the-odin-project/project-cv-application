import React, { useState } from "react";

export default function Field({ name, type = "text", isEdit }) {
	const [value, setValue] = useState("");

	if (isEdit) {
		return (
			<div>
				<label>
					{name}:{" "}
					<input
						type={type}
						value={value}
						onChange={(e) => setValue(e.target.value)}
					/>
				</label>
			</div>
		);
	} else {
		return (
			<div>
				{name}: {value}
			</div>
		);
	}
}
