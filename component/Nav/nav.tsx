"use client";
import React from "react";
import styles from "../../Styles/nav.module.css";
import Link from "next/link";
const Nav = () => {
  return (
    <div className={styles.width}>
      <div className={styles.nav}>
        <div className={styles.logo}>
          <Link href={"/"}>todo.</Link>
        </div>
        <div>
          <ul className={styles.menu}>
            <li>
              <Link href={"/login"}>Login</Link>
            </li>
            <li>
              <Link href={"/register"}>Register</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
