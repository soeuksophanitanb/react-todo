import { useState } from "react";
import Todo from "./components/layouts/Todo";

const App = () => {
  // active buttons
  const onClick = (index) => {
    setBtnActive(index);
  };

  // mark the list
  const onMark = (id, index) => {
    console.log("is mark");
    setMark(index);
    setTodo(
      todo.map((item) => (item.id === id ? { ...item, isDone: "Done" } : item))
    );
    console.log(todo, id);
  };

  // undo mark list
  const onRedo = (id, index) => {
    console.log("redo");
    setMark(index);
    setTodo(
      todo.map((item) => (item.id === id ? { ...item, isDone: "Doing" } : item))
    );
    console.log(todo, id);
  };

  // edit list active or not
  const onEdit = (title, id) => {
    console.log(title, id);
    setEdit(!isEdit);
  };

  // edit the list on click
  const onSubEdit = (title, id) => {
    if (!title || !title.trim()) return;
    console.log(title, id);
    setTodo(
      todo.map((item) => (item.id === id ? { ...item, title: title } : item))
    );
    setPop(!isPop);
  };

  // delete the list we want to delete
  const onDelete = (id) => {
    setTodo(todo.filter((item) => item.id !== id));
  };

  // submit form to create todo list
  const onSubmit = (value) => {
    if (!value || !value.trim()) return;
    setTodo([...todo, { id: todo.length + 1, title: value, isDone: "Doing" }]);
  };

  // filter todo lis
  const onFilter = (title) => {
    title === "All Todo" ? setFiltered("") : setFiltered(title);
  };

  // state for list todo
  const [todo, setTodo] = useState([
    { id: 1, title: "Buy Milk", isDone: "Doing" },
    { id: 2, title: "Go to School", isDone: "Done" },
    { id: 3, title: "Go Home", isDone: "Doing" },
    { id: 4, title: "Go to Market", isDone: "Done" },
    { id: 5, title: "C num pang", isDone: "Doing" },
  ]);

  // filter state
  const [filtered, setFiltered] = useState("");

  const todoFilter = filtered
    ? todo.filter((li) => li.isDone == filtered)
    : todo;

  // state management
  const btnTitle = ["All Todo", "Doing", "Done"];
  const [btnActive, setBtnActive] = useState(0);
  const [isMark, setMark] = useState(-1);
  const [isEdit, setEdit] = useState(true);
  const [isPop, setPop] = useState(false);

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
        onRedo={onRedo}
        onSubEdit={onSubEdit}
        isPop={isPop}
        setPop={() => setPop(!isPop)}
      />
    </>
  );
};

export default App;
