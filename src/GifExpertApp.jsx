import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["gato"]);

  const onAddCategory = (value) => {
    if (categories.includes(value)) return;
    // setCategories([...categories, value]); // si quieres que el nuevo valor se coloque al al final
    setCategories([value, ...categories]); // si quieres que el nuevo valor se coloque al principio
  };

  return (
    <>
      <h1>Gif Expert App</h1>
      <AddCategory onNewCategory={(value) => onAddCategory(value)} />
      {/* onNewCategory devuelve un valor que se lo asginamos al onAddCategory */}
      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
