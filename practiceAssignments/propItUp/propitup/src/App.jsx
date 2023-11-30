import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const people = [
	{ firstname: "jane", lastname: "doe", age: 45, haircolor: "brown" },
	{ firstname: "alex", lastname: "max", age: 98, haircolor: "none" },
	{ firstname: "brandy", lastname: "jones", age: 25, haircolor: "red" },
	{ firstname: "frankie", lastname: "mclarson", age: 30, haircolor: "black" },
];

function App() {
	const peopleElements = people.map((value,i) =>  <PersonCard propName={value}></PersonCard>);
 return peopleElements
}

function PersonCard(props) {
  console.log('props: ', props);
	return (
		<div>
			<h2>{props.propName.firstname}, {props.propName.lastname}</h2>
			<p>Age : {props.propName.age}</p>
			<p>Hair Color: {props.propName.haircolor}</p>
		</div>
	);
}

export default App;
