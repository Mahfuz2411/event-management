import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

const Details = () => {
  const { id } = useParams();
  const [service, setService] = useState({});
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/Mahfuz2411/jsonplaceholder/main/services.json"
    )
      .then((res) => res.json())
      .then((data) => setService(data.find((obj) => obj.id == id)));
  }, [id]);
  console.log(service);
  return (
    <div
      className="relative before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-slate-950/80 z-0 flex flex-col justify-between items-center w-full min-h-screen"
      style={{
        background: `url('${service.img}')`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="relative z-10 ">
        <h2>{service.type}</h2>
        <p>{service.description}</p>
      </div>
      <div className="relative z-10">

      </div>
    </div>
  );
};

export default Details;


