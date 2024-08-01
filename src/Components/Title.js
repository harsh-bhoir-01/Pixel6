import React, { useState } from "react";
import { BiSortAlt2 } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { addUserInfo, filteredUserInfo } from "../Utils/UserInfoSlice";

const Title = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) =>
    state.user?.filteredInfo.length > 0
      ? state.user?.filteredInfo
      : state.user?.userInfo
  );
  const [ageSortBy, setAgeSortby] = useState("desc");
  const [NameSortBy, setNameSortby] = useState("desc");
  const [IdSortBy, setIdASortby] = useState("desc");

  const handleAgeSort = () => {
    let sortedData;
    if (ageSortBy === "desc") {
      sortedData = [...users].sort((a, b) => b.age - a.age);
      setAgeSortby("asc");
    } else {
      sortedData = [...users].sort((a, b) => a.age - b.age);
      setAgeSortby("desc");
    }
    dispatch(filteredUserInfo(sortedData));
  };

  const handleIdSort = () => {
    let sortedData;
    if (IdSortBy === "desc") {
      sortedData = [...users].sort((a, b) => b.id - a.id);
      setIdASortby("asc");
    } else {
      sortedData = [...users].sort((a, b) => a.id - b.id);
      setIdASortby("desc");
    }

    dispatch(filteredUserInfo(sortedData));
  };
  const handleNameSort = () => {
    let sortedData;
    if (NameSortBy === "desc") {
      sortedData = [...users].sort((a, b) =>
        b.firstName.localeCompare(a.firstName)
      );
      setNameSortby("asc");
    } else {
      sortedData = [...users].sort((a, b) =>
        a.firstName.localeCompare(b.firstName)
      );
      setNameSortby("desc");
    }

    dispatch(filteredUserInfo(sortedData));
  };

  return (
    <div className="font-sans flex py-2 select-none font-medium ">
      <div className="flex space-x-7">
        <h1 className="flex pl-6" onClick={handleIdSort}>
          ID <BiSortAlt2 className="mt-[4.5px] text-red-700 text-lg" />
        </h1>
        <h1>Images</h1>
        <h1 className="flex pl-4" onClick={handleNameSort}>
          Full Name <BiSortAlt2 className="mt-[4.5px] text-red-700 text-lg" />
        </h1>
      </div>
      <div className="flex pl-[380px] space-x-20 cursor-pointer">
        <h1 className="flex pl-4" onClick={handleAgeSort}>
          Age <BiSortAlt2 className="mt-[4.5px] text-red-700 text-lg" />
        </h1>
        <h1>Designation</h1>
        <h1 className="pl-7">Location</h1>
      </div>
    </div>
  );
};

export default Title;
