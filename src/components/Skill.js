import SkillImage from "../img/skill.svg";
import { skills } from "../data/skills";

const Skill = () => {
  return (
    <section id="skill-section">
      <div className="container">
        <h2 className="mb-4">{skills.heading}</h2>
        <div className="row align-item-center justify-content-center">
          <div className="col-md-5 d-none d-md-block align-self-center mr-5">
            <img src={SkillImage} className="img-fluid mb-5"></img>
          </div>
          <ul className="col-9 col-md-6 bar margin-bottom">
            {skills.data.map((skill) => (
              <li className="mb-4">
                <h5 className="lead">{skill.heading}</h5>
                <p className="mb-0">
                  {skill.data.map((v) => {
                    return (
                      <>
                        {v}
                        <span className="text-primary"> | </span>
                      </>
                    );
                  })}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skill;
