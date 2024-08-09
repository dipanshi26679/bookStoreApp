import Login from "./Login"
import { useForm, } from "react-hook-form";



function Contact() {

    
  const {
    register,
    handleSubmit,
    // watch,
    // formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);





  return (
    <div>
         <div className=" flex h-screen items-center justify-center ">
        <div  className=" w-[500px]" >
        <div >
          <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
            {/* if there is a button in form, it will close the modal */}
            
          <h1 className=' font-bold text-3xl' >Contact Us</h1>
          
          {/* name */}
          <div className=" mt-5 space-y-2">
            <span>Name</span>
            <br />
            <input
            {...register("name", { required: true })}
            required
              type="text"
              placeholder="Enter your fullname"
              className=" py-1 w-[400px] px-3 border rounded-md outline-none"
            />
          </div>


          {/* email */}
          <div className=" mt-5 space-y-2">
            <span>Email</span>
            <br />
            <input
            required
              type="email"
              placeholder="Enter your email"
              className=" w-[400px] py-1 px-3 border rounded-md outline-none"
            />
          </div>

          {/* message */}
          <div className=" mt-6 space-y-2">
            <span>Message</span>
            <br />
            <input
            required
              type="text"
              placeholder="Type your message"
              className=" py-1 h-auto px-3 w-[400px]  border rounded-md outline-none"
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
    </div>
  )
}

export default Contact