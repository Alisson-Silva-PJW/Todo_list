//REACT
import { useState, useEffect, useRef } from "react";

//AXIOS
import axios from "axios";

//MOCULE CSS DA PAGINA TODO
import styles from "../pages/Todo.module.css";

//ICONS
import { FiEdit } from "react-icons/fi";
import { FiTrash2 } from "react-icons/fi";

//BANCO DE DADOS
const url = "http://localhost:3000/tasks";

const Todo = () => {
  const ref = useRef();

  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");
  const [category, setCategory] = useState("");
  const [priority, setPriority] = useState("");
  const [taskEdit, setTaskEdit] = useState("");

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const todo = ref.current;

    if (taskEdit) {
      await axios.put(url + "/" + taskEdit.id, {
        task: todo.task.value,
        priority: todo.priority.value,
        category: todo.category.value,
      });
    } else {
      await axios.post(url, {
        task: todo.task.value,
        priority: todo.priority.value,
        category: todo.category.value,
      });
    }

    //CARREGAMENTO DINAMICO
    getTodos();

    setTaskEdit("");
    setTask("");
    setCategory("");
    setPriority("");
  };

  //DELETANDO DADOS
  const deleteTask = async (id) => {
    await axios.delete(url + "/" + id).then(() => {
      const newArray = todos.filter((todo) => todo.id !== id);

      setTodos(newArray);
    });
  };

  //USE EFFECT EDIÇÃO
  useEffect(() => {
    if (taskEdit) {
      const todo = ref.current;

      todo.task.value = taskEdit.task;
      todo.priority.value = taskEdit.priority;
      todo.category.value = taskEdit.category;
    }
  }, [taskEdit]);

  //EDITANDO DADOS DA LISTA
  const editTask = async (todo) => {
    setTaskEdit(todo);
  };

  return (
    <div className={styles.container}>
      <h1>LISTA DE TAREFAS</h1>
      <div className={styles.form}>
        <form ref={ref} onSubmit={handleSubmit}>
          <div className={styles.input_group}>
            <div className={styles.input_box}>
              <label htmlFor="task">Tarefa</label>
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
              <label htmlFor="category">Categoria</label>
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
              <label htmlFor="priority">Prioridade</label>
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
        <table>
          <thead>
            <tr>
              <th className={styles.tarefa}>TAREFA</th>
              <th className={styles.cat}>CATEGORIA</th>
              <th className={styles.pri}>PRIORIDADE</th>
              <th></th>
            </tr>
          </thead>
          {todos.map((todo) => (
            <tbody key={todo.id}>
              <tr>
                <td>{todo.task}</td>
                <td className={styles.category}>{todo.category}</td>
                <td className={styles.priority}>{todo.priority}</td>
                <td className={styles.actions}>
                  <button
                    className={styles.icon}
                    onClick={() => editTask(todo)}
                  >
                    <FiEdit />
                  </button>
                  <button
                    className={styles.icon}
                    onClick={() => deleteTask(todo.id)}
                  >
                    <FiTrash2 />
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default Todo;
