import ExperienceImage from "../img/experience.svg";
import { experience } from "../data/experience";

const Experience = () => {
  return (
    <section id="experience-section">
      <div className="container">
        <h2 className="mb-4">{experience.heading}</h2>
        <div
          id="carouselExampleIndicators"
          class="carousel slide"
          data-ride="carousel"
        >
          <ol class="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              class="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
          </ol>
          <div className="container">
            <div class="carousel-inner">
              {experience.data.map((exp) => (
                <div class={`carousel-item ${exp.active}`}>
                  <div class="mb-2 d-flex justify-content-between">
                    <small className="text-primary">{exp.company}</small>
                    <small className="text-primary">{exp.duration}</small>
                  </div>
                  <h5 className="lead">{exp.client}</h5>
                  <p>{exp.role}</p>
                  <p className=" desc">{exp.clientDesc}</p>
                  <div className="row justify-content-center mb-4">
                    <div className="col-md-6">
                      <ul className="bar resp">
                        {exp.resp.map((v) => (
                          <li className="ml-4 mb-1">{v}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="col-md-6">
                      <p className="tech-used">
                        {exp.techUsed.map((v) => (
                          <span>{v}</span>
                        ))}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Experience;
