import { useMutation, useQueryClient } from "@tanstack/react-query";

const SingleItem = ({ item }) => {
	const queryClient = useQueryClient();
	const { mutate: editTask } = useMutation({
		mutationFn: ({ taskId, isDone }) => {
			return customFetch.patch(`/${taskId}`, { idDone });
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["tasks"] });
		},
	});

	return (
		<div className="single-item">
			<input
				type="checkbox"
				checked={item.isDone}
				onChange={() => editTask({ taskId: item.id, isDone: !isDone })}
			/>
			<p
				style={{
					textTransform: "capitalize",
					textDecoration: item.isDone && "line-through",
				}}
			>
				{item.title}
			</p>
			<button
				className="btn remove-btn"
				type="button"
				onClick={() => console.log("delete task")}
			>
				delete
			</button>
		</div>
	);
};
export default SingleItem;
