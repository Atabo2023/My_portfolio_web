// import React from "react";
// import backImg from "../src/Images/backImg.jpg";

// const ProjectCard = ({ title, image, link }) => {
//   return (
//     <a
//       href="https://airgatecampuspage.netlify.app/"
//       target="_blank"
//       rel="noopener noreferrer"
//       className="relative block bg-white shadow-lg rounded-xl overflow-hidden group transform transition hover:scale-105"
//     >
//       {/* Project Image */}
//       <img
//         src={backImg} 
//         alt={title}
//         loading="lazy"
//         onError={(e) => {
//           e.currentTarget.src = "/projects/fallback.png"; // fallback image in public/projects/
//         }}
//         className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover group-hover:scale-110 transition-transform duration-500"
//       />

//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
//         <span className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition">
//           View Project
//         </span>
//       </div>

//       {/* Title */}
//       <div className="p-4">
//         <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800 text-center">
//           {title}
//         </h3>
//       </div>
//     </a>
//   );
// };

// export default ProjectCard;
