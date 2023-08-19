import React from 'react'
import styles from '@/styles/NavBar.module.css'


const NavBar = () => {
  return (
    <>
      <nav className={styles.tul}>
        <div className={styles.ha}>
          <h3  ><a className={styles.uy} href='/'>Personal Bloging App</a></h3>
        </div>
        <div className={styles.tulo}>

          <div className={styles.wa}>

            <h5 >wasif waheed</h5>
          </div>
          <div >
            <h5><a className={styles.lin} href="./login">
              login</a><a className={styles.lin} href="./signup">
              /Signup</a></h5>
              
          </div>
        </div>
      </nav>


    </>
  )
}
export default NavBar;



