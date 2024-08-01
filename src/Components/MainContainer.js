import React from "react";
import Title from "./Title";
import UserProfile from "./UserProfile";

const MainContainer = () => {
  return (
    <div className="border border-red-700 rounded-lg mx-24 mb-10 shadow-lg shadow-black ">
      <Title />
      <UserProfile />
    </div>
  );
};

export default MainContainer;
