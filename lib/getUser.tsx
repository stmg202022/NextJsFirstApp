import React from "react";

const GetUser = async (userId: string) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );

  if (!res.ok) throw new Error("The user is not responding.");

  return res.json();
};

export default GetUser;
