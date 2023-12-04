import { useState } from "react";

import "./App.css";

function App() {
	const noMondays = new Promise((resolve, reject) => {
		if (new Date().getDay() !== 0) {
			resolve("Good, it's not Monday!");
		} else {
			reject("Someone has a case of the Mondays!");
		}
	});
	noMondays.then((res) => console.log(res)).catch((err) => console.log(err));
}

export default App;
