import React from 'react'
import styles from '@/styles/Blog.module.css'
import 'bootstrap/dist/css/bootstrap.css'
const Blogs = () => {
  return (
    <>
    <div>
        <div >
        <h1 className= {styles.wq} >My Blogs</h1>
        </div>
      <div className= {`${styles.mo} card mb-3`}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src="/14451fcffeebdf14ab11c3c47b37ee9b.jpg" className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
        <a className={styles.qa} href ="/">Delete</a>
        <a className={styles.qd} href ="/">Edit</a>
      </div>
    </div>
  </div>
</div>
    </div>
    </>
  )
}

export default Blogs
