import React from "react";

import GetUser from "@/lib/getUser";
import GetUserPost from "@/lib/getUserPost";
import { Suspense } from "react";
import UserPosts from "./component/userPosts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "User page",
};

type params = {
  params: {
    userId: string;
  };
};

const Userpage = async ({ params: { userId } }: params) => {
  const userData: Promise<User> = GetUser(userId);
  const userPostsData: Promise<Post[]> = GetUserPost(userId);

  //   const [user, userPosts] = await Promise.all([userData, userPostsData]);

  const user = await userData;

  return (
    <>
      <h2>{user.name}</h2>
      <br />
      <Suspense fallback={<h2>Loading....</h2>}>
        {/* <UserPosts posts={userPosts} /> */}
        <UserPosts promise={userPostsData} />
      </Suspense>
    </>
  );
};

export default Userpage;
