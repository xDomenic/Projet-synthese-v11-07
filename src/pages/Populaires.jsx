import React from "react";
import { Entete } from "../components/populaires/Entete";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import TopFilmsPopulaires from "../components/populaires/TopFilmsPopulaires";
import Bande from "../components/accueil/Bande";

const Populaires = () => {
  return (
    <>
      <Navigation />
      <main>
        <Entete />
        <TopFilmsPopulaires />
        <Bande />
      </main>
      <Footer />
    </>
  );
};

export default Populaires;
