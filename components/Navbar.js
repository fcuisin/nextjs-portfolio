import react, {useEffect, useState} from 'react';
import styles from "../styles/Navbar.module.css";
import Link from 'next/link';

export default function Navbar() {

  const [visible, setVisible] = useState('none');
  const [isActive, setActive] = useState(false);

  const display = {
    display: `${visible}`,
  }

  const handleScroll = () => {
    if (window.scrollY > (window.innerHeight / 2)) {
      setVisible('flex');
    } else {
      setVisible('none');
    }
  }

  const toggleNav = () => {
    setActive(!isActive);
  }

  useEffect(() => {

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)

  });

  const scrollToSection = () => {
    const href = event.target.innerHTML
    const offsetTop = document.querySelector(`#${href}`).offsetTop;
    window.scrollTo({
      top: offsetTop,
      behavior: "smooth"
    });
  }

  return (

    <>
      <nav className={styles.nav} style={{...display}}>

        <div className={styles.slice} onClick={toggleNav}>
          <div className={styles.line} id="line1"></div>
          <div className={styles.line} id="line2"></div>
          <div className={styles.line} id="line3"></div>
        </div>

        <ul className={`${styles.navLinks} ${isActive ? styles.open : ""}`}>
          <li onClick={scrollToSection}>
            <a>about</a>
          </li>
          <li onClick={scrollToSection}>
            <a>skills</a>
          </li>
          <li onClick={scrollToSection}>
            <a>projects</a>
          </li>
        </ul>
      </nav>
    </>

  )
}
