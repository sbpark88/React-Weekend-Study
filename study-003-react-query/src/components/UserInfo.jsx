import React from "react";
import { useUserQuery } from "../hooks/useUsers";

function UserInfo() {
  const query = useUserQuery();
  const { data, isSuccess, isError } = query;

  return (
    <div
      style={{
        backgroundColor: "#eae",
      }}
    >
      <h1>User Information</h1>
      {isSuccess && <h2>{data.name}</h2>}
      {isError && <p>Data fetching 에 실패했습니다.</p>}
    </div>
  );
}

export default UserInfo;
