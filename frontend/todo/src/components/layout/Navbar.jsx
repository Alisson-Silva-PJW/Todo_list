//REACT ROUTER
import { Link } from "react-router-dom";

//MODULE CSS DA NAVBAR
import styles from "../layout/Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.container}>
      <Link to="/"></Link>
      <Link to="/">Home</Link>
      <Link to="/todo">Todo</Link>
    </nav>
  );
};

export default Navbar;
