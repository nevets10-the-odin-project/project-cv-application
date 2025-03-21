import { useState } from "react";
import Form from "./Form";

const initialFields = [
	{ id: 0, name: "Company Name", type: "text" },
	{ id: 1, name: "Position", type: "text" },
	{ id: 3, name: "Main Responsibilities", type: "text" },
	{ id: 4, name: "Start Date", type: "date" },
	{ id: 5, name: "End Date", type: "date" },
];

export default function Professional() {
	const [fields, setFields] = useState(initialFields);

	return (
		<div>
			<Form title={"Professional Experience"} fields={fields} />
		</div>
	);
}
