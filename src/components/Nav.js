import { menuItems } from "../data/menuItems";

const closeNavbar = () => {
  document.querySelector(".navbar-toggler").click();
};

const link = () => {
  return menuItems.map((menuItem, index) => (
    <li key={index} className="nav-item mx-2">
      <a
        className={`nav-link ${index === 0 ? "active" : ""}`}
        href={menuItem.link}
        onClick={closeNavbar}
      >
        {menuItem.item}
      </a>
    </li>
  ));
};

const Nav = () => {
  return (
    <nav
      className="navbar navbar-expand-md navbar-dark fixed-top p-0"
      id="main-nav"
    >
      <div className="container">
        <div className="ml-2">
          <svg
            width="51"
            height="41"
            viewBox="0 0 61 51"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            id="logo"
          >
            <path d="M30 8V50H20V33H10V50H0V8H10V24H20V8H30" />
            <path d="M60 8V50H35V35H45V42H50V8H60" />
          </svg>
        </div>
        <button
          className="navbar-toggler ml-auto"
          data-toggle="collapse"
          data-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav m-auto">{link()}</ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
