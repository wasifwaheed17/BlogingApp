import React from 'react'
import styles from "@/styles/dashboard.module.css"
const Dashboard = (props) => {
  return (
    <>
    <div>
     <div className={styles.ws}>
        <h1>

       {props.title}
        </h1>
        </div> 
    </div>
    </>
  )
}

export default Dashboard
