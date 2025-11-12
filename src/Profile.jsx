import React from "react";
import AirvendCampusAmbassador from "../src/Images/AirvendCampusAmbassador.jpg";
import Ecomece from "../src/Images/Ecomece.jpg";
import plp from "../src/Images/plp.jpg";
import Bankist from "../src/Images/Bankist.jpg";
import Airvend1 from "../src/Images/Airvend1.jpg";
import Hng from "../src/Images/Hng.jpg";

const projects = [
  {
    id: 1,
    title: "Airvend Campus Ambassador ",
    image: AirvendCampusAmbassador,
    url: "https://www.callphoneng.com/campus-ambassador",
  },
  {
    id: 2,
    title: "E-Commerce",
    image: Ecomece,
    url: "https://victoromnifooapp.netlify.app/",
  },
  {
    id: 3,
    title: "Airvend Rebranded web app",
    image: Airvend1,
    url: "https://www.callphoneng.com/",
  },
  {
    id: 4,
    title: "HNG",
    image: Hng,
    url: "https://atabohngstage-two.netlify.app/#",
  },
  {
    id: 4,
    title: "PLP Africa",
    image: plp,
    url: "https://atabo2023.github.io/july-2025-cohort-week-8-capstone-project/",
  },
  {
    id: 4,
    title: "Bankist App",
    image: Bankist,
    url: "https://victor-dom-ui.netlify.app/",
  },
];

const Profile = () => {
  return (
    <section
      id="work"
      className="bg-gray-50 dark:bg-gray-900 py-16 px-6 transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold font-rubik text-orange-600 mb-4">
          My <span className="text-orange-600">Work</span>
        </h2>
        <p className="text-black text-2xl font-rubik mb-10">
          click any to explore.→
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center">
                <h3 className="text-white text-xl font-semibold mb-3">
                  {project.title}
                </h3>
                <button
                  onClick={() => window.open(project.url, "_blank")}
                  className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
                >
                  View Project
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Profile;
