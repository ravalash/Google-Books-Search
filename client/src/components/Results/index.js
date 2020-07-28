import React from "react";
import Col from "../Col";
import Row from "../Row";

function Results(props) {
  return (
    <div
      className="card mb-2"
      style={{ backgroundColor: "#EAE7DC", border: "none", height: "" }}
    >
      <h5 className="card-header">Results</h5>
      <div className="card-body">
      {props.results.map(item => (
                <Row>
                <Col size="lg">
       
       <div className="col-md-6 pb-4">
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
           <a href={item.volumeInfo.canonicalVolumeLink} target="_blank" rel="noopener noreferrer">
             <h5 style={{fontWeight: 'bold', color: 'black'}}>{item.volumeInfo.title}</h5>
           </a>
         </div>
         <a href={item.volumeInfo.canonicalVolumeLink} target="_blank" rel="noopener noreferrer">
           <img
             className="card-img-top"
             src={item.volumeInfo.imageLinks.thumbnail}
             alt="Card cap"
             style={{border: 'blanchedalmond solid 2px'}}
           />
         </a>
       
         <div className="card-body d-flex align-items-end">
           <p className="card-text">
             {item.volumeInfo.description}
           </p>
         </div>
       </div>
       </div>
       </Col>
        </Row>
       
             ))}

      </div>
    </div>
  );
}

export default Results;
