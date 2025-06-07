import { createContext, useState } from "react";

export const CategoryContext = createContext();

export function CategoryProvider({ children }) {
  const [categories, setCategories] = useState([
    { cod: 1, nom: "Horror" },
    { cod: 2, nom: "Comedy" },
    { cod: 3, nom: "Action" },
    { cod: 4, nom: "Drama" },
  ]);

  return (
    <CategoryContext.Provider value={{ categories, setCategories }}>
      {children}
    </CategoryContext.Provider>
  );
}