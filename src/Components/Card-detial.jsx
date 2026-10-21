import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import defaultImg from "../assets/default.png";

import "../Css/Card-detial.css";

function Card() {
  const { name } = useParams();
  const [film, setFilm] = useState(null);
  // const [moreFilm, setMoreFilm] = useState(null);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNTZmMWUyMmQ5N2M0OTY4ZTFkNGE1OWI3Y2JhMmE4NSIsIm5iZiI6MTc5MDg2MjU1Ni4wODcwMDAxLCJzdWIiOiI2YWJlNjRkY2M0ZTMxNDZhMjk2NTZiYWEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.QuFwMrtz8k6rB0m9GFIAftpR_FjHHL_csSX32axW14o",
    },
  };

  async function Requesting() {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${name}&language=en-US`,
      options,
    );
    const dataJson = await data.json();
    setFilm(dataJson);
  }

  async function Moredata() {
    const more = await fetch(
      `https://api.themoviedb.org/3/movie/${name}/credits?language=en-US`,
      options,
    );
    const moreJson = await more.json();
    setMoreFilm(moreJson);
  }
  if (moreFilm) {
    console.log(moreFilm);
  }
  console.log(film);

  useEffect(() => {
    Requesting();
    Moredata();
  }, []);

  const hours = Math.floor((film?.runtime || 0) / 60);
  const minutes = (film?.runtime || 0) % 60;
  {
    // film &&
    //   film.map((vlaue, index) => {
    return (
      film && (
        <div>
          <div
            className="img"
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/w1280${film.backdrop_path})`,
            }}
          >
            <div className="img-overlay"></div>
            <div className="img-padding">
              <div className="img-card">
                <img
                  src={"https://image.tmdb.org/t/p/w500" + film.poster_path}
                  alt=""
                />
              </div>
              <div className="img-items">
                <h2 className="img-title">{film.title}</h2>
                <div className="img-detial">
                  <ul>
                    <li>{film.release_date}</li>
                    <li>
                      {hours + "hr"} {minutes + "m"}
                    </li>
                    <li style={{ textTransform: "uppercase" }}>
                      {film.original_language}
                    </li>
                  </ul>
                </div>
                <div className="img-rating">
                  <ul>
                    <li>⭐{film.vote_average}</li>
                  </ul>
                  {film.genres.map((value, index) => {
                    return (
                      <span className="img-genres-tag btn-watchlist">
                        {value.name}
                      </span>
                    );
                  })}
                </div>
                <div className="img-description">
                  <div className="img-width">
                    <p>{film.overview}</p>
                  </div>
                </div>
                <div className="img-buttons">
                  <button className="btn btn-green">Play</button>
                  <button className="btn button-unactive btn-watchlist">
                    Add to Watchlist
                  </button>
                  <button className="btn btn-share">S</button>
                </div>
              </div>
            </div>
          </div>
          <div className="desciption">
            {moreFilm && (
              <div className="img-Director">
                <div>
                  <h4>Director</h4>
                  <p>
                    {
                      moreFilm.crew.find((person) => person.job === "Director")
                        ?.name
                    }
                  </p>
                </div>
                <div>
                  <h4>Producer</h4>
                  <p>
                    {
                      moreFilm.crew.find((person) => person.job === "Producer")
                        ?.name
                    }
                  </p>
                </div>
                <div>
                  <h4>Production Sound Mixer</h4>
                  <p>
                    {" "}
                    {
                      moreFilm.crew.find(
                        (person) => person.job === "Production Sound Mixer",
                      )?.name
                    }
                  </p>
                </div>
              </div>
            )}

            <div className="img-Genres">
              <h4>Genres</h4>
              <div className="img-Genres-content">
                {film.genres.map((value, index) => {
                  return (
                    <span className="img-genres-tag btn-watchlist">
                      {value.name}
                    </span>
                  );
                })}
              </div>
            </div>

            <div className="img-ovewview-box">
              <div className="img-Overview">
                <div>
                  <h3>Overview</h3>
                  <p className="img-Overview-desc">{film.overview}</p>
                </div>
                <div className="img-keydeaitls">
                  <div className="img-keydeaitls-desc">
                    <h4>Key Details</h4>
                    <ul>
                      <li>Releast Date: {film.release_date}</li>
                      <li>
                        Runtime: {hours + "hr"} {minutes + "m"}
                      </li>
                      <li>Country: {film.origin_country}</li>
                      <li>Language: {film.original_language}</li>
                      <li>Budget: ${film.budget}</li>
                      <li>Revenue: ${film.revenue}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="img-Cast">
              {moreFilm &&
                moreFilm.cast.map((value, inex) => {
                  return (
                    <div className="img-Cast-box">
                      <img
                        className="img-Cast-profile"
                        src={
                          value.profile_path
                            ? `https://image.tmdb.org/t/p/w185${value.profile_path}`
                            : defaultImg
                        }
                        alt={value.name}
                      />
                      <div className="img-Cast-detials">
                        <h4>{value.name}</h4>
                        <p>{value.character}</p>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      )
    );
  }
}

export default Card;
