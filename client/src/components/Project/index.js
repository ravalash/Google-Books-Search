import React from "react";
function Project(props) {
    console.log(props)
    return (
  


<div
  className="card text-center"
  style={{
    width: "100%",
    height: "100%",
    backgroundColor: "ivory",
    color: "black",
  }}
>
  <div className="card-header">
    <a href={props.repo} target="_blank" rel="noopener noreferrer">
      <h5 style={{fontWeight: 'bold', color: 'black'}}>{props.title}</h5>
    </a>
  </div>
  <a href={props.page} target="_blank" rel="noopener noreferrer">
    <img
      className="card-img-top"
      src={props.bg}
      alt="Card cap"
      style={{border: 'blanchedalmond solid 2px'}}
    />
  </a>

  <div className="card-body d-flex align-items-end">
    <p className="card-text">
      {props.description}
    </p>
  </div>
</div>
    )
}

export default Project;
