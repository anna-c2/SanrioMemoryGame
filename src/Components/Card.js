export default function Card(props) {
  if (props.isFlipped === false) {
    console.log(props);
  }
  return (
    <div onClick={props.cardOnClickHandler} className="Card">
      <div className="scene scene--card">
        <div className={`card ${props.isFlipped ? "is-flipped" : ""}`}>
          <div className="card__face card__face--front">
            <img
              className="card-img"
              alt="sanrio logo"
              src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/v1436875994/kwi6lxd3cdfgo3hhqemp.png"
            />
          </div>
          <div className="card__face card__face--back">
            <img className="card-img" alt="sanrio character" src={props.url} />
          </div>
        </div>
      </div>
    </div>
    // <div onClick={props.isActive ? props.cardOnClickHandler : null} className="Card">
    //   <div className="scene scene--card">
    //     <div className={`${props.isActive ? "card" : "inactiveCard"} ${props.isFlipped ? "is-flipped" : ""}`}>
    //       <div className="card__face card__face--front"></div>
    //       <div className="card__face card__face--back">
    //         <img className="card-img" alt="card" src={props.url} />
    //         <h1>{props.name}</h1>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}
