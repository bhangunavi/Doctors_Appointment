import React, { useState } from "react";
import { assets } from "../assets/assets";
const MyProfile = () => {
  const [userData, setUserData] = useState({
    name: "XYZ ABC",
    email: "xyz@gmail.com",
    phone: "+9192*******8",
    image: assets.profile_pic,
    address: {
      street: "Street 1",
      city: "City 1",
      state: "State 1",
      country: "Country 1",
      pincode: "123456",
    },
    gender: "Male",
    dob: "1995-0X-XX",
  });
  const [isEdit, setIsEdit] = useState(true);
  return (
    <div className="max-w-lg flex flex-col gap-2 text-sm">
      <img
        className="w-36 border border-black rounded-xl"
        src={userData.image}
        alt=""
      />
      {isEdit ? (
        <input
          className="bg-gray-50 text-3xl font-medium max-w-60 mt-4"
          type="text"
          value={userData.name}
          onChange={(e) =>
            setUserData((prev) => ({ ...prev, name: e.target.value }))
          }
        />
      ) : (
        <p className="font-medium text-3xl text-neutral-800 mt-4">
          {userData.name}
        </p>
      )}
      <hr className="bg-zinc-400 h-[1px] border-none" />

      <div>
        <p className="text-neutral-500 underline mt-3">Contact Information </p>
        <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700">
          {" "}
          <p className="font-medium">Email Id:</p>
          <p className="text-blue-400 ">{userData.email}</p>
          <p className="font-medium ">Phone:</p>
          {isEdit ? (
            <input
              className="bg-gray-100  max-w-52 border rounded mt-1"
              type="text"
              value={userData.phone}
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, phone: e.target.value }))
              }
            />
          ) : (
            <p className="text-blue-400">{userData.phone}</p>
          )}
          <p className="font-medium ">Address:</p>
          {isEdit ? (
            <p>
              <input
                className="bg-gray-50 border rounded mt-1"
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    address: { ...prev.address, street: e.target.value },
                  }))
                }
                type="text"
                placeholder="Street"
              />
              <br />
              <input
                className="bg-gray-50 border rounded mt-1"
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    address: { ...prev.address, city: e.target.value },
                  }))
                }
                type="text"
                placeholder="City"
              />
              <br />
              <input
                className="bg-gray-50 border rounded mt-1"
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    address: { ...prev.address, state: e.target.value },
                  }))
                }
                type="text"
                placeholder="State"
              />
              <br />
              <input
                className="bg-gray-50 border rounded mt-1"
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    address: { ...prev.address, country: e.target.value },
                  }))
                }
                type="text"
                placeholder="Country"
              />
              <br />
              <input
                className="bg-gray-50 border rounded mt-1"
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    address: { ...prev.address, pin: e.target.value },
                  }))
                }
                type="text"
                placeholder="PIN Code"
              />

              <input type="text" />
            </p>
          ) : (
            <p className="text-gray-500">
              {userData.address.street}
              <br />
              {userData.address.city}
              <br />
              {userData.address.state}
              <br />
              {userData.address.pin}
            </p>
          )}
        </div>
      </div>
      <div>
        <p className="text-neutral-500 underline mt-3">BASIC INFORMATION</p>
        <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700">
          <p className="font-medium">Gender:</p>
          {isEdit ? (
            <select
              className="max-w-20 bg-gray-100"
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, gender: e.target.value }))
              }
              value={userData.gender}>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          ) : (
            <p className="text-gray-400">{userData.gender}</p>
          )}
          <p className="font-medium">Birthday:</p>
          {isEdit ? (
            <input
              className="max-w-28 bg-gray-100"
              type="date"
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, dob: e.target.value }))
              }
              value={userData.dob}
            />
          ) : (
            <p className="text-gray-400">{userData.dob}</p>
          )}
        </div>
      </div>
      <div className="mt-10">
        {isEdit ? (
          <button
            className="border border-primary px-8 py-2 rounded-full text-primary hover:bg-primary hover:text-white transition duration-300"
            onClick={() => setIsEdit(false)}>
            Save Information
          </button>
        ) : (
          <button
            className="border border-primary px-8 py-2 rounded-full text-primary hover:bg-primary hover:text-white transition duration-300"
            onClick={() => setIsEdit(true)}>
            Edit
          </button>
        )}
      </div>
    </div>
  );
};

export default MyProfile;
