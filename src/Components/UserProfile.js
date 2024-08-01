import React from "react";
import UserInfo from "./UserInfo";
import { useSelector } from "react-redux";

const UserProfile = () => {
  const data = useSelector((store) => store.user?.userInfo);
  const filteredData = useSelector((store) => store.user.filteredInfo);
  return (
    <div className="">
      {/* {data && data.map((d) => <UserInfo data={d} key={d?.id} />)} */}
      {filteredData?.length > 0
        ? filteredData.map((d) => <UserInfo data={d} key={d?.id} />)
        : data.map((d) => <UserInfo data={d} key={d?.id} />)}
    </div>
  );
};

export default UserProfile;
