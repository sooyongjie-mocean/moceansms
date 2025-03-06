import { useState } from "react";

function Nav() {
  const [fix, setFix] = useState(false);
  const [scrollPos, setScrollPos] = useState(12);
  const [showNavLinks, setNavLinks] = useState(true);
  function handleNavVisibility() {
    console.log("Setting nav bois");
    setNavLinks((showNavLinks) => !showNavLinks);
  }
  function setFixed() {
    // console.log("Checking scroll 🎠");
    if (window.scrollY >= 240) setFix(true);
    else setFix(false);
    setNavLinks(true);
  }

  window.addEventListener("scroll", setFixed);
  function resetNav(wot) {
    document.getElementById(wot).scrollIntoView({ behavior: "smooth" });
    setTimeout(() => {
      setNavLinks((showNavLinks) => !showNavLinks);
    }, 50);
  }
  return (
    <nav className={`navbar ${fix ? "onscroll" : ""}`}>
      <div className="navbar-left">
        <h3>Mocean</h3>
      </div>
      <div className={`navbar-center ${showNavLinks ? "hidden" : ""}`}>
        <ul>
          <li>
            <a onClick={() => resetNav("hero")}>Home</a>
            {/* <Link to="/">Home</Link> */}
          </li>
          <li>
            <a onClick={() => resetNav("feature-summary")}>Features</a>
          </li>
          <li>
            <a onClick={() => resetNav("footer")}>Contact Us</a>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <a href="https://dashboard.moceanapi.com/login">
          <span>Log in</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="20px"
            viewBox="0 -960 960 960"
            width="20px"
            fill="#fff"
          >
            <path d="M478.09-135.87v-83h263.04v-522.26H478.09v-83h263.04q34.48 0 58.74 24.26 24.26 24.26 24.26 58.74v522.26q0 34.48-24.26 58.74-24.26 24.26-58.74 24.26H478.09Zm-79.42-164.65-58.89-58.41 79.57-79.57H135.87v-83h283.48l-79.57-79.57 58.89-58.41L577.91-480 398.67-300.52Z" />
          </svg>
        </a>
        <a href="https://broadcast.moceansms.com/user/new">Sign up</a>
        <button onClick={handleNavVisibility}>
          <svg
            className="ham-icon"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M3 14.4883V12.7592H17.3388V14.4883H3ZM3 7.72917V6H17.3388V7.72917H3Z" />
          </svg>
        </button>
      </div>
    </nav>
  );
}

export default Nav;
