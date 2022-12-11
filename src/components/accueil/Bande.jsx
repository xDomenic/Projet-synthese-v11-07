import React from "react";

const Bande = () => {
  return (
    <section
      className="newsletter-area newsletter-bg"
      style={{ backgroundImage: 'url("../img/bg/newsletter_bg.jpg")' }}
    >
      <div className="container">
        <div className="newsletter-inner-wrap">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="newsletter-content">
                <h4>Bienvenue,</h4>
                <p>
                  Des millions de films, émissions télévisées et artistes...
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <form action="#" className="newsletter-form">
                <input
                  type="email"
                  required
                  placeholder="Entrer votre courriel"
                />
                <button className="btn">COMMENCER</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Bande;
