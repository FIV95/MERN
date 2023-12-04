import { useState, useEffect } from "react";
import "./App.css";
import Tab from "./components/tab/tab";

function App() {
	const [tabs] = useState([
		{ label: "Home", content: "Welcome" },
		{ label: "Fire", content: "Fire Pokemon" },
		{ label: "Water", content: "Water Pokemon" },
		{ label: "Grass", content: "Grass Pokemon" },
	]);
	const [activeTab, setActiveTab] = useState(0);
	const [appColor, setAppColor] = useState("white");

	useEffect(() => {
		console.log(tabs);
	}, [tabs]);

	const handleTabclick = (index) => {
		const colors = ["white", "red", "blue", "green"];
		setAppColor(colors[index]);
	};

	return (
		<>
			{tabs.map((tab, index) => (
				<Tab
					key={index}
					label={tab.label}
					content={tab.content}
					activeTab={activeTab}
					index={index}
					setActiveTab={setActiveTab}
					callback={handleTabclick}
				/>
			))}
			{tabs.map((tab, index) => {
				if (activeTab === index) {
					return (
						<div
							className={`fade ${activeTab === index ? "show" : ""}`}
							style={{ backgroundColor: appColor }}
						>
							{tab.content}
						</div>
					);
				}
				return null;
			})}
		</>
	);
}
export default App;
