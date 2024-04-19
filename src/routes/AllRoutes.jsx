import { Routes, Route, Navigate } from "react-router-dom";
import {
	Home,
	ProductList,
	ProductDetail,
	Contact,
	Admin,
	Page404,
} from "../pages";

export const AllRoutes = () => {
	const user = true;
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="products" element={<ProductList />} />
				<Route path="products/:id" element={<ProductDetail />} />
				<Route path="contact" element={<Contact />} />
				<Route
					path="/admin"
					element={user ? <Admin /> : <Navigate to="/" />}
				/>
				<Route path="*" element={<Page404 />} />
			</Routes>
		</>
	);
};
