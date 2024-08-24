"use client";
import styles from "./Solutions.module.css";
import Image from "next/image";
import ars from "@/public/ars.png";




export default function Solution(){
    return(
        <div>
           <div className={styles.solutions}>
            <div className={styles.paragraph}>
            
            <p>Seamless Solutions,<br/>Brighter futures </p>
            </div>
            <div className={styles.listbutton}>
           
           <div className={styles.list}><ul><li>Full collaborative interaction with surroundings</li>
           <li>Autonomous navigation</li>
           <li>Ultra-compact design</li>
           <li>Top speed of 2.0 m/s</li>
           </ul>
           </div>
          
           <div className={styles.button}>
           <button>Download factsheet</button>
           </div>
           </div>
           <div className={styles.ars_bg}>
            <Image src="/assets/ars.png" alt="ars" width={400} height={400}/>
           </div>
           </div>

           {/* <div className={styles.about_bg}>
        <Image src={bg_image} alt="ARS" fill style={{ objectFit: "cover" }} />
      </div> */}
           
        </div>
    )
}