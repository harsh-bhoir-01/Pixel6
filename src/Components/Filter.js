// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { filteredUserInfo } from "../Utils/UserInfoSlice";
// import UserInfo from "./UserInfo";

// const Filter = (props) => {
//   const { input, data } = props;
//   const userData = useSelector((store) => store.user?.userInfo || []);
//   const FilteredData = useSelector((store) => store.user?.filterInfo || []);
//   const [city, setCity] = useState("");
//   const [gender, setGender] = useState("");

//   const dispatch = useDispatch();

//   const handleFilterChange = (value, input) => {
//     if (input === "City") {
//       console.log(value + "city");
//       setCity(value);
//     }
//     if (input === "Gender") {
//       console.log(value + "gender");
//       setGender(value);
//     }
//   };

//   useEffect(() => {
//     let newFilteredData = FilteredData.Length === 0 ? UserInfo : FilteredData;
//     let data;
//     console.log("useEffect");
//     //console.log(city + " " + gender);
//     if (city !== "" && gender !== "") {
//       console.log("first if");
//       data = newFilteredData.filter(
//         (user) => user?.address?.city === city && user.gender === gender
//       );
//       /* setnewfilteredData(
//         newFilteredData.filter(
//           (user) => user?.address?.city === city && user.gender === gender
//         )
//       ); */
//     } else if (city === "" && gender === "") {
//       console.log("second if");
//       data = userData;
//       /* setnewfilteredData(userData); */
//     } else {
//       console.log("third if");
//       if (city === "") {
//         data = newFilteredData.filter((user) => user.gender === gender);
//         /* setnewfilteredData(
//           newFilteredData.filter((user) => user.gender === gender)
//         ); */
//       } else if (gender === "") {
//         data = newFilteredData.filter((user) => user?.address?.city === city);
//         /*  setnewfilteredData(
//           newFilteredData.filter((user) => user?.address?.city === city)
//         ); */
//       }
//     }
//     dispatch(filteredUserInfo(data));

//     // Only dispatch if there's a change to prevent infinite loops
//   }, [city, dispatch]);

//   return (
//     <div className="font-sans">
//       <select
//         onChange={(e) => handleFilterChange(e.target.value, input)}
//         className="border border-black rounded-md px-1 py-1 text-red-700 font-medium text-sm"
//       >
//         <option value="" disabled hidden>
//           {input}
//         </option>
//         <option value="">Select All</option>
//         {data.map((d) => (
//           <option key={d} value={d}>
//             {d?.toUpperCase()}
//           </option>
//         ))}
//       </select>
//     </div>
//   );
// };

// export default Filter;
