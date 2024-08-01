const useGetFilteredData = (data, city, genderValue) => {
  let filteredData;
  if (city !== "" && genderValue !== "") {
    filteredData = data.filter(
      (user) => user?.address?.city === city && user.gender === genderValue
    );
  } else if (city === "" && genderValue === "") {
    filteredData = data;
  } else {
    if (city === "") {
      filteredData = data.filter((user) => user.gender === genderValue);
    } else if (genderValue === "") {
      filteredData = data.filter((user) => user?.address?.city === city);
    }
  }
  return filteredData;
};

export default useGetFilteredData;
