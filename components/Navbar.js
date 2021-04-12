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
      console.log(visible)
    } else {
      setVisible('none');
    }
  }

  const toggleNav = () => {
    setActive(!isActive);
    console.log(isActive)
  }

  useEffect(() => {

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)

  });

  return (

    <>
      <nav className={styles.nav} style={{...display}}>

        <div className={styles.slice} onClick={toggleNav}>
          <div className={styles.line} id="line1"></div>
          <div className={styles.line} id="line2"></div>
          <div className={styles.line} id="line3"></div>
        </div>

        <ul className={`${styles.navLinks} ${isActive ? styles.open : ""}`}>
          <li>
            <Link href="#about">
              <a>about</a>
            </Link>
          </li>
          <li>
            <Link href="#skills">
              <a>skills</a>
            </Link>
          </li>
          <li>
            <Link href="#projects">
              <a>projects</a>
            </Link>
          </li>
        </ul>
      </nav>
    </>

  )
}
