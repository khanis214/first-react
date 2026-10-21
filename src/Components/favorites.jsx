import { useEffect, useState } from "react";
import { useContext } from "react";
import { Ahmad } from "./Ex";

function Favorites() {
  const [items, setItems] = useState([]);
  const { favorites } = useContext(Ahmad);
  console.log(favorites);
  console.log(items);
  useEffect(() => {
    setItems(JSON.parse(localStorage.getItem("favorites")) || null);
  }, []);
  console.log(items);
  return (
    <>
      <h2>Your favorites</h2>
      <div className="div">
        {/* {items &&
          items.map((value, index) => {
            return (
              <div className="seeAll-card" key={index}>
                <div className="seeAll-cards-div-img">
                  <img
                    className="seeAll-cards-img"
                    src={"https://image.tmdb.org/t/p/w500" + value.poster_path}
                    alt=""
                  />
                  <div className="seeAll-card-title">
                    <p>{value.title}</p>
                  </div>
                  <div className="seeAll-card-desc">
                    <p>{value.original_title}</p>
                    <div>
                      <p>{value.original_language}</p>
                      <p className="buage">{value.vote_average}</p>
                    </div>
                  </div>
                </div>
                <div className="seeAll-card-overlay"></div>
              </div>
            );
          })} */}
        {items &&
          items.map((value, index) => {
            return (
              <div className="seeAll-card" key={index}>
                <div className="seeAll-cards-div-img">
                  <img
                    className="seeAll-cards-img"
                    src={"https://image.tmdb.org/t/p/w500" + value.poster_path}
                    alt=""
                  />
                  <div className="seeAll-card-title">
                    <p>{value.title}</p>
                  </div>
                  <div
                    className="seeAll-card-desc"
                    style={{ position: "absolute", zIndex: 99 }}
                  >
                    <p>{value.original_title}</p>
                    <div>
                      <p>{value.original_language}</p>
                      <p className="buage">{value.vote_average}</p>
                    </div>
                  </div>
                </div>
                <div className="seeAll-card-overlay"></div>
              </div>
            );
          })}
      </div>
    </>
  );
}

export default Favorites;
