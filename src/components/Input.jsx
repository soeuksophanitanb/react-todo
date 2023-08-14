import { useRef } from "react";

const Input = ({ onSubmit }) => {
  const inputRef = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(inputRef.current.value);
  };

  return (
    <form className="form gap" onSubmit={handleSubmit}>
      <input type="text" className="btn border" ref={inputRef} />
      <button type="submit" className="btn btn-primary normal-title">
        Add Todo
      </button>
    </form>
  );
};

export default Input;
