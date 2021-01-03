import ExperienceImage from "../img/experience.svg";
import { experience } from "../data/experience";

const Experience = () => {
  return (
    <section id="experience-section">
      <div className="container">
        <h2 className="mb-4">{experience.heading}</h2>
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
          </ol>
          <div className="container">
            <div className="carousel-inner">
              {experience.data.map((exp, index) => (
                <div
                  className={`carousel-item ${index === 0 ? "active" : ""}`}
                  key={index}
                >
                  <div className="mb-2 d-flex justify-content-between">
                    <small className="text-primary">{exp.company}</small>
                    <small className="text-primary">{exp.duration}</small>
                  </div>
                  <h5 className="lead">{exp.client}</h5>
                  <p>{exp.role}</p>
                  <p className=" desc">{exp.clientDesc}</p>
                  <div className="row justify-content-center mb-4">
                    <div className="col-md-6">
                      <ul className="bar resp">
                        {exp.resp.map((v, index) => (
                          <li className="ml-4 mb-1" key={index}>
                            {v}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="col-md-6">
                      <p className="tech-used">
                        {exp.techUsed.map((v, index) => (
                          <span key={index}>{v}</span>
                        ))}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Experience;
