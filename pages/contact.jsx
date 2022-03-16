import React from 'react'
import styles from "../styles/Contact.module.css"

export const Contact = () => {
  return (
    <div className={styles.container}> 
    
    <div className={styles.card}>
       <h1 className={styles.title}>FIND OUR RESTAURANTS</h1>
       <p className={styles.text}>
         1645 R. Don Road #304.
         <br />NewYork , 85022
         <br />(602) 867-1010
         </p>
         <p className={styles.text}>
         1645 R. Don Road #304.
         <br />NewYork , 85022
         <br />(602) 867-1010
         </p>
         <p className={styles.text}>
         1645 R. Don Road #304.
         <br />NewYork , 85022
         <br />(602) 867-1010
         </p>
       </div>
       <div className={styles.card}>
       <h1 className={styles.title}>WORKING HOURS</h1>
       <p className={styles.text}>
         MONDAY UNTIL FRIDAY
         <br /> 9:00 - 22:00
         </p>
         <p className={styles.text}>
        SATURDAY - SUNDAY
         <br /> 12:00 - 24:00
         </p>

       </div>
       </div>
  )
}


export default Contact;