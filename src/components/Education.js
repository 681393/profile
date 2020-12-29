import EducationImage from "../img/education.svg";
import { education } from "../data/education";

const Education = () => {
  return (
    <section id="education-section" className="mb-5">
      <div className="container">
        <h2 className="mb-4">{education.heading}</h2>
        <div className="row align-item-center justify-content-center">
          <div className="col-md-5 d-none d-md-block mr-5 align-self-center">
            <img src={EducationImage} className="img-fluid"></img>
          </div>
          <ul className="col-9 col-md-6 bar">
            {education.data.map((v) => (
              <li className="mb-4">
                <h5 className="lead">{v.course}</h5>
                <p className="mb-0">{v.college}</p>
                <small className="text-muted">{v.duration}</small>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Education;
