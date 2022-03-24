import Link from "next/link";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      {/* <div className={`container${styles.content}`}> */}
      <div className="container">
        <div className={styles.content}>
          <nav className={styles.navigation}>
            <Link href="/">Home</Link>
            <Link href="/about">About Us</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/shop">Shop</Link>
          </nav>

          <div className={styles.copyright}>
            <p>Copyright@GuitarLA2022</p>
            <p>All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
