import Link from "next/link";

import styles from "../styles/Home.module.css";
import About from "./about/about";
import Contact from "./contact-us/contact";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h2>This Is A Home Page</h2>
        <ul>
          <li>
            <Link href="/about/about">About</Link>
          </li>
          <li>
            <Link href="/contact-us/contact">Contact</Link>
          </li>
          <li>
            <Link href="/services/services">Services</Link>
          </li>
        </ul>
        <About />
        <Contact />
      </main>
    </div>
  );
}
