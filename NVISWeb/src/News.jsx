import * as React from "react";
import Box from "@mui/material/Box";

function News({ src, title, category, author, date }) {
	const containerStyle = {
		position: "relative",
		display: "inline-block",
		textAlign: "left",
		maxWidth: "600px",
		width: "100%",
		borderRadius: "10px",
		overflow: "hidden",
		boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
	};

	const imgStyle = {
		width: "100%",
		display: "block",
	};

	const overlayStyle = {
		position: "absolute",
		bottom: "0",
		left: "0",
		width: "100%",
		background: "linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0))",
		color: "white",
		padding: "1rem",
	};

	const badgeStyle = {
		display: "inline-block",
		backgroundColor: "red",
		color: "white",
		fontSize: "0.75rem",
		fontWeight: "bold",
		padding: "0.25rem 0.5rem",
		borderRadius: "4px",
		marginBottom: "0.5rem",
	};

	const titleStyle = {
		margin: "0 0 0.5rem 0",
		fontSize: "1.5rem",
		fontWeight: "bold",
	};

	const metaStyle = {
		fontSize: "0.8rem",
		opacity: 0.8,
	};

	return (
		<Box style={{ textAlign: "center", marginBottom: "2rem" }}>
			<div style={containerStyle}>
				<img src={src} alt={title} style={imgStyle} />
				<div style={overlayStyle}>
					<span style={badgeStyle}>{category}</span>
					<h2 style={titleStyle}>{title}</h2>
					<div style={metaStyle}>
						by {author} — {date}
					</div>
				</div>
			</div>
		</Box>
	);
}

export default News;
