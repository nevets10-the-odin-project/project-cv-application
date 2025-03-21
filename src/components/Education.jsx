import { useState } from "react";
import Form from "./Form";

const initialFields = [
	{ id: 0, name: "School Name", type: "text" },
	{ id: 1, name: "Degree", type: "text" },
	{ id: 3, name: "Field of Study", type: "text" },
	{ id: 4, name: "Graduation Date", type: "date" },
];

export default function Education() {
	const [fields, setFields] = useState(initialFields);

	return (
		<div>
			<Form title={"Education"} fields={fields} />
		</div>
	);
}
