import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { ImPriceTag } from "react-icons/im";
import { BsFillCalendarFill } from "react-icons/bs";

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
      className="pt-10 relative before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-slate-950/80 z-0 flex flex-col justify-between items-center w-full min-h-screen gap-8"
      style={{
        background: `url('${service.img}')`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className=" container mx-auto relative z-10 flex flex-col gap-4 px-4 flex-grow justify-center items-center w-full max-w-4xl">
        <h2 className="text-4xl md:text-5xl text-center font-bold text-white">
          {service.type}
        </h2>
        <p className="text-base text-center font-normal text-slate-200">
          {service.description}
        </p>
      </div>
      <div className="relative z-10 grid md:grid-cols-2 lg:grid-cols-3 w-full">
        <div className="bg-amber-800/80 text-white text-center px-5 py-8 flex flex-col gap-3 justify-center items-center">
          <FaLocationDot className="text-3xl" />
          <h4 className="text-3xl font-semibold">
            {service.featured_location}
          </h4>
          <p className="font-normal text-lg ">Featured Location</p>
        </div>
        <div className="bg-teal-800/80 text-white text-center px-5 py-8 flex flex-col gap-3 justify-center items-center">
          <BsFillCalendarFill className="text-3xl" />
          <h4 className="text-3xl font-semibold">{service.duration}</h4>
          <p className="font-normal text-lg ">Duration</p>
        </div>
        <div className="bg-purple-800/80 text-white text-center  md:col-span-2 lg:col-span-1 px-5 py-8 flex flex-col gap-3 justify-center items-center">
          <ImPriceTag className="text-3xl" />
          <h4 className="text-3xl font-semibold">
            {service.ticket_price_range}
          </h4>
          <p className="font-normal text-lg ">Price Range</p>
        </div>
      </div>
    </div>
  );
};

export default Details;
