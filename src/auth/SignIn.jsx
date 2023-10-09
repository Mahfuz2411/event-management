import { Link } from "react-router-dom";
import { BsGoogle } from "react-icons/bs";

const SignIn = () => {
  return (
    <>
      <div className="w-full max-w-sm lg:max-w-3xl mx-auto hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="w-full px-5 text-center lg:text-left">
            <h1 className="text-3xl md:text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body">
              <div className="form-control">
                <input
                  type="email"
                  placeholder="Email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <input
                  type="password"
                  placeholder="Password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Log In</button>
                <label className="label">
                  <Link to="/signup" className="label-text-alt link link-hover">
                    Create an account?
                  </Link>
                </label>
              </div>
            </form>
            <p  className="label-text-alt text-center">---or---</p>
            <button className="btn btn-primary mx-7 my-3">
              <BsGoogle /> Sign Up with Google
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
