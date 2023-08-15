import { useState } from "react";
import Todo from "./components/layouts/Todo";

const App = () => {
  const onClick = (index) => {
    setBtnActive(index);
  };

  const onMark = (id, index) => {
    console.log("is mark");
    setMark(index);
    setTodo(
      todo.map((item) => (item.id === id ? { ...item, isDone: "Done" } : item))
    );
    console.log(todo, id);
  };

  const onEdit = (title, id) => {
    console.log(title, id);
    setEdit(!isEdit);
  };

  const onDelete = (id) => {
    setTodo(todo.filter((item) => item.id !== id));
  };

  const onSubmit = (value) => {
    if (value === "") return;
    setTodo([...todo, { id: todo.length + 1, title: value, isDone: "Doing" }]);
  };

  const onFilter = (title) => {
    title === "All Todo" ? setFiltered("") : setFiltered(title);
  };

  const [todo, setTodo] = useState([
    { id: 1, title: "Buy Milk", isDone: "Doing" },
    { id: 2, title: "Go to School", isDone: "Done" },
    { id: 3, title: "Go Home", isDone: "Doing" },
    { id: 4, title: "Go to Market", isDone: "Done" },
    { id: 5, title: "C num pang", isDone: "Doing" },
  ]);

  const [filtered, setFiltered] = useState("");

  const todoFilter = filtered
    ? todo.filter((li) => li.isDone == filtered)
    : todo;

  const btnTitle = ["All Todo", "Doing", "Done"];
  const [btnActive, setBtnActive] = useState(0);
  const [isMark, setMark] = useState(-1);
  const [isEdit, setEdit] = useState(true);
  return (
    <>
      <Todo
        btnActive={btnActive}
        btnTitle={btnTitle}
        onClick={onClick}
        todo={todoFilter}
        onFilter={onFilter}
        onSubmit={onSubmit}
        onDelete={onDelete}
        isMark={isMark}
        onMark={onMark}
        onEdit={onEdit}
        isEdit={isEdit}
      />
    </>
  );
};

export default App;
