import React from "react";

const GetUserPost = async (userId: string) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
  );

  if (!res.ok) throw new Error("The user is not responding.");

  return res.json();
};

export default GetUserPost;
