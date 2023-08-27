/* eslint-disable no-unused-vars */
import styles from "./Footer.module.css";
import { GiCupcake } from "react-icons/gi";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsTiktok } from "react-icons/bs";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.socialSection}>
        <div className={styles.logoSection}>
          <div className={styles.logo}>
            <GiCupcake />
          </div>
          <div className={styles.textLogo}>
            <h3>
              Cinnamon <br /> house
            </h3>
          </div>
        </div>
        <div className={styles.socials}>
          <a className={styles.footerLink} href="#">
            <BsFacebook />
          </a>
          <a className={styles.footerLink} href="#">
            {" "}
            <BsInstagram />
          </a>
          <a className={styles.footerLink} href="#">
            {" "}
            <BsTiktok />
          </a>
        </div>

        <p className={styles.footerCopyright}>
          &copy; Copyright by
          <a
            className={styles.footerLink}
            href="https://www.linkedin.com/in/velislav-kostov-8a41731a1"
          >
            Velislav Kostov
          </a>
          .
        </p>
      </div>
      <div className={styles.footerSection}>
        <h3>Contact info</h3>
        <a
          className={styles.footerLink}
          href="https://goo.gl/maps/JADwrhrAAzbUCsmt5"
        >
          23 Vitosha Blvd. <br />
          Sofia, Bulgaria 1000
        </a>
        <a className={styles.footerLink} href="415-201-6370">
          415-201-6370
        </a>
        <a className={styles.footerLink} href="mailto:hello@CinnamonHouse.com">
          {" "}
          hello@CinnamonHouse.com
        </a>
      </div>
      <div className={styles.footerSection}>
        <h3>About us</h3>
        <a className={styles.footerLink} href="#">
          Certifications
        </a>
        <a className={styles.footerLink} href="#">
          About our team
        </a>
        <a className={styles.footerLink} href="#">
          Careers
        </a>
        <a className={styles.footerLink} href="#">
          Terms and Conditions
        </a>
      </div>
    </div>
  );
}
