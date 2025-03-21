import React, { useState } from "react";
import Field from "./Field";

export default function Form({ title, fields }) {
	const [isEdit, setIsEdit] = useState(true);

	function handleIsEdit() {
		setIsEdit(!isEdit);
	}

	return (
		<>
			<div className="fields">
				<h2>{title}</h2>
				{fields.map((field) => (
					<Field
						key={field.id}
						name={field.name}
						type={field.type}
						isEdit={isEdit}
					/>
				))}
			</div>
			<button className="edit-btn" type="button" onClick={handleIsEdit}>
				{isEdit ? "Save" : "Edit"}
			</button>
		</>
	);
}
