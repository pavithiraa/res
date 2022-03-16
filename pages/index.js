import Head from 'next/head'
import Image from 'next/image'
import Featured from '../component/Featured'
import PizzaList from '../component/PizzaList'
import styles from '../styles/Home.module.css'
import axios from "axios"
import AddButton from '../component/AddButton'
import Add from '../component/Add'
import { useState } from 'react'


export default function Home({pizzaList,admin}) {
  const [close,setClose] = useState(true);
  return (
    <div className={styles.container}>
      
      <Head>
        <title>Pizza Restaurant</title>
        <meta name="description" content="Best Pizza Shop in Town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured/>
      {admin && (<AddButton setClose={setClose}/>)}
      <PizzaList pizzaList={pizzaList}/> 
      {!close && <Add setClose={setClose}/>}
    </div>
  )
}


export const getServerSideProps = async (ctx) =>{
  const myCookie = ctx.req?.cookies || "";
  let admin =false;

  if(myCookie.token === process.env.TOKEN){
    admin =true;
  }
  const  res= await axios.get("http://localhost:3000/api/products");
  return{
    props: {
      pizzaList: res.data,
      admin
    },
  };
};