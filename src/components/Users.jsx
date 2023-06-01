import { useLoaderData } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";


const Users = () => {
	const users=useLoaderData();

	const handleDel=_id=>{
		console.log(_id)
		fetch(`http://localhost:5000/users/${_id}`,{
			method: 'DELETE',
		})
		.then(res=>res.json())
		.then(data=>{console.log(data)
		if(data.deletedCount>0){
			toast.success('deleted success')
		}
	})
	}
	return (
		<div>
			<ToastContainer/>
			{users.length}
			{
				users.map(name=><p key={name.id}>{name.name} {name.email} <button onClick={()=>handleDel(name._id)}>X</button></p>)
			}
		</div>
	);
}

export default Users;
