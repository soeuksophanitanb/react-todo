import { useRef } from "react";

const FormEdit = ({ title, onSubEdit, id, closePop }) => {
  const editText = useRef(null);
  const handleEdit = (e) => {
    e.preventDefault();
    onSubEdit(editText.current.value, id);
    editText.current.value = "";
  };
  return (
    <div className="form-edit">
      <form onSubmit={handleEdit} className="form-edit-pop">
        <p className="normal-title">{title}</p>
        <div className="form gap">
          <input
            type="text"
            ref={editText}
            className="btn border normal-title color-black"
          />
          <div className="flex gap">
            <button type="submit" className="btn btn-primary normal-title">
              Edit
            </button>
            <button onClick={closePop} className="btn border normal-title">
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormEdit;
