import "./App.css";
import Education from "./components/Education";
import General from "./components/General";
import Professional from "./components/Professional";

function App() {
	return (
		<>
			<h1>Resume Builder</h1>
			<General />
			<Education />
			<Professional />
		</>
	);
}

export default App;
