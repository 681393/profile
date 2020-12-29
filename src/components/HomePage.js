import Picture from "../img/profile_img.svg";
import { homepage } from "../data/homepage";

const HomePage = () => {
  return (
    <header className="d-flex align-items-center" id="home-section">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-9 col-md-6 order-2">
            <div className="text-white">
              <p className="mb-3 text-white label d-inline-block">Hello I'm</p>
              <h1>
                <strong>{homepage.name}</strong>
              </h1>
              <h4 className="mb-4 lead">{homepage.role}</h4>
              <small className="d-block mb-2">
                <i className="fas fa-envelope mr-3"></i>
                {homepage.email}
              </small>
              <small className="d-block mb-2">
                <i className="fas fa-mobile-alt mr-3"></i>
                {homepage.phone}
              </small>
              <small className="d-block">
                <i className="fas fa-map-marker-alt mr-3"></i>
                {homepage.location}
              </small>
            </div>
          </div>
          <div className="col-md-5 d-none d-md-block order-1">
            <img src={Picture} alt="" className="img-fluid rounded" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default HomePage;
