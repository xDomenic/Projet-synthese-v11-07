import React from "react";

const Movie = (props) => {
  const { movie } = props;

  return (
    <div className="col-xl-3 col-lg-4 col-sm-6 grid-item grid-sizer">
      <div className="movie-item movie-item-two">
        <div className="movie-poster-recherche">
          <img
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/original/${movie.poster_path}`
                : "https://images.unsplash.com/photo-1644906999518-71b776c4b750?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            }
            alt="poster"
          />
          <ul className="overlay-btn2">
            <li className=" ">
              <a
                href="https://www.youtube.com/watch?v=R2gbPxeNk2E"
                className="popup-video btn"
              >
                Voir Maintenant
              </a>
            </li>
            <li>
              <a href="/movie-details" className="btn">
                Details
              </a>
            </li>
          </ul>
        </div>
        <div className="movie-content">
          <div className="rating">
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
          </div>
          <h5 className="title">
            <a href="/movie-details">{movie.title}</a>
          </h5>
          <span className="rel">Adventure</span>
          <div className="movie-content-bottom">
            <ul>
              <li className="tag">
                <a href="/#">HD</a>
                <a href="/#">English</a>
              </li>
              <li>
                <span className="like">
                  <i className="fas fa-thumbs-up" /> 3.5
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movie;
