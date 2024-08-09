import { Link } from "react-router-dom";
import { useForm, } from "react-hook-form";

function Login() {
  const {
    register,
    handleSubmit,
    // watch,
    // formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
            {/* if there is a button in form, it will close the modal */}
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </Link>
          <h3 className="font-bold text-lg">Login</h3>

          {/* email */}
          <div className=" mt-5 space-y-2">
            <span>Email</span>
            <br />
            <input
             {...register("email", { required: true })}
              type="email"
              required
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
            <button type="submit" className=" bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
              Login
            </button>
            <p>
              Not registered?{" "}
              <span className="underline text-blue-500 cursor-pointer">
                {" "}
                <Link to="/signup">Signup</Link>
              </span>
            </p>
          </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
