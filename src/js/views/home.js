import React from "react";
import "../../styles/home.css";
import SWbg from "../../img/pxfuel.jpg";

export const Home = () => (
	<div className="text-center mt-5" style={{ backgroundImage: `url(${SWbg})` }}>
		<h1>Star Wars Testing</h1>
	</div>
);
