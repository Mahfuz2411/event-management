import { Link, useNavigate } from "react-router-dom";
import { BsGoogle } from "react-icons/bs";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthProvider";

const SignIn = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { signInUser, signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleOnChangeInp = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignInWithEmail = (e) => {
    e.preventDefault();


    signInUser(user.email, user.password)
      .then((userCredential) => {
        const user = userCredential.user;
        toast("Singin successful");
        navigate("/");
      })
      .catch((error) => {
        toast("Error Occer");
      });
  };

  const handleSingInWithGoogle = () => {
    signInWithGoogle()
      .then((userCredential) => {
        navigate("/");
        toast("SignUp successful");
      })
      .catch((error) => toast("Error occured"));
  };

  return (
    <div className="w-full max-w-sm lg:max-w-3xl mx-auto hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="w-full px-5 text-center lg:text-left">
          <h1 className="text-3xl md:text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSignInWithEmail} className="card-body">
            <div className="form-control">
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered"
                name="email"
                value={user.email}
                onChange={handleOnChangeInp}
                required
              />
            </div>
            <div className="form-control">
              <input
                type="password"
                placeholder="Password"
                className="input input-bordered"
                name="password"
                value={user.password}
                onChange={handleOnChangeInp}
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
          <p className="label-text-alt text-center">---or---</p>
          <button
            onClick={handleSingInWithGoogle}
            className="btn btn-primary mx-7 my-3"
          >
            <BsGoogle /> Sign Up with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
