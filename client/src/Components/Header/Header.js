import React from "react";
import "./Styles/Header.styles.css";
import logo from "./Images/logo.png";
const Header = () => {
	return (
		<header>
			<div className="header-container">
				<div className="nav-bar">
					<div className="logo">
						<img src={logo} alt="nike logo" />
					</div>
					<nav>
						<ul>
							<li></li>
						</ul>
					</nav>
				</div>
			</div>
		</header>
	);
};

export default Header;
