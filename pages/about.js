import Image from "next/image";
import Layout from "../components/Layout";
import styles from "../styles/About.module.css";

const About = () => {
  return (
    <Layout page="About">
      <main className="container">
        <h2 className="headingS">Music unites us</h2>
        <div className={styles.content}>
          <Image
            layout="responsive"
            width={600}
            height={500}
            src="/img/nosotros.jpg"
            alt="Electric guitar photo"
          />
          <div>
            <p>
              So how did the classical Latin become so incoherent? According to
              McClintock, a 15th century typesetter likely scrambled part of
              Ciceros De Finibus in order to provide placeholder text to mockup
              various fonts for a type specimen book.
            </p>
            <p>
              It is difficult to find examples of lorem ipsum in use before
              Letraset made it popular as a dummy text in the 1960s, although
              McClintock says he remembers coming across the lorem ipsum passage
              in a book of old metal type samples. So far he has nott relocated
              where he once saw the passage, but the popularity of Cicero in the
              15th century supports the theory that the filler text has been
              used for centuries.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default About;
