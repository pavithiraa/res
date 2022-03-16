import React ,{ useState } from 'react' 
import styles from "../styles/NavBar.module.css"
import Image from 'next/image'
import { useSelector } from 'react-redux'
import Link from 'next/link'


const Navbar = () => {
  const quantity = useSelector(state => state.cart.quantity);
  const [open, setOpen] = useState(false);
  return (
    <div className={styles.container}>
     <div className={styles.item}>
     <div className={styles.callButton}>
       <Image src="/img/telephone.png" alt="" width="32" height="32"/>
       </div>
      
       <div className={styles.texts}>
         
         <div className={styles.text}>ORDER NOW!</div>
           <div className={styles.text}>78 79 70 76</div>
           
           </div>
       </div>
     <div className={styles.item}>
       <ul className={styles.list}>
         <li className={styles.listItem}>
        <Link href="/" passHref>
         Homepage
        </Link>
           </li>   
         <li className={styles.listItem}> <Link href="/admin/login" passHref>
         Product
        </Link></li>    
           
         <li className={styles.listItem}><Link href="/cart" passHref>
         Orders
        </Link></li>                   
        <li className={styles.listItem}><Link href="/contact" passHref>
         Contact
        </Link></li>  
         </ul>
         </div>
    
         <div className={styles.hamburger} onClick={() => setOpen(!open)}>
        <div className={styles.line} />
        <div className={styles.line} />
        <div className={styles.line} />
      </div>

         <ul onClick={()=>setOpen(false)} className={styles.menu} style={{ right: open ? "0px" : "-50vw" }}>
        <li className={styles.menuItem}>
        <Link href="/" passHref>
         Homepage
        </Link>
        </li>
        <li className={styles.menuItem}>
        <Link href="/admin/login" passHref>
         Product
        </Link>
        </li>
        
        <li className={styles.menuItem}>
        <Link href="/cart" passHref>
         Orders
        </Link>
        </li>
        
      </ul>
      <Link href="/cart" passHref>
      <div className={styles.item}>
       <div  className={styles.cart}>
         <Image src="/img/cart.png" alt='' width="30px" height="30px" />
         <div className={styles.counter}>{quantity}</div>
         </div>
         </div>
      </Link>        
   
      </div>
  )
}

export default Navbar