import Clients from "./Clients";
import Service from "./Service";
import Slider from "./Slider";
import WhatWe from "./WhatWe";


const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <WhatWe></WhatWe>
      <Service></Service>
      <Clients></Clients>
    </div>
  );
};

export default Home;