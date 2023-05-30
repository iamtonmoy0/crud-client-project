import './App.css'

function App() {

  const handleSubmit=(e)=>{
    e.preventDefault();
    const form= e.target;
    const name=form.name.value;
    const email=form.email.value;
    const user={name,email}
    console.log(name,email)
    fetch('http://localhost:3000/user',{
      method:'POST',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(user)
    })
    .then(res=>res.json())
    .then(data=>console.log(data))
    form.reset()

  }

  return (
    <>
     <form onSubmit={handleSubmit}>
      <input type="text" name="name" id="name" placeholder='enter your name' />
      <input type="email" name="email" id="email" placeholder='enter your name' />
      <input type="submit" value="add user" />


     </form>
    </>
  )
}

export default App
