import React, { useState } from "react";
import Field from "./Field";

export default function Form({ title }) {
	const [isEdit, setIsEdit] = useState(true);

	function handleIsEdit() {
		setIsEdit(!isEdit);
	}

	return (
		<div>
			<h1>{title}</h1>
			<Field name={"Name"} isEdit={isEdit} />
			<Field name={"email"} type={"email"} isEdit={isEdit} />
			<Field name={"Phone Number"} type={"number"} isEdit={isEdit} />
			<button type="button" onClick={handleIsEdit}>
				{isEdit ? "Save" : "Edit"}
			</button>
		</div>
	);
}
