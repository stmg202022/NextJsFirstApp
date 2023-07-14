import React from "react";
import styles from "./styles.module.css";
// import { Metadata } from "next";

import Header from "./header";

// export const metadata: Metadata = {
//   title: "About Page",
//   description: "This is about page....",
// };

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <nav>About NavBar</nav>
      <main className={styles.main}>{children}</main>
    </>
  );
}
