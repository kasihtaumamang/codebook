import React from "react";
import { useLocation, useSearchParams } from "react-router-dom";

export const ProductList = () => {
	const [searchParams] = useSearchParams();
	const location = useLocation();

	return (
		<main>
			<div className="component">ProductList</div>
		</main>
	);
};
