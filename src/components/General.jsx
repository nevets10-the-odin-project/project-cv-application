import Form from "./Form";

export default function General() {
	const fields = [
		{ id: 0, name: "Name", type: "text" },
		{ id: 1, name: "Email", type: "email" },
		{ id: 3, name: "Phone Number", type: "number" },
	];

	return (
		<div>
			<Form title={"General Information"} fields={fields} />
		</div>
	);
}
