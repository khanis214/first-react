import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../Css/Catagories-two.css";
import { useRef } from "react";
import { useContext } from "react";
import { Ahmad } from "./Ex";
import { Clock } from "./SeeAllDeaile";
import { Ruler } from "./SeeAllDeaile";
import { Headphones } from "./SeeAllDeaile";
import defaultImg from "../assets/default.png";

import "../Css/Card-detial.css";

function CatgTwo() {
  const [open, setOpen] = useState(false);
  const [moredataisloading, setMoredataisloading] = useState(false);
  const [gener, setGener] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isAppear, setIsAppear] = useState(false);
  const [page, setPage] = useState(1);
  const { favorites, setFavorites } = useContext(Ahmad);
  const { filmids, setFilmIds } = useContext(Clock);
  const { moreFilm, setMoreFilm } = useContext(Ruler);
  const [computer, setComputer] = useState();
  const { film, setFilm } = useContext(Headphones);

  const box = useRef(null);
  const { id } = useParams();

  const hours = Math.floor((film?.runtime || 0) / 60);
  const minutes = (film?.runtime || 0) % 60;
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [open]);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNTZmMWUyMmQ5N2M0OTY4ZTFkNGE1OWI3Y2JhMmE4NSIsIm5iZiI6MTc5MDg2MjU1Ni4wODcwMDAxLCJzdWIiOiI2YWJlNjRkY2M0ZTMxNDZhMjk2NTZiYWEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.QuFwMrtz8k6rB0m9GFIAftpR_FjHHL_csSX32axW14o",
    },
  };
  useEffect(() => {
    Requesting();
    Moredata();
  }, [filmids]);

  async function Requesting() {
    setMoredataisloading(true);
    try {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${filmids}&language=en-US`,
        options,
      );
      const dataJson = await data.json();

      setFilm(dataJson);
    } catch (error) {
      console.log(error);
    } finally {
      setMoredataisloading(false);
    }
  }
  console.log(film);
  console.log(moreFilm);
  async function Moredata() {
    setMoredataisloading(true);
    try {
      const more = await fetch(
        `https://api.themoviedb.org/3/movie/${filmids}/credits?language=en-US`,
        options,
      );
      const moreJson = await more.json();

      setMoreFilm(moreJson);
    } catch (error) {
      console.log(error);
    } finally {
      setMoredataisloading(false);
    }
  }

  // console.log(film);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (gener) {
        console.log(entries[0].isIntersecting);
        if (entries[0].isIntersecting) {
          setIsAppear(true);
          console.log(isAppear);
          setPage(page + 1);
        } else {
          setIsAppear(false);
        }
      }
    });
    if (box.current) {
      observer.observe(box.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [gener]);

  async function request() {
    try {
      setIsLoading(true);
      const data = await fetch(
        `https://api.themoviedb.org/3/discover/movie?with_genres=${id}&page=${page}`,
        options,
      );
      const datajson = await data.json();
      console.log(datajson);
      if (gener === null) {
        setGener(datajson.results);
      } else {
        setGener((prev) => {
          console.log(prev);
          return [...prev, ...datajson.results];
        });
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  // async function request() {
  //   try {
  //     setIsLoading(true);
  //     const data = await fetch(
  //       `https://api.themoviedb.org/3/discover/movie?with_genres=${id}`,
  //       options,
  //     );
  //     const datajson = await data.json();
  //     console.log(datajson);
  //     setGener(datajson);
  //   } catch (error) {
  //     console.log(error);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // }

  // async function scrollrequest() {
  //   const data = await fetch(
  //     `https://api.themoviedb.org/3/discover/movie?with_genres=${id}&page=${page}`,
  //     options,
  //   );
  //   const datajson = await data.json();
  //   setGener(datajson);
  // }

  // console.log(gener);

  // useEffect(() => {
  //   scrollrequest();
  // }, [page]);

  useEffect(() => {
    request();
  }, [page]);

  return (
    <div className="cards">
      {!gener && isLoading ? (
        <p>Loading</p>
      ) : gener ? (
        gener.map((value, index) => {
          return (
            <div className="seeAll-card">
              <div className="seeAll-cards-div-img">
                <img
                  className="seeAll-cards-img"
                  src={"https://image.tmdb.org/t/p/w500" + value.poster_path}
                  alt=""
                />
                <div className="seeAll-card-title">
                  <p>{value.title}</p>
                  <button
                    className="btn favorite-button"
                    onClick={() => {
                      setFavorites((prev) => {
                        const alreadyexits = prev.some(
                          (favorites) => favorites.id === value.id,
                        );
                        if (alreadyexits) {
                          return prev;
                        } else {
                          return [...prev, value];
                        }
                      });
                      console.log(favorites);
                      const ahmad = JSON.parse(
                        localStorage.getItem("favorites"),
                      );
                      console.log(ahmad);
                    }}
                  >
                    F
                  </button>
                </div>
                <div className="for-demo">
                  <div className="seeAll-card-desc">
                    <p>{value.original_title}</p>
                    <div>
                      <p>{value.original_language}</p>
                      <p className="buage">{value.vote_average}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      setFilmIds(value.id);
                      console.log(computer);
                      setOpen(!open);
                    }}
                    className="button-box "
                  >
                    More
                  </button>
                </div>
                <div className="seeAll-card-overlay"></div>
              </div>
            </div>
          );
        })
      ) : (
        <div className="noInternet">
          <p>
            Opss. <p style={{ fontSize: "10px" }}>Something happened Wrong</p>
          </p>
        </div>
      )}
      <div style={{ width: "100%", height: "200px" }} ref={box}>
        {isAppear && <p style={{ textAlign: "center" }}>Loading</p>}
      </div>
      {film && (
        <div
          className={
            open ? "details-of-cards-box open" : "details-of-cards-box"
          }
        >
          {moredataisloading ? (
            <div className="noti-loading noti-loading-optional">
              <p>loading</p>
            </div>
          ) : (
            <>
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
                      {film &&
                        film?.genres?.map((value, index) => {
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
                        {moreFilm &&
                          moreFilm?.crew?.find(
                            (person) => person.job === "Director",
                          )?.name}
                      </p>
                    </div>
                    <div>
                      <h4>Producer</h4>
                      <p>
                        {moreFilm &&
                          moreFilm?.crew?.find(
                            (person) => person.job === "Producer",
                          )?.name}
                      </p>
                    </div>
                    <div>
                      <h4>Production Sound Mixer</h4>
                      <p>
                        {" "}
                        {moreFilm &&
                          moreFilm?.crew?.find(
                            (person) => person.job === "Production Sound Mixer",
                          )?.name}
                      </p>
                    </div>
                  </div>
                )}

                <div className="img-Genres">
                  <h4>Genres</h4>
                  <div className="img-Genres-content">
                    {film &&
                      film?.genres?.map((value, index) => {
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
                          <li>Releast Date: {film && film.release_date}</li>
                          <li>
                            Runtime: {hours + "hr"} {minutes + "m"}
                          </li>
                          <li>Country: {film && film.origin_country}</li>
                          <li>Language: {film && film.original_language}</li>
                          <li>Budget: ${film && film.budget}</li>
                          <li>Revenue: ${film && film.revenue}</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="img-Cast">
                  {moreFilm &&
                    moreFilm?.cast?.map((value, inex) => {
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
              <div style={{ display: "flex", justifyContent: "center" }}>
                <button
                  onClick={() => setOpen(false)}
                  className="btn btn-green"
                >
                  Close
                </button>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default CatgTwo;
