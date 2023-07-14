import React from "react";
import Link from "next/link";

const Page = () => {
  throw new Error("Something went wrong on about page");
  return (
    <div>
      <h1>About pages</h1>
      <Link href="/">Home</Link>
    </div>
  );
};

export default Page;
