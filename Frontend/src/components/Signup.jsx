import { Link } from "react-router-dom"
import Login from "./Login"
import { useForm, } from "react-hook-form";



function Signup() {

  const {
    register,
    handleSubmit,
    // watch,
    // formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);



  return (
    <div className=" flex h-screen items-center justify-center ">
        <div  className=" w-[600px]" >
        <div className="modal-box">
          <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
            {/* if there is a button in form, it will close the modal */}
            <Link to='/' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </Link>
          <h3 className="font-bold text-lg">Signup</h3>
          
          {/* name */}
          <div className=" mt-5 space-y-2">
            <span>Name</span>
            <br />
            <input
            {...register("name", { required: true })}
            required
              type="text"
              placeholder="Enter your fullname"
              className=" py-1 w-80 px-3 border rounded-md outline-none"
            />
          </div>


          {/* email */}
          <div className=" mt-5 space-y-2">
            <span>Email</span>
            <br />
            <input
            {...register("email", { required: true })}
            required
              type="email"
              placeholder="Enter your email"
              className=" w-80 py-1 px-3 border rounded-md outline-none"
            />
          </div>

          {/* password */}
          <div className=" mt-6 space-y-2">
            <span>Password</span>
            <br />
            <input
            {...register("password", { required: true })}
            required
              type="password"
              placeholder="Enter your password"
              className=" py-1 w-80 px-3 border rounded-md outline-none"
            />
          </div>

          {/* button */}
          <div className=" flex justify-around mt-4">
            <button className=" bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">Signup</button>
            <p >
              Have Account? <span   className="underline text-blue-500 cursor-pointer"> <button className=" underline" onClick={()=>document.getElementById("my_modal_3").showModal()}>Login</button></span>
              </p>
              <Login/>
            
          </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Signup