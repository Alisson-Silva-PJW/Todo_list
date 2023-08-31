//REACT
import { useState, useEffect, useRef } from "react";

//AXIOS
import axios from "axios";

//MOCULE CSS DA PAGINA TODO
import styles from "../pages/Todo.module.css";

//BANCO DE DADOS
const url = "http://localhost:3000/tasks";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");
  const [category, setCategory] = useState("");
  const [priority, setPriority] = useState("");

  //Consuminto os dados do banco
  const getTodos = async () => {
    try {
      const res = await axios.get(url);
      setTodos(res.data);
    } catch (error) {
      console.log("ALGO DEU ERRADO");
    }
  };

  //UseEffct
  useEffect(() => {
    getTodos();
  }, [setTodos]);

  return (
    <div className={styles.container}>
      <h1>Lista de Tarefas</h1>
      <div className={styles.form}>
        <form>
          <div className={styles.input_group}>
            <div className={styles.input_box}>
              <label htmlFor="task">Tarefa:</label>
              <input
                id="task"
                type="text"
                name="task"
                value={task}
                placeholder="Ex: Tirar lixo"
                required
                onChange={(e) => setTask(e.target.value)}
              />
            </div>

            <div className={styles.input_box}>
              <label htmlFor="category">Categoria:</label>
              <select
                name="category"
                id="category"
                value={category}
                required
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="">Escolha a opção</option>
                <option value="Pessoal">Pessoal</option>
                <option value="Estudos">Estudos</option>
                <option value="Trabalho">Trabalho</option>
              </select>
            </div>

            <div className={styles.input_box}>
              <label htmlFor="priority">Prioridade:</label>
              <select
                name="priority"
                id="priority"
                value={priority}
                required
                onChange={(e) => setPriority(e.target.value)}
              >
                <option value="">Escolha a opção</option>
                <option value="Alta">Alta</option>
                <option value="Media">Media</option>
                <option value="Baixa">Baixa</option>
              </select>
            </div>
          </div>
          <div className={styles.btn_add}>
            <input type="submit" value="ADICIONAR" />
          </div>
        </form>
      </div>
      <div className={styles.todos}>
        {/*FAZER COM TABLE */}
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              <div className={styles.item}>
                <strong>Tarefa:</strong>
                {todo.task} <br />
                <strong>Categoria:</strong>
                {todo.category} <br />
                <strong>Prioridade:</strong>
                {todo.priority} <br />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Todo;
