import image1 from "../assets/Online-Part-Time_September-2023_Placement_0009_Nelson-Alvarado-Aguilar---Software-Engineering---Sept-2023_LI.jpg";
import image2 from "../assets/Screenshot 2024-06-14 at 11.20.42 AM.png";
import diploma from "../assets/ imageDiploma.png";
import certification from "../assets/certification.png";
import hackatonImg from "../assets/Nelson Alvarado-Aguilar-hack.png";
const navBartitles = [
  { id: "0", title: "About Me" },
  { id: "1", title: "Experience" },
  { id: "2", title: "My Projects" },
  { id: "3", title: "Galery" },
];
const imagesAboutMe = [{ image: image1 }, { image: image2 }];

const aboutMeDada = [
  {
    id: "0",
    image: image1,
    name: "Nelson Alvarado",
    career: "jr. Software Engineer",
    paragraph1:
      "I'm Nelson Alvarado, a junior web developer with seven years of customer service experience in the restaurant industry, along with roles in manufacturing and retail. These high-pressure environments sharpened my problem-solving skills and teamwork",
    paragraph2:
      "I'm eager to start my career  focused on web development and committed to continuous learning. With a diverse background in coding and operations, I'm passionate about contributing to dynamic teams and expanding my skills.",
  },
];
const achievements = [
  {
    image: hackatonImg,
    school: "BrainStation",
    type: "Certification",
    city: "TORONTO, ON",
    title: "Industry Projects",
    date: "Apr 23 2024",
  },
];
const educationDataList = [
  {
    id: "0",
    title: "BrainStation 2024",
  },
  {
    id: "1",
    title: "BrainStation 2023",
  },
  {
    id: "2",
    title: "National training Academy, Colombia",
  },
];

const educationData = [
  {
    id: "0",
    title: "BrainStation 2024",
    school: "BrainStation",
    type: " | Diploma",
    career: "Software Egineer",
    city: "TORONTO, ON",
    image: diploma,
    date: "Set 2023 - Apr 2024",
  },
  {
    id: "1",
    title: "BrainStation 2023",
    school: "BrainStation",
    type: " | Certification",
    career: "Web Development",
    city: "TORONTO, ON",
    image: certification,
    date: "August 2 - 2023 ",
  },
  {
    id: "2",
    title: "National training Academy",
    school: "National training Academy",
    type: " | Certification",
    career: "Technician in Business Administration",
    city: "COLOMBIA",
    image: "Waiting for legal translation",
    date: "Jan 2011 - Dec 2012",
  },
];

export {
  navBartitles,
  aboutMeDada,
  imagesAboutMe,
  educationData,
  educationDataList,
};
