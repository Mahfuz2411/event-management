import { Link } from "react-router-dom";
import { BsGoogle } from "react-icons/bs";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const SignIn = () => {
  const [user, setUser] = useState(null);

  const handleSingUpWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user);
        console.log("user", user);
        updateProfile(auth.currentUser, {
          displayName: user.displayName,
          photoURL: user.photoURL,
        })
          .then(() => {
            toast("Successfully logged in");
          })
          .catch((error) => {
            toast(error.message);
          });
        
      })
      .catch((error) => {
        toast(error.message);
      });
  };
  return (
    <>
      <ToastContainer />
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
            <p className="label-text-alt text-center">---or---</p>
            <button
              onClick={handleSingUpWithGoogle}
              className="btn btn-primary mx-7 my-3"
            >
              <BsGoogle /> Sign Up with Google
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
