import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Demo() {
  const { demo } = useParams();
  const [fetching, setFetching] = useState(null);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNTZmMWUyMmQ5N2M0OTY4ZTFkNGE1OWI3Y2JhMmE4NSIsIm5iZiI6MTc5MDg2MjU1Ni4wODcwMDAxLCJzdWIiOiI2YWJlNjRkY2M0ZTMxNDZhMjk2NTZiYWEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.QuFwMrtz8k6rB0m9GFIAftpR_FjHHL_csSX32axW14o",
    },
  };

  async function films() {
    const data = await fetch(
      `https://api.themoviedb.org/3/discover/movie?with_genres=${demo}`,
      options,
    );
    const datajson = await data.json();
    setFetching(datajson);
  }

  console.log(fetching);

  useEffect(() => {
    films();
  }, []);
  return (
    <div>
      <div>
        {fetching &&
          fetching.results.map((value, index) => {
            return (
              <div>
                <p>{value.title}</p>
                <p>{value.vote_average}</p>
                <img
                  src={"https://image.tmdb.org/t/p/w500" + value.poster_path}
                  alt=""
                />
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Demo;
