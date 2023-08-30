//REACT ROUTER
import { Link } from "react-router-dom";

//MODULE CSS DA NAVBAR
import styles from "../layout/Navbar.module.css";

//ICONE DA NAV BAR
import logo from "../../assets/notebook.png";

const Navbar = () => {
  return (
    <nav className={styles.container}>
      <div className={styles.logo}>
        <Link to="/">
          <img src={logo} alt="Logo Agenda" />
        </Link>
      </div>
      <ul className={styles.nav_items}>
        <li className={styles.item}>
          <Link to="/"></Link>
        </li>
        <li className={styles.item}>
          <Link to="/">Home</Link>
        </li>
        <li className={styles.item}>
          <Link to="/todo">Todo</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
