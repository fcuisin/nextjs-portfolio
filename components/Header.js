import styles from "../styles/Header.module.css"

export default function Header() {
  return (
    <>
    <div className={styles.header}>
      <div className={styles.leftContainer}>
        <a href="/" className={styles.logo}>&#60;fc.  &#62;</a>
      </div>
      <div className={styles.rightContainer}>
        <h1 className={styles.title}>Hi, I'm Ferdinand Cuisin</h1>
        <p>Junior Web Developper</p>
      </div>
    </div>
    <div className={styles.header}>
    </div>
    </>
  )
}
