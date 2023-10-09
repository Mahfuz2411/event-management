const WhatWe = () => {
  return (
    <section className="container py-10 mx-auto grid gap-5 w-full">
      <h2 className="text-center font-bold text-4xl">What We Are</h2>
      <div className="grid md:grid-cols-2 m-auto gap-5 w-full">
        <div className="card bg-base-100 shadow-xl w-full">
          <div className="card-body glass">
            <h2 className="card-title">Hosted Events</h2>
            <p className="font-normal text-base text-gray-700">
              Our platform serves as a hub for an exciting array of cultural
              festivals, community gatherings, and artistic performances.
              Discover and explore events that resonate with your interests, and
              easily register or purchase tickets through our user-friendly
              interface. Whether it&apos;s a music festival, art exhibition,
              culinary showcase, or a cultural celebration, we provide a
              seamless ticketing experience to ensure you don&apos;t miss out on
              the moments that matter.
            </p>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl w-full">
          <div className="card-body glass">
            <h2 className="card-title">Event Management Services</h2>
            <p className="font-normal text-base text-gray-700">
              Beyond hosting our own events, CulturalCanvas also extends its
              expertise to help you bring your own cultural or community event
              to life. We offer professional event management services tailored
              to your unique vision and objectives. Whether you&apos;re planning
              a corporate gathering, a nonprofit fundraiser, or a local cultural
              fest, we have the experience and resources to ensure your event
              runs smoothly, from concept to execution.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWe;
