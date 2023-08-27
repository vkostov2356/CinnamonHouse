/* eslint-disable no-unused-vars */
import { GiCupcake } from "react-icons/gi";
import styles from "./NavBar.module.css";
import PropTypes from "prop-types";
import { RiMenuLine, RiMenuUnfoldFill } from "react-icons/ri";
import { GoHome } from "react-icons/go";
import { IoBookOutline } from "react-icons/io5";
import { PiGameControllerLight } from "react-icons/pi";
import { CiLocationOn } from "react-icons/ci";
import { BsPersonPlus, BsCart2 } from "react-icons/bs";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function NavBar({ sticky, background, top, inView, height }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleIsOpen() {
    setIsOpen(!isOpen);
  }

  return (
    <nav
      className={styles.navBar}
      style={
        !inView && {
          position: sticky,
          top: top,
          backgroundColor: background,
          height: height,
        }
      }
    >
      <a
        href="#"
        className={styles.logoBig}
        style={inView ? { alignItems: "flex-start" } : { alignItems: "center" }}
      >
        <div className={styles.logo}>
          <GiCupcake />
        </div>
        <div className={styles.textLogo}>
          <h3>Cinnamon house</h3>
          {inView && <p>The best since 2001</p>}
        </div>
      </a>
      <button className={styles.navMenu} onClick={handleIsOpen}>
        {isOpen ? <RiMenuUnfoldFill /> : <RiMenuLine />}
      </button>

      <div
        className={styles.sideNav}
        style={
          isOpen
            ? { transform: " translateX(0%)" }
            : { transform: " translateX(100%)" }
        }
      >
        <NavLink to="/">
          <span>
            <GoHome /> Home Page
          </span>
        </NavLink>
        <NavLink to="/catalog">
          <span>
            <IoBookOutline />
            Catalog
          </span>
        </NavLink>
        {/* <NavLink to="/game">
          <span>
            <PiGameControllerLight />
            Win a prize
          </span>
        </NavLink> */}
        <NavLink to="/cart">
          <span>
            <BsCart2 />
            Order
          </span>
        </NavLink>
        <NavLink to="/location">
          <span>
            <CiLocationOn />
            Location
          </span>
        </NavLink>
        <NavLink to="/careers">
          <span>
            <BsPersonPlus />
            Careers
          </span>
        </NavLink>
      </div>
    </nav>
  );
}

NavBar.propTypes = {
  sticky: PropTypes.string,
  background: PropTypes.string,
  top: PropTypes.number,
  height: PropTypes.string,
  inView: PropTypes.bool,
};
