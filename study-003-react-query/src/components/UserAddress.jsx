import React from "react";
import { useUserQuery } from "../hooks/useUsers";

function UserAddress() {
  const query = useUserQuery();
  const { data, isSuccess, isError } = query;

  return (
    <div>
      <h1>User Address</h1>
      {isSuccess && <p>{data.address.street}</p>}
    </div>
  );
}

export default UserAddress;
