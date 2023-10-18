import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { Link } from "react-router-dom";

const Profile = () => {
  const { isLoading, user } = useContext(AuthContext);
  return (
    <>
      {!isLoading && user ? (
        <div className="container mx-auto grid place-items-center py-10 px-5 rounded-xl overflow-hidden">
          <div className="w-full max-w-md card card-side bg-base-100 shadow-2xl grid sm:grid-cols-2 gap-3">
            <figure className="relative grid place-items-center w-full h-full flex-shrink-0 bg-slate-800 min-h-16">
              <span className="absolute block w-full h-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-base text-white text-center z-0">
                <span>
                Can't find Image
                </span>
              </span>
              <img
                src={user.photoURL}
                alt={user.displayName}
                className="w-full h-full object-cover relative z-10"
              />
            </figure>
            <div className="w-full card-body">
              <h2 className="card-title">{user.displayName}</h2>
              <p>{user.email}</p>
              <div className="card-actions">
                <Link to="/">
                  <button className="btn btn-primary">Home</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="fixed w-screen h-screen top-0 left-0 grid place-items-center bg-white/50">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      )}
    </>
  );
};

export default Profile;
