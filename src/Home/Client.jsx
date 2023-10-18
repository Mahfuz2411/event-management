import React from "react";

const Client = ({ data }) => {
  return (
    <div className="card w-80 h-full bg-base-100 shadow-xl p-3 flex flex-col justify-center items-center mx-4">
      <figure className="w-full h-full max-w-[150px] max-h-[150px]">
        <img
          src={data.image}
          alt={data.name}
          className="rounded-full w-full h-full object-cover"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{data.name}</h2>
        <p>{data.comment}</p>
        <p className="underline font-semibold">{data.date}</p>
      </div>
    </div>
  );
};

export default Client;
