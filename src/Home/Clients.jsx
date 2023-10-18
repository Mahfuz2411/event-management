import React from "react";
import Marquee from "react-fast-marquee";
import Client from "./Client";
import { useState } from "react";
import { useEffect } from "react";

const Clients = () => {
  const [client, setClient] = useState([]);
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/Mahfuz2411/jsonplaceholder/main/comments.json"
    )
      .then((res) => res.json())
      .then((data) => setClient(data));
  });
  return (
    <div className="container mx-auto py-10 px-5 flex flex-col gap-6">
      <h2 className="text-center font-bold text-4xl">Out Client's Comment</h2>
      <Marquee>
        <div className="flex justify-center items-center">
          {client &&
            client.map((data) => <Client key={data.id} data={data}></Client>)}
        </div>
      </Marquee>
    </div>
  );
};

export default Clients;
