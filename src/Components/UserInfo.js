import React from "react";

const UserInfo = ({ data }) => {
  const { id, firstName, lastName, age, company, address, image } = data;

  return (
    <div className="font-sans grid grid-cols-12 py-1 border-t-2 border-gray-400 text-sm">
      <div className="flex items-center space-x-14 pl-6 col-span-4">
        <h1>{id}</h1>
        <img className="h-8 " alt="profile-pic" src={image} />
        <h1>{`${firstName} ${lastName}`}</h1>
      </div>
      <div className="flex items-center pl-72 justify-start space-x-20 col-span-8">
        <h1>{age}</h1>
        <h1 className="w-[115px]">{company?.title}</h1>
        <h1>{`${address?.city}, ${address?.country}`}</h1>
      </div>
    </div>
  );
};

export default UserInfo;
