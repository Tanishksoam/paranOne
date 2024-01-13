import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const user = useSelector((state) => state.bazar.UserInfo);
  console.log("user--->", user);
  return (
    <div className="w-screen flex flex-col gap-5 items-center py-32">
      <h1 className=" font-titleFont text-5xl font-semibold">Profile</h1>
      <div className=" xs:w-4/5 w-1/2 flex xs:flex-col items-center justify-between xs:gap-4 ">
        <div>
          <img className=" xs:w-24 w-64 rounded-full" src={user.image} alt="" />
        </div>
        <div className=" ">
          <div className="flex flex-col gap-4 text-xl">
            <h2>
              <span className="text-xl font-semibold">Username</span> :{" "}
              {user.name}
            </h2>
            <h2>
              <span className="text-xl font-semibold">Email</span> :{" "}
              {user.email}
            </h2>
            <h2>
              <span className="text-xl font-semibold">id</span> : {user._id}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
