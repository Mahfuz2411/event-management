import { useEffect, useState } from "react";
import Card from "./Card";


const Service = () => {
  const [services, setServices] = useState([]);
  useEffect(() =>{
    fetch("https://raw.githubusercontent.com/Mahfuz2411/jsonplaceholder/main/services.json")
    .then(res => res.json())
    .then(data=> setServices(data))
  },[]);
  return (
    <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10 py-10">
      {
        services.map(service => <Card key={service.id} service={service}></Card>)
      }
    </div>
  );
};

export default Service;