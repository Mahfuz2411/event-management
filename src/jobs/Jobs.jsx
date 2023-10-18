import { useEffect } from "react";
import { useState } from "react";
import JobCard from "./JobCard";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/Mahfuz2411/jsonplaceholder/main/jobs.json"
    )
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
  return (
    <div className="container py-10 px-5 mx-auto flex flex-col gap-5">
      <p className="text-base text-slate-600">
        At CulturalCanvas, our hiring policy is driven by a commitment to
        diversity, inclusivity, and the pursuit of excellence. We believe that a
        diverse team brings together a wide range of perspectives, experiences,
        and talents, which ultimately enhances our ability to create and manage
        community and cultural events that resonate with people from all walks
        of life. Here are some key aspects of our hiring policy:
      </p>

      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          Diversity and Inclusion:
        </div>
        <div className="collapse-content">
          <p>
            We actively seek talent from different backgrounds, cultures, and
            regions. We believe that diversity in our workforce fosters
            creativity and innovation, and it helps us better understand and
            cater to the diverse needs of our event attendees and clients.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          Equal Opportunity Employer:
        </div>
        <div className="collapse-content">
          <p>
            CulturalCanvas is an equal opportunity employer. We do not
            discriminate on the basis of race, color, religion, gender, sexual
            orientation, gender identity or expression, national origin, age,
            genetic information, disability, or veteran status. We are committed
            to providing a fair and equitable hiring process for all candidates.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          Global Perspective:
        </div>
        <div className="collapse-content">
          <p>
            We value a global perspective in our team. By hiring talent from
            more than one country, we bring in a wealth of international
            experiences and cultural insights. This is especially important in
            the context of managing community and cultural events that often
            involve cross-cultural interactions and celebrations.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          Language Diversity:
        </div>
        <div className="collapse-content">
          <p>
            Our events may cater to diverse linguistic communities. Having team
            members who speak multiple languages allows us to effectively
            communicate with event attendees and clients, ensuring that everyone
            feels welcome and understood.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          Creativity and Innovation:
        </div>
        <div className="collapse-content">
          <p>
            CulturalCanvas aims to push the boundaries of creativity and
            innovation in the events industry. By embracing a variety of
            cultural backgrounds and perspectives, we can introduce fresh ideas
            and approaches that set our events apart and keep them engaging and
            relevant.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          Networking Opportunities:
        </div>
        <div className="collapse-content">
          <p>
            Our global team members bring with them extensive networks and
            connections in various regions. This network diversity can be
            invaluable in terms of partnerships, collaborations, and reaching
            out to different communities for event participation.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          Cultural Sensitivity:
        </div>
        <div className="collapse-content">
          <p>
            When managing cultural events, it is essential to have team members
            who understand the nuances and sensitivities of different cultures.
            Hiring individuals from multiple countries helps us maintain
            cultural authenticity and respect.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          Customer Satisfaction:
        </div>
        <div className="collapse-content">
          <p>
            By having team members from different countries, we can provide a
            more personalized and culturally informed experience to our clients
            and event attendees. This contributes to higher customer
            satisfaction and loyalty.
          </p>
        </div>
      </div>
      <div>
        <p>
          In summary, CulturalCanvas&apos;s hiring policy prioritizes diversity,
          inclusivity, and a global perspective as essential components of our
          success. We believe that our commitment to hiring from more than one
          country enriches our organization and allows us to deliver exceptional
          and culturally relevant experiences through our community and cultural
          events.
        </p>
      </div>
      <div>
        <h2 className="text-center font-bold text-4xl">WE ARE HIRING</h2>
        <div className="container w-full mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-5 py-10">
          {jobs.map((job) => (
            <JobCard key={job.id} job={job}></JobCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Jobs;
