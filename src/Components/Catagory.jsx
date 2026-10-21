import "../Css/Catagory.css";
import { Link } from "react-router-dom";

function Catagory() {
  const catagoryItems = [
    { cardName: "Action", id: 28 },
    { cardName: "Adventure", id: 12 },
    { cardName: "Animation", id: 16 },
    { cardName: "Comedy", id: 35 },
    { cardName: "Crime", id: 80 },
  ];
  console.log(catagoryItems);
  return (
    <>
      <section className="catagory">
        <div className="catagory-header">
          <div className="buage-box">
            <div className="buage">
              <p>Catagory</p>
            </div>
          </div>
          <h2 className="catagory-h2">EXPLORE BY GENRE</h2>
        </div>
        <div className="boxes">
          {catagoryItems.map((value, index) => {
            return (
              <>
                <Link className="catagory-link" to={`${value.id}`}>
                  <div
                    // style={{
                    //   backgroundImage: `url(../assets/${value.cardName}.jpg)`,
                    // }}
                    className="catagory-box"
                    key={index}
                  >
                    <h3 className="catagory-title">{value.cardName}</h3>
                    <div className="catagory-overlay"></div>
                  </div>
                </Link>
              </>
            );
          })}
        </div>
        <div className="catagory-button">
          <Link className="btn btn-green" to={"/seeAll"}>
            See All
          </Link>
        </div>
      </section>
    </>
  );
}

export default Catagory;
