import { useRef } from "react";
import "./FormEdit.css";

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
        <div className="form gap">
          <input
            type="text"
            ref={editText}
            defaultValue={title}
            autoFocus
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
