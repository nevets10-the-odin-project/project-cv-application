import React, { useState } from "react";
import Field from "./Field";

export default function Form({ title, fields }) {
	const [isEdit, setIsEdit] = useState(true);

	function handleIsEdit() {
		setIsEdit(!isEdit);
	}

	return (
		<div>
			<h1>{title}</h1>
			{fields.map((field) => (
				<Field key={field.id} name={field.name} type={field.type} isEdit={isEdit} />
			))}
			<button type="button" onClick={handleIsEdit}>
				{isEdit ? "Save" : "Edit"}
			</button>
		</div>
	);
}
