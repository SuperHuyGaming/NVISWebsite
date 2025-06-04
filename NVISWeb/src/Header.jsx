import "./Header.css";
import * as React from "react";
import Button from "@mui/material/Button";

export default function Header() {
	const sx = {
		color: "red", // text color
		borderColor: "red", // border color
		"&:hover": {
			backgroundColor: "blue",
			color: "white",
			borderColor: "darkblue",
		},
	};
	return (
		<header className="Header">
			<img src="./library/nvisLogo.png" class="Logo"></img>
			<div className="Buttons">
				<Button className="HeaderButton" variant="outlined" sx={sx}>
					Home
				</Button>
				<Button className="HeaderButton" variant="outlined" sx={sx}>
					About us
				</Button>
				<Button className="HeaderButton" variant="outlined" sx={sx}>
					Contacts
				</Button>
			</div>
		</header>
	);
}
