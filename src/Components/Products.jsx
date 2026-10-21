import { useContext, useEffect, useRef, useState } from "react";
import "../Css/Products.css";
import { useSearchParams } from "react-router-dom";

function Products() {
  const scroll = useRef(null);
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const leftscroll = 500;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNTZmMWUyMmQ5N2M0OTY4ZTFkNGE1OWI3Y2JhMmE4NSIsIm5iZiI6MTc5MDg2MjU1Ni4wODcwMDAxLCJzdWIiOiI2YWJlNjRkY2M0ZTMxNDZhMjk2NTZiYWEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.QuFwMrtz8k6rB0m9GFIAftpR_FjHHL_csSX32axW14o",
    },
  };
  async function ahmad() {
    setIsLoading(true);
    try {
      const request = await fetch(
        `https://api.themoviedb.org/3/person/popular`,
        options,
      );
      const requestjson = await request.json();
      setData(requestjson);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  console.log(data);

  useEffect(() => {
    ahmad();
  }, []);
  return (
    <section className="products">
      <div className="products-items">
        <div className="products-header">
          <div className="buage">
            <p>Stock</p>
          </div>
          <div className="products-desc-box">
            <h2 className="Products-title">FEATURED MOVIES</h2>
            <p className="products-dark-font">
              DISCOVER MOVIES WORTH WATCHING.
            </p>
          </div>
        </div>
        <div>
          <button className="btn btn-green">SEE ALL</button>
        </div>
      </div>
      <div className="donkey">
        <div ref={scroll} className="products-cards">
          {data ? (
            isLoading ? (
              <h1>Loading</h1>
            ) : (
              data.results.map((value, index) => {
                return (
                  <div className="products-donkey-overlay">
                    <div className="products-card-img">
                      <img
                        className="imgs-card-products"
                        src={
                          "https://image.tmdb.org/t/p/w500" +
                          value.known_for[0].poster_path
                        }
                        alt=""
                      />
                      <div className="products-card-overlay"></div>
                      <div className="products-card-text">
                        <div className="products-card-header">
                          <div>
                            <h3>{value.original_name}</h3>
                          </div>
                          <div className="rating">
                            <p>⭐{value.vote_average}</p>
                          </div>
                        </div>
                        <div className="products-card-dsec">
                          <label>Desc:</label>
                          <p className="overview">
                            {value.known_for[0].overview}
                          </p>
                        </div>
                        <div>
                          <div className="products-cards-footer">
                            <h4>{value.known_for[0].media_type}</h4>
                            <div className="buage buage-products">
                              <p>{value.name}</p>
                            </div>
                          </div>
                        </div>
                        <div className="products-card-button">
                          <button className="btn-products btn-green">
                            Add to Favorite
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="products-donkey-overlay-box"></div>
                  </div>
                );
              })
            )
          ) : (
            <>
              <div className="noInternet">
                <p>
                  Opss.{" "}
                  <p style={{ fontSize: "10px" }}>Something happened Wrong</p>
                </p>
              </div>
            </>
          )}
          <div className="products-cards-overlay"></div>
          <div className="produtcs-button">
            <button
              className="products-cards-btn"
              onClick={() => {
                scroll.current.scrollLeft -= leftscroll;
                console.log("clicked");
              }}
            >
              L
            </button>
            <button
              className="products-cards-btn"
              onClick={() => {
                scroll.current.scrollLeft += leftscroll;
                console.log("clicked");
              }}
            >
              R
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Products;
