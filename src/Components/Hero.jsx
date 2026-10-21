import { useState, useEffect } from "react";
import "../Css/Hero.css";
import picture from "../assets/Cinematic Streaming Night Collage.png";
function Hero() {
  const [data, setData] = useState(null);
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNTZmMWUyMmQ5N2M0OTY4ZTFkNGE1OWI3Y2JhMmE4NSIsIm5iZiI6MTc5MDg2MjU1Ni4wODcwMDAxLCJzdWIiOiI2YWJlNjRkY2M0ZTMxNDZhMjk2NTZiYWEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.QuFwMrtz8k6rB0m9GFIAftpR_FjHHL_csSX32axW14o",
    },
  };

  const heroH1 = "DISCOVER YOUR NEXT FAVORITE MOVIE.";
  const herodes = "EXPLORE ACTION, DRAMA, COMEDY, HORROR AND MORE";

  return (
    <section className="Hero">
      <div className="Hero-Banner">
        <div className="overlay-left"></div>
        <div className="overlay-bottom"></div>
        <div className="Hero-ad">
          <h2 className="Hero-ad-number">#1</h2>
          <p className="Hero-ad-desc">Best Streaming Movie</p>
        </div>

        <div className="Hero-items">
          <div className="glowing-box"></div>
          <div className="Hero-items-text">
            <h1 className="Hero-Header">{heroH1}</h1>
            <p className="Hero-desc">{herodes}</p>
            <div className="Hero-buttons">
              <button className="button-active">BROWSE MOVIES</button>
              <button className="button-unactive">ABOUT US</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
