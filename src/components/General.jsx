import { useState } from "react";
import Form from "./Form";

const initialFields = [
	{ id: 0, name: "Name", type: "text" },
	{ id: 1, name: "Email", type: "email" },
	{ id: 3, name: "Phone Number", type: "number" },
];

export default function General() {
	const [fields, setFields] = useState(initialFields);

	return (
		<div>
			<Form title={"General Information"} fields={fields} />
		</div>
	);
}
