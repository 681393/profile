import CertificationImage from "../img/certification.svg";
import { certification } from "../data/certification";

const Certification = () => {
  return (
    <section id="certification-section">
      <div className="container">
        <h2 className="mb-4">{certification.heading}</h2>
        <div className="row align-item-center justify-content-center">
          <div className="col-md-5 d-none d-md-block order-2 align-self-center ml-5">
            <img src={CertificationImage} className="img-fluid mb-5"></img>
          </div>
          <ul className="col-9 col-md-6 order-1 bar">
            {certification.data.map((v, index) => (
              <li className="mb-3" key={index}>{v}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Certification;
