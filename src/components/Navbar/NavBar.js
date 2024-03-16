import React from 'react';
import Image from 'next/image';
import styles from "./nav.module.css";
import Logo from "../../../public/images/Logo.png"
import Explore from "../../../public/images/Explore.png";
import Hobbies from "../../../public/images/Hobbies.png";
import Save from "../../../public/images/save.png";
import Bell from "../../../public/images/bell.png";
import Cart from "../../../public/images/cart.png";
import Search from "../../../public/images/search.png";
import Pserach from "../../../public/images/psearch.png";
import Menu from "../../../public/images/menu.png";





const NavBar = () => {
    return (
        <div>
            <div className={styles.container}>
                <div className='mt-1'>
                    <Image src={Logo} alt="img" />
                </div>

                <div className={styles.groups}>
                    <div className="input-group w-100">
                        <input type="text" className="form-control" placeholder='Search here...' />
                        <span className={styles.search}><Image src={Search} alt='img' /> </span>
                    </div>

                </div>

                <div className={styles.selects}>
                    <Image src={Explore} alt='img' />
                    <select>
                        <option>People - Community</option>
                        <option>Places - Venues</option>
                        <option>Programs - Events</option>
                        <option>Products - Store</option>
                        <option>Blogs</option>

                    </select>
                    <Image src={Hobbies} alt='img' />

                    <select>
                        <option>Hobbies</option>
                        <option>Places - Venues</option>
                        <option>Programs - Events</option>
                        <option>Products - Store</option>
                        <option>Blogs</option>
                    </select>
                </div>
                <div className={styles.icons}>
                    <Image src={Save} alt='img' />
                    <Image src={Cart} alt='img' />
                    <Image src={Bell} alt='img' />
                </div>

                <button type="button" class="btn btn-outline-info">Sign In</button>

                <div className={styles.mview}>
                <Image src={Pserach} alt='img' />
                <Image src={Bell} alt='img' />
                <Image src={Menu} alt='img' />
                </div>
            </div>
        </div>
    )
}

export default NavBar