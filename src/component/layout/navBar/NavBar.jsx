import React, { useEffect, useState } from "react";
import "./style.scss";
import { Link } from "react-router-dom";

// importing assets
import navlogo from "../../../assets/img/logo-nav.png";


// imports from react icons
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import { BiHomeCircle } from "react-icons/bi";
import { BsCart4 } from "react-icons/bs";
import { LiaTshirtSolid } from "react-icons/lia";
import { SiMaildotru } from "react-icons/si";
import { FiSearch } from "react-icons/fi";
import { BsBag } from "react-icons/bs";
import { BsPerson } from "react-icons/bs";

import UserOptions from "../userOptions/UserOptions";

import { useSelector } from "react-redux";



const NavBar = () => {
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const [scrolled, setScrolled] = useState(false);
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    if (menu === false) {
      setMenu(true);
    } else {
      setMenu(false);
    }
  };

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <>
    <nav className="nav-bar">
      <div>
        <div onClick={toggleMenu}>
          {menu === false ? <AiOutlineMenu /> : <RxCross1 />}
        </div>
        <div className="logo-nav">
          <img src={navlogo} alt="" />
        </div>
        <div className="nav-icon">
          <Link to="/">
            <BiHomeCircle />
          </Link>
          <Link to="/cart">
            <BsCart4 />
          </Link>
          <Link to="/products">
            <LiaTshirtSolid />
          </Link>
          <Link to="/contact">
            <SiMaildotru />
          </Link>
          <Link to="/search">
            <FiSearch />
          </Link>
          <Link to="/orders">
            <BsBag />
          </Link>
          <Link to={isAuthenticated ? "/account" : "/login"}>
            <BsPerson />
          </Link>
        </div>
      </div>
    </nav>
    <div className={menu === false ? 'nav-slider-none' : 'nav-slider'}>
      <ul>
        <li ><Link onClick={toggleMenu} to='/'>Home</Link></li>
        <li ><Link onClick={toggleMenu} to={isAuthenticated ? '/account' : '/login'}>{isAuthenticated ? user.name : 'Login'}</Link></li>
        <li ><Link onClick={toggleMenu} to='/search'>Search</Link></li>
        <li ><Link onClick={toggleMenu} to='/cart'>Cart</Link></li>
        <li ><Link onClick={toggleMenu} to='/orders'>orders</Link></li>
        <li ><Link onClick={toggleMenu} to='/products'>Products</Link></li>
        <li ><Link onClick={toggleMenu} to='/about'>About</Link></li>
      </ul>
    </div>

    {isAuthenticated ? <UserOptions user={user} /> : ''}
    
    </>
  );
};

export default NavBar;
