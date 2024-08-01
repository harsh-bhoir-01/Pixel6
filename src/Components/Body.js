import React, { useEffect, useState } from "react";
import { BsFillFunnelFill } from "react-icons/bs";
import Filter from "./Filter";
import MainContainer from "./MainContainer";
import useFetchInfo from "../Hooks/useFetchInfo";
import { useSelector, useDispatch } from "react-redux";
import {
  filteredUserInfo,
  setCity,
  setGenderValue,
} from "../Utils/UserInfoSlice";

const Body = () => {
  const data = useSelector((store) => store.user?.userInfo);
  const city = useSelector((store) => store.user?.city);
  const genderValue = useSelector((store) => store.user?.gender);
  const filteredData = useSelector((store) => store.user?.filterInfo || []);
  const [country, setCountry] = useState([]);
  const [gender, setGender] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    setCountry(Array.from(new Set(data.map((d) => d.address?.city))));
    setGender(Array.from(new Set(data.map((d) => d?.gender))));
  }, [data]);

  const handleFilterChange = (value, input) => {
    if (input === "City") {
      dispatch(setCity(value));
    }
    if (input === "Gender") {
      dispatch(setGenderValue(value));
    }
  };
  useEffect(() => {
    let newFilteredData = filteredData.length === 0 ? data : filteredData;
    var datanew;

    if (city !== "" && genderValue !== "") {
      datanew = newFilteredData.filter(
        (user) => user?.address?.city === city && user.gender === genderValue
      );
    } else if (city === "" && genderValue === "") {
      datanew = data;
    } else {
      if (city === "") {
        datanew = newFilteredData.filter((user) => user.gender === genderValue);
      } else if (genderValue === "") {
        datanew = newFilteredData.filter(
          (user) => user?.address?.city === city
        );
      }
    }

    dispatch(filteredUserInfo(datanew));
  }, [genderValue, city, dispatch]);
  useFetchInfo();

  return (
    <div className="select-none ">
      <div className="font-sans flex justify-between mx-24 py-1 mt-20  ">
        <div>
          <h1 className="text-2xl font-bold  py-6 ">Employees</h1>
        </div>
        <div className="flex space-x-4 ">
          <div>
            <BsFillFunnelFill className="text-xl text-red-700 mt-9 " />
          </div>
          <div className="mt-7">
            <div className="font-sans">
              <select
                onChange={(e) => handleFilterChange(e.target.value, "City")}
                className="border border-black rounded-md px-1 py-1 text-red-700 font-medium text-sm"
              >
                <option value="" disabled hidden>
                  City
                </option>
                <option value="">Select All</option>
                {country.map((d) => (
                  <option key={d} value={d}>
                    {d?.toUpperCase()}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="mt-7">
            <div className="font-sans">
              <select
                onChange={(e) => handleFilterChange(e.target.value, "Gender")}
                className="border border-black rounded-md px-1 py-1 text-red-700 font-medium text-sm"
              >
                <option value="" disabled hidden>
                  Gender
                </option>
                <option value="">Select All</option>
                {gender.map((d) => (
                  <option key={d} value={d}>
                    {d?.toUpperCase()}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
      <MainContainer />
    </div>
  );
};

export default Body;
