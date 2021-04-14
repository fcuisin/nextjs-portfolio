import styles from "../styles/Header.module.css";
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

export default function Header() {

  const scrollToSection = () => {
    const href = event.target.dataset.redirect;
    const offsetTop = document.querySelector(`${href}`).offsetTop;
    window.scrollTo({
      top: offsetTop,
      behavior: "smooth"
    });
  }

  return (
    <>
    <div className={styles.header}>
      <div className={styles.leftContainer}>
        <div className={`${styles.arrow} ${styles.bounce}`}>
          <FontAwesomeIcon icon={faArrowDown} />
        </div>
        <a data-redirect="#about" onClick={scrollToSection} className={styles.logo}>&#60;fc.  &#62;</a>
      </div>
      <div className={styles.rightContainer}>
        <h1 className={styles.title}>Hi, I'm Ferdinand Cuisin</h1>
        <p>Junior Web Developper</p>
      </div>
    </div>
    </>
  )
}
