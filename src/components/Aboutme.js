import AboutmeImage from "../img/about_me.svg";
import { aboutme } from "../data/aboutme";
import Resume from "../resume/HimanshuJain.pdf";

const Aboutme = () => {
  return (
    <section id="aboutme-section">
      <div className="container">
        <h2 className="mb-4">{aboutme.heading}</h2>
        <div className="row align-item-center justify-content-center">
          <div className="col-md-5 d-none d-md-block align-self-center order-2 ml-5">
            <img src={AboutmeImage} className="img-fluid"></img>
          </div>
          <div className="col-9 col-md-6 order-1">
            <p className="lead">{aboutme.content}</p>
            <p>
              {aboutme.skills.map((skill, index) => (
                <span key={index}>{skill}</span>
              ))}
            </p>
            <p>
              <a
                type="button"
                className="btn btn-primary btn-sm"
                download="Himanshu Jain"
                href={Resume}
              >
                {aboutme.buttonLabel}{" "}
                <i className="fas fa-cloud-download-alt bg-primary"></i>
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutme;
