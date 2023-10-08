import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <>
      <p>This page isn&apos;t made for you</p>
      <NavLink to="/">
        <button>Go home</button>
      </NavLink>
    </>
  );
};

export default Error;
