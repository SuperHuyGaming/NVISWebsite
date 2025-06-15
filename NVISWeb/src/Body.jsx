import * as React from "react";
import Box from "@mui/material/Box";
import News from "./News.jsx";

function Body() {
	const newsItems = [
		{
			src: "/assets/GingerCat.jpg",
			title: "Pretty Ginger Cat Seen On Highway!",
			category: "ANIMALS",
			author: "Huy Truong",
			date: "June 19, 2020",
		},
		{
			src: "/assets/VietnamFlag.png",
			title: "Vietnam Flag Raised On Independence Day!",
			category: "NEWS",
			author: "John Doe",
			date: "September 2, 2023",
		},
		{
			src: "/assets/FatherDay.png",
			title: "Happy Father's Day Celebrations Worldwide!",
			category: "EVENTS",
			author: "Emma Smith",
			date: "June 16, 2024",
		},
	];

	return (
		<Box>
			<h1 style={{ textAlign: "center" }}>News and Updates</h1>
			<div>
				{newsItems.map((item, index) => (
					<News
						key={index}
						src={item.src}
						title={item.title}
						category={item.category}
						author={item.author}
						date={item.date}
					/>
				))}
			</div>
		</Box>
	);
}

export default Body;
