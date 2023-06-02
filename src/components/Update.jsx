import { useLoaderData } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Update = () => {
	const user = useLoaderData()
const handleUpdate=e=>{
	e.preventDefault();
	const form=e.target;
	const name=form.name.value;
	const email=form.email.value;
	console.log(name,email)
	const updatedUser={name,email}
	fetch(`http://localhost:5000/update/${user._id}`,{
		method:'PUT',
		headers:{
			'content-type':'application/json'
		},
		body:JSON.stringify(updatedUser)
	})
	.then(res=>res.json)
	.then(data=>{
		console.log(data)
		if(data.modifiedCount>0){
			toast.success('data updated')
		}
	
	
	})
}

	return (
		<div>
			<ToastContainer/>
			
			<form onSubmit={handleUpdate}>
				Current name : {user.name}
			<input name="name" type="text" placeholder="Enter name" />
			Current email : {user.email}
			<input type="email" name="email" placeholder="enter email" />
			<button type="submit">Update</button>

			</form>
		</div>
	);
}

export default Update;
