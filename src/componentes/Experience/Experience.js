import { useEffect, useState } from "react";
import { workExperience, workExperienceTitles } from "../../apiData/data";
import closeImg from "../../assets/icons/icons8-close.svg";
import JobDetails from "../JobDetails/JobDetails";
import { useNavigate } from "react-router-dom";
import "./Experience.scss";
import Close from "../CloseButton/CloseButton";
function WorkExperience() {
  const [showDetails, setShowDetails] = useState([] || null);
  const [titles, setTitles] = useState([]);
  const [id, setId] = useState();
  const [open, setOpen] = useState(false);
  const navegate = useNavigate();

  useEffect(() => {
    setTitles(workExperienceTitles);
  }, []);
  console.log(titles);
  const handleSelect = (selectedId) => {
    const selectedDetails = workExperience.find(
      (position) => position.id === selectedId
    );

    setShowDetails(selectedDetails);
    console.log(showDetails);
    setOpen(true);
  };
  function close(params) {
    if (!open || showDetails ) {
      setOpen(false);
   
    }
  }
  return (
    <section className="experience" id="experience">
      <h1>Experience</h1>
      <ul className="experience__container">
        {titles?.map((subtitles, id) => (
          <li
            className="experience__container "
            onClick={() => {
              handleSelect(subtitles.id);
            }}
            key={subtitles.id}
          >
            <h3 className=" experience__container--subtitles">
              {subtitles.title}
            </h3>
            
          </li>

        ))}
        
      </ul>
      {open ? (
        <div className="experience__description">
          {" "}
    <JobDetails job={showDetails} closeJobDescription={close} /></div>
      
      ):""}
    </section>
  );
}

export default WorkExperience;
//<img   src={closeImg}></img>
