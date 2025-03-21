import React from "react";

export default function Field({ name, type = "text", isEdit }) {
	if (isEdit) {
		return (
			<div>
				<label>
					{name}: <input type={type} />
				</label>
			</div>
		);
	} else {
		return <div>{name}: </div>;
	}
}
