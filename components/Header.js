import styles from "../styles/Header.module.css";
import Link from 'next/link';

export default function Header() {

  return (
    <>
    <div className={styles.header}>
      <div className={styles.leftContainer}>
        <Link href="#about">
          <a href="#about" className={styles.logo}>&#60;fc.  &#62;</a>
        </Link>
      </div>
      <div className={styles.rightContainer}>
        <h1 className={styles.title}>Hi, I'm Ferdinand Cuisin</h1>
        <p>Junior Web Developper</p>
      </div>
    </div>
    <div className={styles.header} id="about">
      <div className={styles.leftContainer}>
        <a href="/" className={styles.logo}>_about</a>
      </div>
      <div className={styles.rightContainer}>
        <p>Passionate about helping companies to scale,
        I like to develop digital acquisition strategies to feed growth.
        I'm always on the lookout for news regarding growth hacking, UX and web development.
        </p>
      </div>
    </div>
    </>
  )
}
