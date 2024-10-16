// import React from "react";
// import { Link } from "react-router-dom";
// import { specialityData } from "../assets/assets";

// const SpecialityMenu = () => {
//   return (
//     <div
//       id="speciality"
//       className="flex flex-col items-center gap-4 py-16 text-gray-800">
//       <h1 className="text-3xl font-medium">Speciality Menu</h1>
//       <p className="sm:w-1/3 text-center text-sm">
//         Simply browse through our extensive list of trusted doctors, schedule
//         your appointment hassle-free.
//       </p>
//       <div className="flex sm:justify-center gap-4 pt-5 w-full overflow-scroll">
//         {specialityData.map((item, index) => (
//           <Link
//             key={item.id} // Added unique key prop here
//             onClick={() => scrollTo(0)}
//             className="flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500"
//             to={`/doctors/${item.speciality}`}>
//             <img
//               src={item.image}
//               alt={item.speciality}
//               className="w-16 sm:w-24 mb-2"
//             />
//             <p>{item.speciality}</p>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SpecialityMenu;

import React from "react";
import { Link } from "react-router-dom";
import { specialityData } from "../assets/assets";

const SpecialityMenu = () => {
  return (
    <div
      id="speciality"
      className="flex flex-col items-center gap-4 py-16 text-gray-800">
      <h1 className="text-3xl font-medium">Speciality Menu</h1>
      <p className="sm:w-1/3 text-center text-sm">
        Simply browse through our extensive list of trusted doctors, schedule
        your appointment hassle-free.
      </p>
      <div className="flex sm:justify-center gap-4 pt-5 w-full overflow-scroll">
        {specialityData.map((item, index) => (
          <Link
            key={item.id || index} // Use item.id, fallback to index if not available
            onClick={() => scrollTo(0)}
            className="flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500"
            to={`/doctors/${item.speciality}`}>
            <img
              src={item.image}
              alt={item.speciality}
              className="w-16 sm:w-24 mb-2"
            />
            <p>{item.speciality}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SpecialityMenu;