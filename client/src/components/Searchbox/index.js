import React from "react";

function Searchbox() {
  return (
    <div
      className="card mb-2"
      style={{ backgroundColor: "#EAE7DC", border: "none", height: "" }}
    >
      <h5 className="card-header">Book Search</h5>
      <div className="card-body">
        <form>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="bookInput"
              placeholder="Type in a book to search for"
              aria-describedby="bookSearch"
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Search
          </button>
        </form>
      </div>
    </div>
  );
}

export default Searchbox;
