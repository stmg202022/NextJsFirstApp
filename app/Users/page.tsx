import React from "react";
import Link from "next/link";

import { Metadata } from "next";

import getAllUsers from "@/lib/getAllUsers";

export const metadata: Metadata = {
  title: "Users Page",
};

const UsersPage = async () => {
  const usersData: Promise<User[]> = getAllUsers();

  const users = await usersData;

  const content = (
    <section>
      <h2>User Data </h2>
      <Link href="/">Back to Home</Link>
      <br />

      {users.map((user) => {
        return (
          <>
            <p key={user.id}>
              <Link href={`/Users/${user.id}`}>{user.name}</Link>
            </p>
            <br />
          </>
        );
      })}
    </section>
  );

  return content;
};

export default UsersPage;
