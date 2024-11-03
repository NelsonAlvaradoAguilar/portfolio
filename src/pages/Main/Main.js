import AboutMe from "../../componentes/AboutMe/AboutMe";
import Education from "../../componentes/Education/Education";
import WorkExperience from "../../componentes/Experience/Experience";
import Hero from "../../componentes/Hero/Hero";
import Project from "../../componentes/Projects/Projects";
import BookMeeting from "../../componentes/BookMeeting/BookMeeting";
function Main(params) {
  return (
    <>
      <AboutMe />
      <Education />
      <Hero />
      <WorkExperience />
      <Project />
      <BookMeeting/>

    </>
  );
}

export default Main;
