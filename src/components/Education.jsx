import "../styles/Section.css";
import Form from "./Form";

export default function Education() {
	const fields = [
		{ id: 0, name: "School Name", type: "text" },
		{ id: 1, name: "Degree", type: "text" },
		{ id: 3, name: "Field of Study", type: "text" },
		{ id: 4, name: "Graduation Date", type: "date" },
	];

	return (
		<section className="section">
			<Form title={"Education"} fields={fields} />
		</section>
	);
}
