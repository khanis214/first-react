import "../Css/Why.css";

function Why() {
  const whyItems = [
    "Fastdelivery",
    "Fastdelivery",
    "Fastdelivery",
    "Fastdelivery",
  ];
  return (
    <section className="Why">
      <div className="Why-Home">
        <div className="Why-box-half">
          <div className="buage why-buage">
            <p>Why</p>
          </div>
          <h2 className="Why-title">Built for the long haul and you.</h2>
          <div className="Why-buttons">
            <button className="btn btn-green">Catagoris</button>
            <button className="btn button-unactive">Learn More</button>
          </div>
        </div>
        <div>
          {whyItems.map((value, index) => {
            return (
              <div className="Why-list" key={index}>
                <div className="Why-list-box">
                  <div className="Why-logo"></div>
                  <div className="Why-list-text">
                    <p className="Why-list-header">{value}</p>
                    <p className="Why-list-desc Hero-desc">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Culpa, quam?
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Why;
