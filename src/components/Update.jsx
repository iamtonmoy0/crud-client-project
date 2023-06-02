import { useLoaderData } from "react-router-dom";

const Update = () => {
	const user = useLoaderData()
const handleUpdate=e=>{
	e.preventDefault();
	const form=e.target;
	const name=form.name.value;
	const email=form.email.value;
	console.log(name,email)
}

	return (
		<div>
			
			<form onSubmit={handleUpdate}>
				Current name : {user.name}
			<input name="name" type="text" placeholder="Enter name" />
			Current email : {user.name}
			<input type="email" name="email" placeholder="enter email" />
			<button type="submit">Update</button>

			</form>
		</div>
	);
}

export default Update;
