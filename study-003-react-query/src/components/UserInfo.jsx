import React from "react";
import { useQuery } from "@tanstack/react-query";

function UserInfo() {
  const fetchUser = async () => {
    // https://jsonplaceholder.typicode.com
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/1",
    );
    return await response.json();
  };

  const query = useQuery({
    queryKey: ["user"],
    queryFn: fetchUser,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });
  const { data, isSuccess, isError } = query;

  return (
    <div>
      <h1>User Information</h1>
      {isSuccess && <h2>{data.name}</h2>}
      {isError && <p>Data fetching 에 실패했습니다.</p>}
    </div>
  );
}

export default UserInfo;
