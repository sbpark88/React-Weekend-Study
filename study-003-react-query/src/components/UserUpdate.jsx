import React, { useCallback, useState } from "react";
import { useUserMutation, useUserQuery } from "../hooks/useUsers";

function UserUpdate() {
  const query = useUserQuery(3);
  const { data, isSuccess, isError } = query;
  const [userName, setUserName] = useState("");

  const userMutation = useUserMutation();
  const onInputChange = useCallback((event) => {
    setUserName(event.target.value);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    userMutation.mutate({ user: { username: userName }, id: data?.id });
  };

  return (
    <div
      style={{
        backgroundColor: "#aaa",
      }}
    >
      <h1>Update User</h1>
      <p style={{ fontSize: "20px" }}>User Name: {data?.username}</p>
      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" onChange={onInputChange} />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default UserUpdate;
