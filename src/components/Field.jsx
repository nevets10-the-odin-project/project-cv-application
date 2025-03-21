import React from "react";

export default function Field({ name, type = "text", isEdit }) {
	if (isEdit) {
		return (
			<label>
				{name}: <input type={type} />
			</label>
		);
	} else {
		return <p>{name}: </p>;
	}
}
