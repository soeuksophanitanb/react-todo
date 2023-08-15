import { day, month } from "../../js/date";
import Button from "../Button";
import Input from "../Input";
import List from "../List";
import Title from "../Title";

const Todo = ({
  btnTitle,
  onClick,
  btnActive,
  todo,
  onFilter,
  onSubmit,
  onDelete,
  isMark,
  onMark,
  onEdit,
  isEdit,
  onRedo,
  onSubEdit,
  isPop,
  setPop,
}) => {
  const today = new Date();

  return (
    <section className="todo margin-y">
      <div className="date flex">
        <Title
          isBig={true}
          title={today.getDate() + " " + month(today.getMonth())}
        />
        <Title isBig={false} title={day(today.getDay())} />
      </div>
      <div className="flex gap margin-y">
        {btnTitle.map((item, index) => (
          <Button
            key={item}
            onClick={() => onClick(index)}
            title={item}
            index={index}
            btnActive={btnActive}
            onFilter={() => onFilter(item)}
          />
        ))}
      </div>
      <List
        todo={todo}
        onDelete={onDelete}
        isMark={isMark}
        onMark={onMark}
        onEdit={onEdit}
        onRedo={onRedo}
        onSubEdit={onSubEdit}
        isPop={isPop}
        setPop={setPop}
      />
      <Input onSubmit={onSubmit} isEdit={isEdit} />
    </section>
  );
};

export default Todo;
