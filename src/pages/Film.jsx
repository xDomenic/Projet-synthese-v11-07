import React from "react";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import Photos from "../components/films/Photos";
import FilmsDetails from "../components/films/FilmsDetails";
import Bande from "../components/accueil/Bande";
// import { useParams } from "react-router-dom";

const Film = () => {
  return (
    <>
      <Navigation />
      <main>
        <FilmsDetails />
        <Photos />
        <Bande />
      </main>
      <Footer />
    </>
  );
};

export default Film;
