import img1 from "../assets/band1.jpg";
import img2 from "../assets/celebrete.jpg";
import img3 from "../assets/indoor.jpg";
import img4 from "../assets/band2.jpg";

const Slider = () => {
  return (
    <>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <div
            className="relative before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-slate-950/80 z-0 grid place-items-center w-full min-h-screen"
            style={{
              background: `url('${img1}')`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="relative z-10 w-full max-w-lg mx-auto py-8 px-4 flex flex-col gap-5">
              <h1 className="text-4xl font-bold text-center text-white">Lorem ipsum dolor sit.</h1>
              <p className="text-base font-normal text-center text-gray-50">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Necessitatibus ipsa vero beatae suscipit similique! Iste at
                optio, voluptas iure libero, molestiae adipisci excepturi ea
                maxime eligendi ipsum quam animi! Quas!
              </p>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
        <div
            className="relative before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-slate-950/80 z-0 grid place-items-center w-full min-h-screen"
            style={{
              background: `url('${img2}')`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="relative z-10 w-full max-w-lg mx-auto py-8 px-4 flex flex-col gap-5">
              <h1 className="text-4xl font-bold text-center text-white">Lorem ipsum dolor sit.</h1>
              <p className="text-base font-normal text-center text-gray-50">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Necessitatibus ipsa vero beatae suscipit similique! Iste at
                optio, voluptas iure libero, molestiae adipisci excepturi ea
                maxime eligendi ipsum quam animi! Quas!
              </p>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
        <div
            className="relative before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-slate-950/80 z-0 grid place-items-center w-full min-h-screen"
            style={{
              background: `url('${img3}')`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="relative z-10 w-full max-w-lg mx-auto py-8 px-4 flex flex-col gap-5">
              <h1 className="text-4xl font-bold text-center text-white">Lorem ipsum dolor sit.</h1>
              <p className="text-base font-normal text-center text-gray-50">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Necessitatibus ipsa vero beatae suscipit similique! Iste at
                optio, voluptas iure libero, molestiae adipisci excepturi ea
                maxime eligendi ipsum quam animi! Quas!
              </p>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
        <div
            className="relative before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-slate-950/80 z-0 grid place-items-center w-full min-h-screen"
            style={{
              background: `url('${img4}')`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="relative z-10 w-full max-w-lg mx-auto py-8 px-4 flex flex-col gap-5">
              <h1 className="text-4xl font-bold text-center text-white">Lorem ipsum dolor sit.</h1>
              <p className="text-base font-normal text-center text-gray-50">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Necessitatibus ipsa vero beatae suscipit similique! Iste at
                optio, voluptas iure libero, molestiae adipisci excepturi ea
                maxime eligendi ipsum quam animi! Quas!
              </p>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;
