// import { useContext, useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { assets } from "../assets/assets";
// import { Appcontext } from "../context/Appcontext";

// const Appointment = () => {
//   const { docId } = useParams();
//   const { doctors } = useContext(Appcontext);
//   const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THUR", "FRI", "SAT"];

//   const [docInfo, setDocInfo] = useState(null); //use use state
//   const [docSlots, setDocSlots] = useState([]);
//   const [slotIndex, setSlotIndex] = useState(0);
//   const [slotTime, setSlotTime] = useState("");

//   const fetchDocInfo = async () => {
//     //fetching the data
//     const docInfo = doctors.find((doc) => doc._id === docId);
//     setDocInfo(docInfo);
//   };

//   const getAvailableSlots = async () => {
//     setDocSlots([]);

//     //getting current date
//     let today = new Date();
//     for (let i = 0; i < 7; i++) {
//       //getting date with index
//       //   let currentDate = new Date(today);
//       //   currentDate.setDate(today.getDate() + i);
//       //   //settings and time with index
//       //   let endTime = new Date();
//       //   endTime.setDate(today.getDate() + i);
//       //   endTime.setHours(21, 0, 0, 0);
//       //   //setting hours
//       //   if (today.getDate() === currentDate.getDate()) {
//       //     currentDate.setHours(
//       //       currentDate.getHours() > 10 ? currentDate.getDate() + 1 : 10
//       //     );
//       //     currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
//       //   } else {
//       //     currentDate.setHours(10);
//       //     currentDate.setMinutes(0);
//       //   }
//       //   let timeSlots = [];
//       //   while (currentDate < endTime) {
//       //     let formattedTime = currentDate.toLocaleTimeString([], {
//       //       hour: "2-digit",
//       //       minute: "2-digit",
//       //     });
//       //     //add slot to array
//       //     timeSlots.push({
//       //       datetime: new Date(currentDate),
//       //       time: formattedTime,
//       //     });
//       //     //increment by 30 min
//       //     currentDate.setMinutes(currentDate.getMinutes() + 30);
//       //   }
//       //   setDocSlots((prevSlots) => [...prevSlots, ...timeSlots]);
//       // }
//     }
//   };

//   // Function to group appointments by date
//   const groupByDate = (slots) => {
//     return slots.reduce((acc, slot) => {
//       const date = slot.datetime; // Assuming datetime is a Date object
//       if (date && date instanceof Date) {
//         // Check if date is valid
//         const dateString = date.toDateString(); // Call toDateString only on valid date
//         if (!acc[dateString]) {
//           acc[dateString] = [];
//         }
//         acc[dateString].push(slot);
//       } else {
//         console.error("Invalid slot datetime:", slot.datetime);
//       }
//       return acc;
//     }, {});
//   };
//   // };
//   const groupedSlots = groupByDate(docSlots);

//   useEffect(() => {
//     fetchDocInfo();
//   }, [doctors, docId]);

//   useEffect(() => {
//     getAvailableSlots();
//   }, [docInfo]);

//   useEffect(() => {
//     console.log(docSlots);
//   }, [docSlots]);

//   return (
//     docInfo && (
//       <div>
//         appoint
//         {/* ----------------------------Doctor Detial */}
//         <div className="flex flex-col sm:flex-row gap-4 w-full max-w-4xl">
//           {/* doctor image */}
//           <div className="flex-1 flex justify-center">
//             <div className="border border-gray-500 w-48 h-52  rounded-lg overflow-hidden">
//               <img
//                 className="w-full  sm:max-w-72 rounded-lg p-2 m-1"
//                 src={docInfo.image}
//                 alt=""
//               />
//             </div>
//           </div>
//           <div className="flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt:-[-80px] sm:mt-0">
//             {/* ----------------------Doc Info ,name, degree, exp */}
//             <p className="flex-1  item-center gap-2 text-2xl font-medium text-gray-900">
//               {docInfo.name}{" "}
//               <img className="w-5" src={assets.verified_icon} alt="" />
//             </p>

//             <div className="flex items-center gap-2 text-sm mt-1 text-gray-600 ">
//               <p>
//                 {docInfo.degree} - {docInfo.speciality}
//               </p>
//               <button className="py-0.5 px-2 border text-xs rounded-full">
//                 {docInfo.experience}
//               </button>
//             </div>
//             {/* ------------------Doctor about */}
//             <div>
//               <p className="flex item-center gap-1 text-sm font-medium text-gray-900 mt-3">
//                 About <img src={assets.info_icon} alt="" />{" "}
//               </p>
//               <p className="text-sm text-gray-500 max-w-[700px] mt-1">
//                 {docInfo.about}
//               </p>
//             </div>
//             <p className="text-gray-500 font-medium mt-4 ">
//               Appointment fee:
//               <span className="text-gray-600">Rs. {docInfo.fees}</span>
//             </p>
//           </div>
//         </div>
//         {/* ---------------BOOKING SLOT */}
//         <div className="sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700">
//           <p>Booking Slots</p>
//           <div className="gap-3 flex items-center w-full overflow-x-scroll mt-4">
//             {docSlots.length > 0 &&
//               docSlots.map((item, index) => (
//                 <div
//                   onClick={() => setSlotIndex(index)}
//                   className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${
//                     slotIndex === index
//                       ? "bg-primary text-white"
//                       : "border border-gray-200"
//                   }`}
//                   key={index}>
//                   <p>{item[0] && daysOfWeek[item[0].datetime.getDay()]}</p>
//                   <p>{item[0] && item[0].datetime.getDate()}</p>
//                 </div>
//               ))}
//           </div>
//           <div>
//             {docSlots.length &&
//               docSlots[slotIndex].map((item, index) => <p></p>)}
//           </div>
//         </div>
//       </div>
//     )
//   );
// };
// export default Appointment;

