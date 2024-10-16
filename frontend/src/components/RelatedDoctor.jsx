import React, { useContext, useEffect, useState } from "react"; // Import useState here
import { useNavigate } from "react-router-dom";
import { Appcontext } from "../context/Appcontext";

const RelatedDoctor = ({ speciality, docId }) => {
  const { doctors } = useContext(Appcontext);
  const navigate = useNavigate();
  const [relDoc, setRelDoc] = useState([]); // Now useState will work

  useEffect(() => {
    if (doctors.length > 0 && speciality) {
      const doctorsData = doctors.filter(
        (doc) => doc.speciality === speciality && doc._id !== docId
      );
      setRelDoc(doctorsData);
    }
  }, [doctors, speciality, docId]);

  return (
    <div className="flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10">
      <h1 className="text-3xl font-medium">Top Doctors to Book</h1>
      <p className="w-48 sm:w-1/3 mx-auto text-center text-sm text-gray-600">
        Simply browse through our extensive list of trusted doctors.
      </p>
      <div className="w-full h-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-5 px-3 sm:px-0">
        {relDoc.slice(0, 5).map((item, index) => (
          <div
            onClick={() => {
              navigate(`/appointment/${item._id}`);
              scrollTo(0, 0);
            }}
            className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500 w-full sm:max-w-72 p-2 m-1" // Adjust card height here
            key={index}>
            <img
              className="w-full h-52 object-cover object-scale-down " // Ensure the image height is sufficient
              src={item.image}
              alt={item.name}
            />
            <hr className="border-b border-gray" />
            <div className="p-4">
              <div className="flex items-center gap-2 text-sm text-green-500">
                <p className="w-2 h-2 bg-green-500 rounded-full"></p>
                <p>Available</p>
              </div>
              <p className="mt-2 text-lg font-semibold">{item.name}</p>
              <p className="text-gray-600">{item.speciality}</p>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={() => {
          navigate("/doctor");
          window.scrollTo(0, 0);
        }}
        className="px-12 py-3 mt-10 bg-blue-50 text-gray-600 rounded-full hover:bg-blue-100">
        View More
      </button>
    </div>
  );
};

export default RelatedDoctor;
