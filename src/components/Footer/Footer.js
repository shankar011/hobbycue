import React from 'react';
import Image from 'next/image';
import email from "../../../public/images/email.png";
import teli from "../../../public/images/telegram.png";
import yt from "../../../public/images/yt.png";
import gplus from "../../../public/images/gplus.png";
import print from "../../../public/images/print.png";
import twit from "../../../public/images/twitter.png";
import facebook from "../../../public/images/facebook.png";
import insta from "../../../public/images/insta.png";
import styles from "./style.module.css";



const Footer = () => {
  return (
    <div className={styles.foot}>
      <footer >
        <div className='d-flex justify-content-between flex-wrap'>
          <div>
            <h3>Hobbycue</h3>
            <ul>
              <li><a href='#'>About Us</a></li>
              <li><a href='#'>Our Services</a></li>
              <li><a href='#'>Work with Us</a></li>
              <li><a href='#'>FAQ</a></li>
              <li><a href='#'>Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h3>How Do I</h3>
            <ul>
              <li><a href='#'>Sign Up</a></li>
              <li><a href='#'>Add a Listing</a></li>
              <li><a href='#'>Claim Listing</a></li>
              <li><a href='#'>Post a Query</a></li>
              <li><a href='#'>Add a Blog Post</a></li>
              <li><a href='#'>Other Queries</a></li>
            </ul>
          </div>

          <div>
            <h3>Quick Links</h3>
            <ul>
              <li><a href='#'>Listings</a></li>
              <li><a href='#'>Blog Posts</a></li>
              <li><a href='#'>Shop / Store</a></li>
              <li><a href='#'>Community</a></li>

            </ul>
          </div>

          <div>
            <h3>Social Media</h3>
            <ul className={styles.social_icon}>
              <li><a href='#'><Image src={facebook} alt='img' /> </a></li>
              <li><a href='#'><Image src={twit} alt='img' /> </a></li>
              <li><a href='#'><Image src={insta} alt='img' /> </a></li>
              <li><a href='#'><Image src={print} alt='img' /> </a></li>
              <li><a href='#'><Image src={gplus} alt='img' /> </a></li>
              <li><a href='#'><Image src={yt} alt='img' /> </a></li>
              <li><a href='#'><Image src={teli} alt='img' /> </a></li>
              <li><a href='#'><Image src={email} alt='img' /> </a></li>
            </ul>

            <h3 className='mt-3'>Invite Friends</h3>
            <div className="input-group mb-3 mt-2 w-75 ms-4">
              <input type="text" class="form-control" placeholder="Email ID" aria-label="Email ID" aria-describedby="basic-addon2" />
              <span className="input-group-text" id="basic-addon2">Invite</span>
            </div>
          </div>
        </div>
        <div className={styles.copy}>
        <p>© Purple Cues Private Limited</p>

        </div>
      </footer>
    </div>
  )
}

export default Footer