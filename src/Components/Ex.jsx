import { createContext, useState } from "react";

export const Ahmad = createContext();

function Example({ children }) {
  const [favorites, setFavorites] = useState([]);
  return (
    <Ahmad.Provider value={{ favorites, setFavorites }}>
      {children}
    </Ahmad.Provider>
  );
}

export default Example;
