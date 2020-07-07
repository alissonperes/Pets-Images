import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getCat } from "../actions";
import logo from "./logo.svg";
import "./App.css";

const Cat = props => {
  const { cat, fetchCat } = props;
  const { fetched, fetching, error } = cat;
  const [mainImage, setMainImage] = useState(logo);

  useEffect(() => {
    if (!fetched && !fetching && error === null) {
      fetchCat();
    } else if (fetching) {
      setMainImage(
        <img
          src="https://www.c-sgroup.com/images/loading-icon-red.gif"
          className="img-fluid h-100 rounded"
          alt="logo"
        />
      );
    } else if (fetched) {
      setMainImage(
        <img
          src={cat.cat[0].url}
          className="img-fluid h-100 rounded"
          alt="logo"
        />
      );
    }
  }, [fetched, fetching, error, fetchCat, cat]);

  const handleClick = () => {
    fetchCat();
  };

  return (
    <div className="App container">
      <div className="row mt-5 d-flex justify-content-center">
        <div className="col">
          <div className="row App-logo mb-5">
            <div className="col h-100 d-flex justify-content-center">
              {mainImage}
            </div>
          </div>
          <div
            className="btn-group mr-2 d-flex justify-content-center"
            role="group"
            aria-label="First group"
          >
            <button
              type="button"
              onClick={handleClick}
              className="btn btn-secondary"
            >
              Super Like
            </button>
            <button
              type="button"
              onClick={handleClick}
              className="btn btn-info border-0"
            >
              Love of my life
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = store => ({
  dog: store.dog,
  cat: store.cat,
  store
});

const mapDispatchToProps = dispatch => ({
  fetchCat: () => dispatch(getCat())
});

export default connect(mapStateToProps, mapDispatchToProps)(Cat);
