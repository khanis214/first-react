import "../Css/Everything.css";

function Everything() {
  const everyh1 = "EVERYTHING YOU NEED FOR THE HUNT";
  const everydesc =
    "Gear that lasts through hard seasons and long days in the filed.";
  const listOne = ["Products", "Favorite", "Cart", "Check out", "Home"];
  const listTwo = [
    "About",
    "Custormers Service",
    " Instagram ",
    "Facebook",
    "X",
  ];
  return (
    <section className="every-section">
      <div className="every">
        <div className="Hero-items every-item">
          <div className="glowing-box"></div>
          <div className="Hero-items-text">
            <h1 className="Hero-Header">{everyh1}</h1>
            <p className="Hero-desc">{everydesc}</p>
            <div className="Hero-buttons">
              <button className="button-active">Catagoris</button>
              <button className="button-unactive">About</button>
            </div>
          </div>
        </div>
        <div>
          <div className="everything-list">
            <ul className="every-list-one">
              {listOne.map((value, index) => {
                return (
                  <li>
                    <a key={index}>{value}</a>
                  </li>
                );
              })}
            </ul>
            <ul className="every-list-two">
              {listTwo.map((value, index) => {
                return (
                  <li>
                    <a key={index}>{value}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Everything;
