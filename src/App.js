import Nav from "./components/Nav";
import HomePage from "./components/HomePage";
import Education from "./components/Education";
import Skill from "./components/Skill";
import Aboutme from "./components/Aboutme";
import Experience from "./components/Experience";
import Certification from "./components/Certification";

const App = () => {
  return (
    <>
      <Nav />
      <HomePage />
      <Aboutme />
      <Skill />
      <Experience />
      <Certification />
      <Education />
    </>
  );
};

export default App;
