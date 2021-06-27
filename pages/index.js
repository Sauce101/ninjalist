import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../comps/Navbar";
import Footer from "../comps/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda aut
          ad optio sed totam ab, reprehenderit eum corporis error aliquid porro
          earum labore id! Saepe alias quod hic magnam nobis!
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta
          nostrum minima, consequuntur ea libero corrupti nemo obcaecati. Animi
          voluptates, fuga dicta iusto iste tenetur delectus, sint minus
          distinctio molestias eius!
        </p>
        <Link href="/ninjas">
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
      </div>
    </>
  );
}
