import { ToastContainer, toast } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';
import './App.css'

function App() {

  const handleSubmit=(e)=>{
    e.preventDefault();
    const form= e.target;
    const name=form.name.value;
    const email=form.email.value;
    const user={name,email};
    console.log(name,email)
    // data fetch and method defined 
    fetch('http://localhost:5000/users',{
      method:'POST',
      headers:{
        'Content-Type' : 'application/json',
      },
      body:JSON.stringify(user)
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
    //check user insert
    if(data.insertedId){
      toast.success('user successfully added')
      form.reset()
    }
  })

  }

  return (
    <>
    <ToastContainer/>
     <form onSubmit={handleSubmit}>
      <input type="text" name="name" id="name" placeholder='enter your name' />
      <input type="email" name="email" id="email" placeholder='enter your name' />
      <input type="submit" value="add user" />


     </form>
    </>
  )
}

export default App
