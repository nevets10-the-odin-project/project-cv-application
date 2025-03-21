import Form from "./Form";

export default function Professional() {
	const fields = [
		{ id: 0, name: "Company Name", type: "text" },
		{ id: 1, name: "Position", type: "text" },
		{ id: 3, name: "Main Responsibilities", type: "text" },
		{ id: 4, name: "Start Date", type: "date" },
		{ id: 5, name: "End Date", type: "date" },
	];

	return (
		<div>
			<Form title={"Professional Experience"} fields={fields} />
		</div>
	);
}
