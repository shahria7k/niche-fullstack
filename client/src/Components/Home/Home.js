import React from "react";
import video from "./360.mp4";
const Home = () => {
	return (
		<div>
			v<video src={video} controls autoPlay></video>
		</div>
	);
};

export default Home;
