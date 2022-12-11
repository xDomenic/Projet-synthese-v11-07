import React, { useEffect } from "react";

const PhotosActeurs = () => {
  return (
    <section
      className="movie-details-area"
      style={{ backgroundImage: 'url("../img/bg/movie_details_bg.jpg")' }}
    >
      <div className="container">
        <div className="row align-items-center position-relative ml-5">
          <div className="col-xl-4 col-lg-8">
            <div className="movie-details-img">
              <img src="img/robin-williams.jpg" alt="" />
            </div>
          </div>
          <div className="col-xl-6 col-lg-8 ml-5">
            <div className="movie-details-content">
              <h5>Biographie</h5>
              <h2>
                Robin <span>Williams</span>
              </h2>

              <p>
                Robin Williams est un humoriste et acteur américain, né le 21
                juillet 1951 à Chicago et mort le 11 août 2014 à Paradise Cay.
              </p>

              <p>
                Débutant au cinéma dans le rôle-titre du Popeye de Robert
                Altman, il se fait connaître avec Good Morning, Vietnam de Barry
                Levinson et Le Cercle des poètes disparus de Peter Weir. Il
                s'illustre ensuite aussi bien dans le domaine comique que
                dramatique, avec Madame Doubtfire ou L'Éveil. Williams s'est
                également essayé au petit écran, avec The Crazy Ones.
              </p>

              <p>
                Robin Williams a notamment remporté l'Oscar du meilleur acteur
                dans un second rôle pour son interprétation dans Will Hunting.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default PhotosActeurs;
