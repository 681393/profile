import { menuItems } from "../data/menuItems";

const link = () => {
  return menuItems.map((menuItem) => (
    <li className="nav-item mx-2">
      <a className={`nav-link ${menuItem.active}`} href={menuItem.link}>
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
        <button
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarCollapse"
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
