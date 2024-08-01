import { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUserInfo, filteredUserInfo } from "../Utils/UserInfoSlice";

const useFetchInfo = () => {
  const dispatch = useDispatch();
  const [skip, setSkip] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const city = useSelector((store) => store.user?.city);
  const genderValue = useSelector((store) => store.user?.gender);
  const data = useSelector((store) => store.user?.userInfo);
  const userInfo = useCallback(
    async (limit, skip) => {
      try {
        const response = await fetch(
          `https://dummyjson.com/users?limit=${limit}&skip=${skip}`
        );
        const json = await response.json();
        const user = json.users;
        dispatch(addUserInfo(user));
        let datanew;
        if (filteredUserInfo != null && (city === "" || genderValue === "")) {
          if (city !== "" && genderValue !== "") {
            datanew = data.filter(
              (user) =>
                user?.address?.city === city && user.gender === genderValue
            );
          } else if (city === "" && genderValue === "") {
            datanew = data;
          } else {
            if (city === "") {
              datanew = data.filter((user) => user.gender === genderValue);
            } else if (genderValue === "") {
              datanew = data.filter((user) => user?.address?.city === city);
            }
          }
          dispatch(filteredUserInfo(datanew));
        }

        if (user.length < limit) {
          setHasMore(false);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
    [dispatch]
  );

  useEffect(() => {
    userInfo(10, skip);
  }, [skip, userInfo]);

  const handleScroll = useCallback(() => {
    if (
      window.scrollY + window.innerHeight >= document.body.scrollHeight &&
      hasMore
    ) {
      setSkip((prevSkip) => prevSkip + 10);
    }
  }, [hasMore]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);
};

export default useFetchInfo;
