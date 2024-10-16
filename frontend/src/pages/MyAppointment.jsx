import React, { useContext } from "react";
import { Appcontext } from "../context/Appcontext";

const MyAppointment = () => {
  const { doctors } = useContext(Appcontext);
  return (
    <div>
      <p className="pb-3 mt-12 text-4xl font-semibold text-zinc-600 border-b-2 border-gray-300">
        My Appointment
      </p>

      <div>
        {doctors.slice(0, 3).map((item, index) => (
          <div
            className="grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-2 border-b-2 "
            key={index}>
            <div>
              <img
                className="w-32 h-32 border rounded object-scale-down"
                src={item.image}
                alt=""
              />
              {/* {console.log(item.image)} Everything is fine in this*/}
            </div>
            <div className="flex-1 text:sm text-zinc-500">
              <p className="text-nuetral-800 font-semibold">{item.name}</p>
              <p className="text-xs font-semibold mt-1">{item.speciality}</p>
              <p className="text-xs font-semibold mt-1">
                <span className="text-sm text-nuetral-700 font-medium">
                  Date & Time:
                </span>
                XX JULY 20XX | XX:XX
              </p>
            </div>
            <div></div>
            <div className="flex flex-col gap-2 justify-end">
              <button className="text:sm text-stone-500 text-center sm:min-w-48 py-2 border border-black-80 rounded hover:bg-primary hover:text-white transition-all duration-300">
                Pay Online
              </button>
              <button className="text:sm text-stone-500 text-center sm:min-w-48 py-2 border border-black-80 rounded hover:bg-red-500 hover:text-white transition-all duration-300">
                Cancel Appointment
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyAppointment;
