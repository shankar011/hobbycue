import React from 'react';
import Image from 'next/image';
import styles from "./test.module.css"
import Quetos from "../../../public/images/quote.png";
import Track from "../../../public/images/track.png";
import Women from "../../../public/images/women.png";



const TestiMonials = () => {
    return (
        <div>
            <div className={styles.Test}>
                <div>
                    <div className="card" style={{ width: "90%", marginLeft: "3rem",backgroundColor:"#F7F5F9" }}>
                        <div className="card-body">
                            <span><Image src={Quetos} alt='img' /> <span className={styles.title}>People</span> </span>
                            <p className="card-text mt-2">In a fast growing and ever changing city like Bangalore, it sometimes becomes very difficult to find or connect with like minded people. Websites like hobbycue.com is a great service which helps me get in touch with, communicate, connect, and exchange ideas with other dancers. It also provides the extra benefit of finding products and services that I can avail, which I can be assured is going to be of great quality as it comes recommended by people of the hobbycue community. To have discussions, to get visibility, and to be able to safely explore various hobbies and activities in my city, all under one roof, is an excellent idea and I highly recommend it.</p>
                            <Image className={styles.track} src={Track} alt='img' />
                            <Image className={styles.women} src={Women} alt='img' />
                            <span className='ms-3'>Shubha Nagarajan</span>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TestiMonials