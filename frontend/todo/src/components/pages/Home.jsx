//REACT ROUTER
import { Link } from "react-router-dom";

//ICONS
import { FiArrowDown } from "react-icons/fi";

//MODULO CSS DA PAGINA HOME
import styles from "../pages/Home.module.css";

//IMG
import home from "../../assets/home.svg";

const Home = ({ currentPageTodo }) => {
  return (
    <div className={styles.container}>
      <img src={home} alt="Logo Home" />

      <div className={styles.add_todo}>
        <h1>Seja bem-vindo!</h1>

        <h3>Adicionar tarefa</h3>
        <p>
          <FiArrowDown />
        </p>

        <span>{<Link to="/todo">Adicionar</Link>}</span>
      </div>
    </div>
  );
};

export default Home;
