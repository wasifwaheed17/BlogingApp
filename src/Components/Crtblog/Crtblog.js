import React from 'react'
import styles from "@/styles/Crtblog.module.css"
import 'bootstrap/dist/css/bootstrap.css'

const Crtblog = () => {
    return (
        <>
        <div className={styles.container}>
            <div className="mb-3">
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="New Blog Title" />
            </div>
            <div className="mb-3">
                <textarea placeholder='What is in your mind?' className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>

                <button type="button" className={`${styles.bton} btn mt-4`}>Primary</button>

            </div>
        </div>
        </>
    )
}

export default Crtblog;