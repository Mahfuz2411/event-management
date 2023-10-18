import { Link, useNavigate } from "react-router-dom";
import { BsGoogle } from "react-icons/bs";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  updateProfile,
} from "firebase/auth";
// import app from "../firebase/firebase.config";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState, useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
import auth from "../firebase/firebase.config";

// const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const SignUp = () => {
  const [user, setUser] = useState({
    fullName: "",
    imgLink: "",
    email: "",
    password: "",
  });

  const passValidator = (password) => {
    if (password.length < 6) {
      return false;
    }
    let hasUpperCase = false;
    for (let i = 0; i < password.length; i++) {
      if (password[i] >= "A" && password[i] <= "Z") {
        hasUpperCase = true;
        break;
      }
    }
    if (!hasUpperCase) {
      return false;
    }
    const specialCharacters = "!@#$%^&*()_+{}[]:;<>,.?~\\-";
    let hasSpecialChar = false;
    for (let i = 0; i < password.length; i++) {
      if (specialCharacters.includes(password[i])) {
        hasSpecialChar = true;
        break;
      }
    }
    if (!hasSpecialChar) {
      return false;
    }
    return true;
  }

  const navigate = useNavigate();
  const { signInWithGoogle, createUser } = useContext(AuthContext);

  const handleOnChangeInp = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleCreateAccount = (e) => {
    e.preventDefault();
    if(!passValidator) {
      return toast("Password requirements not met.");
    }
    createUser(user.email, user.password)
      .then((userCredential) => {
        updateProfile(auth.currentUser, {
          displayName: user.fullName,
          photoURL: user.imgLink,
        })
          .then(() => {
            navigate("/");
            toast("SignUp successful");
          })
          .catch((error) => {
            toast(error.message);
          });
      })
      .catch((error) => toast("Error occured"));
  };

  const handleSingUpWithGoogle = () => {
    signInWithGoogle()
      .then((userCredential) => {
        navigate("/");
        toast("SignUp successful");
      })
      .catch((error) => toast("Error occured"));
  };

  return (
    <>
      <div className="w-full max-w-sm lg:max-w-3xl mx-auto hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="w-full px-5 text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={handleCreateAccount}>
              <div className="form-control">
                <input
                  type="text"
                  name="fullName"
                  value={user.fullName}
                  placeholder="Full Name"
                  className="input input-bordered"
                  onChange={handleOnChangeInp}
                  required
                />
              </div>
              <div className="form-control">
                <input
                  type="text"
                  placeholder="Image Link"
                  onChange={handleOnChangeInp}
                  className="input input-bordered"
                  name="imgLink"
                  value={user.imgLink}
                  required
                />
              </div>
              <div className="form-control">
                <input
                  name="email"
                  value={user.email}
                  onChange={handleOnChangeInp}
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <input
                  name="password"
                  value={user.password}
                  onChange={handleOnChangeInp}
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">
                  Sign Up
                </button>
                <label className="label">
                  <Link to="/signin" className="label-text-alt link link-hover">
                    Already have an Account?
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

export default SignUp;
