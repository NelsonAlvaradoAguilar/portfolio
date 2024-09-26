import { useEffect, useState } from "react";
import { workExperienceTitles } from "../../apiData/data";

function Subtitles() {
  const [titles, setTitles] = useState([]);
  useEffect(() => {
    setTitles(workExperienceTitles);
  }, [workExperienceTitles]);
  return (
    <ul>
      {titles.map((id, title) => (
        <li key={id}>
          <h3>{title}</h3>
        </li>
      ))}
    </ul>
  );
}
export default Subtitles;
