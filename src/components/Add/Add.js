

import React from 'react';
import styles from "./add.module.css";
import Image from 'next/image';
import Adds from "../../../public/images/add.png"
const Add = () => {
  return (
    <div className={styles.Add}>
            <div>
                <div className="card" style={{width:"90%", marginLeft:"3rem"}}>
                    <div className="card-body">
                        <span><Image src={Adds} alt='img'/> <span className={styles.title}>People</span> </span>  
                        <p className="card-text">Are you a teacher or expert?  Do you sell or rent out equipment, venue or event tickets?  Or, you know someone who should be on hobbycue?  Go ahead and Add your Own page</p>
                        <a href="#">Add New</a>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Add