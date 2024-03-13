import React from 'react';
import Image from 'next/image';
import styles from "./style.module.css";
import Cummunites from "../../../public/images/cummunity.png"

const Cummunity = () => {
    return (
        <div className={styles.main}>
            <h1>Your<span className={styles.hobby}>Hobby,</span>Your <span className={styles.passion}>Community</span></h1>
            <a href="#">Add New</a>
            <div className={styles.social}>
                <Image src={Cummunites} alt='img' />
            </div>
        </div>
    )
}

export default Cummunity