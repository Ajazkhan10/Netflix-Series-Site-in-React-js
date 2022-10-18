import React from "react";
function Netflix(props) {
  console.log(props);
  return (
    <div className="cards">
      <div className="card">
        <img className="card_img" src={props.img} alt="card_img" />
        <div className="card_info">
          <span className="card_category">{props.category}</span>
          <h3 className="card_title">{props.title}</h3>
          <a href={props.url} target="blank">
            <button>Watch Now</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Netflix;
