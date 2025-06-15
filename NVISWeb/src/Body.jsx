import * as React from "react";
import Box from "@mui/material/Box";
import News from "./News.jsx";
function Body() {
	const [newsList, setNewsList] = useState([]);
	const srcs = [];
	for (let i = 0; i < srcs.length; i++) {
		newsList.push(<News src={srcs[i]} />);
	}

	return (
		<Box>
			<h1 style={{ textAlign: "center" }}>News and Updates</h1>
			{/* <div>{newsList}</div> */}
		</Box>
	);
}

export default Body;
