import "../styles/Section.css";
import Form from "./Form";

export default function General() {
	const fields = [
		{ id: 0, name: "Name", type: "text" },
		{ id: 1, name: "Email", type: "email" },
		{ id: 3, name: "Phone Number", type: "number" },
	];

	return (
		<section className="section">
			<h2>General Information</h2>
			<Form fields={fields} />
		</section>
	);
}
