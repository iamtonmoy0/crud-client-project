import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";


const Users = () => {
	const usersData=useLoaderData();
	const [user,setUser]=useState(usersData)

	const handleDel=_id=>{
		console.log(_id)
		fetch(`http://localhost:5000/users/${_id}`,{
			method: 'DELETE',
		})
		.then(res=>res.json())
		.then(data=>{console.log(data)
		if(data.deletedCount>0){
			toast.success('deleted success')
			const remaining = user.filter(u => u._id !== _id);
			setUser(remaining)
		}
	})
	}
	return (
		<div>
			<ToastContainer/>
			{user.length}
			{
				user.map(name=><p key={name._id}>{name.name} {name.email} : {name._id} <Link to={`/update/${name._id}`}> <button type="btn"> update</button> </Link> <button onClick={()=>handleDel(name._id)}>X</button></p>)
			}
		</div>
	);
}

export default Users;
