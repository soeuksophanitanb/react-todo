const List = ({ todo, onDelete, isMark, onMark, onEdit }) => {
  return (
    <ul className="todo-items margin-y">
      {todo.map((item, index) => (
        <li
          onClick={() => onEdit(item.title, item.id)}
          key={item.id}
          className={
            isMark === index
              ? "flex space-between align-center is-done"
              : "flex space-between align-center "
          }
        >
          <p className="normal-title white-color">{item.title}</p>
          <div className="wrap-icon flex gap center-x-y">
            <i
              onClick={() => onMark(item.id, index)}
              className="fa-solid fa-square-check "
            ></i>
            <i
              onClick={() => onDelete(item.id)}
              className="fa-solid fa-delete-left "
            ></i>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default List;
