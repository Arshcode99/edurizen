import React from 'react';
import styles from './components.module.css';
import logo from '../public/logo.png';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
    function NavFunc() {
        var x = document.getElementById("menu");
        if (x.style.display === "flex") {
          x.style.display = "none";
        } else {
          x.style.display = "flex";
        }
      }
    return (
        <>
            <header className={styles.header}>
                <div>
                    <Link href='/'>
                    <Image src={logo} priority="true" alt='Arshcode' className={styles.logo} />
                    </Link>
                </div>
                <div className={styles.menubox} id='menu'>
                    <Link href="/" className={styles.a}>Home</Link>
                    <Link href="/schools" className={styles.a}>Schools</Link>
                    <Link href="/reviews" className={styles.a}>Reviews</Link>
                    <Link href="/about" className={styles.a}>About</Link>
                    <Link href="/support" className={styles.a}>Support</Link>
                    <Link href="/account" className={styles.active}>Account</Link>
                </div>
                <div className={styles.menuIcon} onClick={NavFunc}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </div>
            </header>
        </>
    );
}

export default Navbar;
