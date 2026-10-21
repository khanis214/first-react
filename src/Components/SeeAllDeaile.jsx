import { createContext, useState } from "react";

export const Clock = createContext();
export const Ruler = createContext();
export const Headphones = createContext();
function SeeAllDetials({ children }) {
  const [filmids, setFilmIds] = useState(null);
  const [moreFilm, setMoreFilm] = useState(null);
  const [film, setFilm] = useState(null);

  return (
    <>
      <Clock.Provider value={{ filmids, setFilmIds }}>
        <Ruler.Provider value={{ moreFilm, setMoreFilm }}>
          <Headphones.Provider value={{ film, setFilm }}>
            {children}
          </Headphones.Provider>
        </Ruler.Provider>
      </Clock.Provider>
    </>
  );
}

export default SeeAllDetials;
