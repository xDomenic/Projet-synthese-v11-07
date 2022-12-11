import React from "react";
const BandeAccueil = () => {
  return (
    <section
      className="services-area services-bg-two"
      style={{ backgroundImage: 'url("../../img/bg/montage-fond-equipe.jpg")' }}
    >
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-lg-6 order-0 order-lg-2">
            <div className="services-img-wrap">
              <img src="img/images/live_img.png" alt="" />
            </div>
          </div>
          <div className="col-xl-5 col-lg-6">
            <div className="services-content-wrap">
              <div className="section-title mb-40"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default BandeAccueil;
