import React from 'react'
import styles from '../styles/PizzaList.module.css'
import PizzaCard from './PizzaCard'

const PizzaList = ({pizzaList}) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>THE BEST PIZZA IN TOWN</h1>
      <p className={styles.desc}>
      With Pizza Shop  it is always  a few clicks on our website or a few touches on the mobile screen is all you have to do to have that tempting, light-on-the-pocket pizza at your doorstep.
      </p>
      <div className={styles.wrapper}>
         {pizzaList.map((pizza)=>( 
         <PizzaCard  key={pizza._id}  pizza={pizza}/>
         ))}        
          </div>
    </div>
  )
}

export default PizzaList