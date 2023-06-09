import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length <= 1) return;
    onNewCategory(inputValue.trim());
    setInputValue("");
  };
  return (
    <form onSubmit={onSubmit}>
      <div className="content-search">
        <input
          type="text"
          placeholder="Buscar Gifs"
          onChange={onInputChange}
          value={inputValue}
        ></input>
        <button type="submit" className="btn-search">
          Buscar
        </button>
      </div>
    </form>
  );
};
