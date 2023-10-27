import { useQuery } from "@tanstack/react-query";
import SingleItem from "./SingleItem";
const Items = ({ items }) => {
	const { isLoading, data } = useQuery({
		queryKey: ["tasks"],
		queryFn: () => customFetch.get("/"),
	});

	if (isLoading) {
		return <p style={{ marginTop: "1rem" }}>Loading...</p>;
	}
	return (
		<div className="items">
			{items.map((item) => {
				return <SingleItem key={item.id} item={item} />;
			})}
		</div>
	);
};
export default Items;
