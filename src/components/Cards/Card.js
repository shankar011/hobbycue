


import React from 'react';
import styles from "./card.module.css";
import Image from 'next/image';
import People from "../../../public/images/peoples.png";
import Shopping from "../../../public/images/shopping.png";
import Loaction from "../../../public/images/locations.png";
import Calender from "../../../public/images/calender.png";


const Card = () => {
    return (
        <div className={styles.card}>
            <div className='d-flex justify-content-evenly mt-5 mb-5 flex-wrap'>
                <div className="card" style={{width:"35rem"}}>
                    <div className="card-body">
                        <span><Image src={People} alt='img'/> <span className={styles.title}>People</span> </span>  
                        <p className="card-text">Find a teacher, coach, or expert for your hobby interest in your locality.  Find a partner, teammate, accompanist or collaborator.</p>
                        <a href="#">Connect</a>
                    </div>
                </div>
                <div className="card" style={{width:"35rem"}}>
                <div className="card-body">
                        <span><Image src={Loaction} alt='img'/> <span className={styles.title}>Place</span> </span>  
                        <p className="card-text">Find a class, school, playground, auditorium, studio, shop or an event venue.  Book a slot at venues that allow booking through hobbycue.</p>
                        <a href="#" >Meet up</a>
                    </div>
                </div>
                
            </div>

            <div className='d-flex justify-content-evenly mt-5 flex-wrap'>
                <div className="card" style={{width:"35rem"}}>
                    <div className="card-body">
                        <span><Image src={Shopping} alt='img'/> <span className={styles.title}>Product</span> </span>  
                        <p className="card-text">Find equipment or supplies required for your hobby.  Buy, rent or borrow from shops, online stores or from community members.</p>
                        <a href="#">Get it</a>
                    </div>
                </div>
                <div className="card" style={{width:"35rem"}}>
                <div className="card-body">
                        <span><Image src={Calender} alt='img'/> <span className={styles.title}>Program</span> </span>  
                        <p className="card-text">Find events, meetups and workshops related to your hobby.  Register or buy tickets online.</p>
                        <a href="#" >Attend</a>
                    </div>
                </div>
                
            </div>
          

        </div>
    )
}

export default Card