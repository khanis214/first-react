import { useState, useEffect } from "react";
import "../Css/fetching.css";
function Fetch() {
  const [data, setData] = useState(null);
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNTZmMWUyMmQ5N2M0OTY4ZTFkNGE1OWI3Y2JhMmE4NSIsIm5iZiI6MTc5MDg2MjU1Ni4wODcwMDAxLCJzdWIiOiI2YWJlNjRkY2M0ZTMxNDZhMjk2NTZiYWEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.QuFwMrtz8k6rB0m9GFIAftpR_FjHHL_csSX32axW14o",
    },
  };

  async function dataFunction() {
    const request = await fetch(
      `https://api.themoviedb.org/3/discover/movie?with_genres=28`,
      options,
    );
    const reqestJson = await request.json();
    setData(reqestJson);
  }
  console.log(data);

  useEffect(() => {
    dataFunction();
  }, []);

  return (
    <section className="root">
      <div className="top">
        {data &&
          data.results.map((value, index) => {
            return (
              <div className="high">
                <div className="div-card">
                  <div className="img-div">
                    <img
                      className="img"
                      src={
                        "https://image.tmdb.org/t/p/w500" + value.poster_path
                      }
                      alt={value.title}
                    />
                  </div>

                  <div className="detail">
                    <p>{value.title}</p>
                  </div>

                  <div className="description">
                    <p>{value.overview}</p>
                    <p>⭐ {value.vote_average.toFixed(1)}</p>
                  </div>
                </div>
              </div>
            );
          })}
        <div className="hidden-item"></div>
      </div>
    </section>
  );
}

export default Fetch;
