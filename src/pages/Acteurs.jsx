import React from "react";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import PhotosActeurs from "../components/acteurs/PhotosActeurs";
import Bande from "../components/accueil/Bande";
import SuiteActeur from "../components/acteurs/SuiteActeur";
import Celebre from "../components/acteurs/Celebre";

const Acteurs = () => {
  return (
    <>
      <Navigation />
      <main>
        <PhotosActeurs />
        <SuiteActeur />
        <Celebre />
        <Bande />
      </main>
      <Footer />
    </>
  );
};

export default Acteurs;
