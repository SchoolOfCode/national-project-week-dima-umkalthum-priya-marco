import React from "react";
import "./styles.css";

function SubHeading({ weekId, weekTopic }) {
	return (
		<div className="subHead">
			<h2>WEEK {weekId}</h2>
			<p className="topic-title">{weekTopic}</p>
		</div>
	);
}

export default SubHeading;

