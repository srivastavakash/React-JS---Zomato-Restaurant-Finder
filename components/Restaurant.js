import React from "react";

function Restaurant(props) {
  return (
    <div className="card restaurant-card">
      <div className="row">
        <div className="col-md-3 col-sm-2">
          <img
            src={
              props.img
                ? props.img
                : "https://coomaindian.com/wp-content/uploads/2015/02/indian.jpg"
            }
            alt={props.name}
            className="img-thumbnail rounded"
          />
        </div>
        <div className="col-md-9 col-sm-10">
          <p className="res-name text-center">{props.name}</p>
          <div>
            <p
              className="rating font-weight-bold"
              style={{
                backgroundColor: "#" + props.rating.rating_color,
                color: "#fff"
              }}
            >
              &nbsp; &nbsp; {props.rating.aggregate_rating} &nbsp; &nbsp;
            </p>
            <p className="text-warning">
              {props.ratings + " "} reviews &nbsp;{props.votes}
              &nbsp; votes
            </p>
          </div>
          <p className="text-secondary">{props.locality}</p>

          <p className="text-secondary"> {props.cuisines}</p>
          <p style={{ float: "left" }}>
            {" "}
            Cost &#8377;{props.cost} for one &nbsp; &nbsp;
          </p>
          <button className="order-btn">
            <a
              className="res-link"
              href={props.url}
              rel="noopener noreferrer"
              target="_blank"
            >
              Order Online{" "}
              <i style={{ fontSize: "20px" }} className="fa">
                &nbsp; &#xf105;
              </i>
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Restaurant;
