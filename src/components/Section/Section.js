import React from 'react';
import styles from "./sec.module.css";
import Image from 'next/image';
import Groups from "../../../public/images/groups.png";
import Google from "../../../public/images/google.png";
import Fb from "../../../public/images/fb.png";


const Section = () => {
    return (
        <div className={styles.Sec}>

            <div className={styles.left}>
                <h1>Explore your <span className={styles.hobby}>hobby </span>or <span className={styles.passion}>passion</span> </h1>
                <p className={styles.para}>Sign-in to interact with a community of fellow hobbyists and an eco-system of experts, teachers, suppliers, classes, workshops, and places to practice, participate or perform. Your hobby may be about visual or performing arts, sports, games, gardening, model making, cooking, indoor or outdoor activities…</p>
                <p className={styles.para_1}>If you are an expert or a seller, you can Add your Listing and promote yourself, your students, products,  services or events.  Hop on your hobbyhorse and enjoy the ride.</p>
                <Image src={Groups} alt='img' />
            </div>

            <div className={styles.right}>
                <div>
                <span className={styles.sign}>Sign In</span>
                <span className='ms-4' >Join In</span>

                </div>
               
                <p> <Image src={Google}/>Continue with Google</p>
                <p> <Image src={Fb}/> Continue with Facebook</p>
              
                <input placeholder='Email' /> <br/>
                <input className='mt-3' placeholder='Password' /> <br/>
                <label>By continuing, you agree to our <b>Terms of Service</b>  and <b>Privacy Policy</b> .</label>

                <button className='mt-5'>Agree and Continue</button>
            </div>

        </div>
    )
}

export default Section