import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { assets } from "../assets/assets";
import RelatedDoctor from "../components/RelatedDoctor";
import { Appcontext } from "../context/Appcontext";

const Appointment = () => {
  const { docId } = useParams();
  const { doctors } = useContext(Appcontext);
  const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  const [docInfo, setDocInfo] = useState(null);
  const [docSlots, setDocSlots] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchDocInfo();
  }, [doctors, docId]);

  useEffect(() => {
    if (docInfo) {
      getAvailableSlots();
    }
  }, [docInfo]);

  const fetchDocInfo = () => {
    setIsLoading(true);
    setError(null);
    try {
      const foundDoc = doctors.find((doc) => doc._id === docId);
      if (foundDoc) {
        setDocInfo(foundDoc);
      } else {
        throw new Error("Doctor not found");
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const getAvailableSlots = () => {
    setIsLoading(true);
    setError(null);
    try {
      const slots = [];
      const today = new Date();
      for (let i = 0; i < 7; i++) {
        const currentDate = new Date(today);
        currentDate.setDate(today.getDate() + i);
        const endTime = new Date(currentDate);
        endTime.setHours(21, 0, 0, 0);

        if (i === 0) {
          currentDate.setHours(
            currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10,
            currentDate.getMinutes() > 30 ? 30 : 0
          );
        } else {
          currentDate.setHours(10, 0, 0, 0);
        }

        const daySlots = [];
        while (currentDate < endTime) {
          daySlots.push({
            datetime: new Date(currentDate),
            time: currentDate.toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            }),
          });
          currentDate.setMinutes(currentDate.getMinutes() + 30);
        }
        slots.push(daySlots);
      }
      setDocSlots(slots);
    } catch (err) {
      setError("Failed to load available slots");
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!docInfo) return <div>No doctor information available</div>;

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <div className="flex-1 flex justify-center">
          <div className="border border-gray-500 w-48 h-52 rounded-lg overflow-hidden">
            <img
              className="w-full sm:max-w-72 rounded-lg p-2 m-1"
              src={docInfo.image}
              alt={docInfo.name}
            />
          </div>
        </div>
        <div className="flex-1 border border-gray-400 rounded-lg p-8 bg-white">
          <h2 className="flex items-center gap-2 text-2xl font-medium text-gray-900">
            {docInfo.name}
            <img className="w-5" src={assets.verified_icon} alt="Verified" />
          </h2>
          <div className="flex items-center gap-2 text-sm mt-1 text-gray-600">
            <p>
              {docInfo.degree} - {docInfo.speciality}
            </p>
            <span className="py-0.5 px-2 border text-xs rounded-full">
              {docInfo.experience}
            </span>
          </div>
          <div className="mt-4">
            <h3 className="flex items-center gap-1 text-sm font-medium text-gray-900">
              About <img src={assets.info_icon} alt="Info" />
            </h3>
            <p className="text-sm text-gray-500 mt-1">{docInfo.about}</p>
          </div>
          <p className="text-gray-500 font-medium mt-4">
            Appointment fee:{" "}
            <span className="text-gray-600">Rs. {docInfo.fees}</span>
          </p>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="font-medium text-gray-700 mb-4">Booking Slots</h3>
        <div className="w-auto">
          {/* Date selection buttons */}
          <div className="flex gap-3 overflow-x-auto pb-4">
            {docSlots.map((daySlots, index) => (
              <button
                key={index}
                onClick={() => setSlotIndex(index)}
                className={`text-center py-2 px-4 h-[60px] min-w-[100px] rounded-full text-[12px] ${
                  slotIndex === index
                    ? "bg-blue-500 text-white"
                    : "border border-gray-200 hover:bg-gray-100"
                }`}
                aria-label={`Select date: ${daySlots[0]?.datetime.toDateString()}`}>
                <p>{daysOfWeek[daySlots[0]?.datetime.getDay()]}</p>
                <p>{daySlots[0]?.datetime.getDate()}</p>
              </button>
            ))}
          </div>

          {/* Time slots grid */}
          <div className="mt-6 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2 text-[10px]">
            {docSlots[slotIndex]?.map((slot, index) => (
              <button
                key={index}
                onClick={() => setSelectedSlot(slot)}
                className={`py-2 px-4 w-[100px] rounded ${
                  selectedSlot === slot
                    ? "bg-blue-500 text-white"
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
                aria-label={`Select appointment time: ${slot.time}`}>
                {slot.time}
              </button>
            ))}
          </div>
        </div>
      </div>

      {selectedSlot && (
        <div className="mt-8 ">
          <h3 className="font-medium text-gray-700 mb-4">
            Appointment Summary
          </h3>
          <div className="text-[12px]">
            <p>Date: {selectedSlot.datetime.toDateString()}</p>
            <p>Time: {selectedSlot.time}</p>
            <p>Doctor: {docInfo.name}</p>
            <p>Fee: Rs. {docInfo.fees}</p>
          </div>
          <button
            className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            onClick={() => {
              // Implement booking logic here
              alert("Booking functionality to be implemented");
            }}>
            Confirm Booking
          </button>
        </div>
      )}

      {/* Listing Related Doctor */}
      <RelatedDoctor docId={docId} speciality={docInfo.speciality} />
    </div>
  );
};

export default Appointment;
