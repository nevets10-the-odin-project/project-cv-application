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
			<Field name={"Name"} isEdit={isEdit} onEdit={handleIsEdit} />
			<Field
				name={"email"}
				type={"email"}
				isEdit={isEdit}
				onSubmit={handleIsEdit}
			/>
			<Field
				name={"Phone Number"}
				type={"number"}
				isEdit={isEdit}
				onSubmit={handleIsEdit}
			/>
		</div>
	);
}
