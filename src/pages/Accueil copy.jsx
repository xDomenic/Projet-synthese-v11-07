import React from "react";
import Gallerie from "../components/accueil/Gallerie";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import BandeAccueil from "../components/accueil/BandeAccueil";
import TopListeFilms from "../components/accueil/TopListeFilms";
import Bande from "../components/accueil/Bande";
import BoutonCategories from "../components/categories/BoutonCategories";

const Accueil = () => {
  return (
    <>
      <Navigation />
      <main>
        <Gallerie />
        <TopListeFilms />
        <BoutonCategories />
        <Bande />
        <BandeAccueil />
      </main>
      <Footer />
    </>
  );
};
export default Accueil;
