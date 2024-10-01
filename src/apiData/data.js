import image1 from "../assets/Online-Part-Time_September-2023_Placement_0009_Nelson-Alvarado-Aguilar---Software-Engineering---Sept-2023_LI.jpg";
import image2 from "../assets/Screenshot 2024-06-14 at 11.20.42 AM.png";
import diploma from "../assets/ imageDiploma.png";
import certification from "../assets/certification.png";
import colombiaCertificate from "../assets/colombian certificate.png";
import hackatonImg from "../assets/Nelson Alvarado-Aguilar-hack.png";
import capstoneimage1 from "../assets/projects/capstone/Screenshot 2024-09-09 at 9.43.05 PM (2).png";
import capstoneimage2 from "../assets/projects/capstone/Screenshot 2024-09-30 at 9.21.03 PM.png";
import capstoneimage3 from "../assets/projects/capstone/Screenshot 2024-09-30 at 9.21.08 PM.png";
import capstoneimage4 from "../assets/projects/capstone/Screenshot 2024-09-30 at 9.21.11 PM.png";
import capstoneimage5 from "../assets/projects/capstone/Screenshot 2024-09-09 at 9.43.05 PM (2).png";
import capstoneimage6 from "../assets/projects/capstone/Screenshot 2024-09-30 at 9.21.15 PM.png";

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
const achievementsData = [
  {
    id: "0",
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
    career: "Financial Management.",
    city: "COLOMBIA",
    image: colombiaCertificate,
    date: "Jan 2011 - Dec 2012",
  },
];
const workExperienceTitles = [
  {
    id: "0",
    title: "Produce Associate",
  },
  {
    id: "1",
    title: "Production Assistant/Set-up Team Member Trainee",
  },
  {
    id: "2",
    title: "Mixologist",
  },
];
const workExperience = [
  {
    id: "0",
    position: "Produce Associate",
    company: "Market & Smor",
    location: "Cobourg, ON",
    startDate: "July 2023",
    endDate: "2024",
    responsibilities: [
      "Efficiently manage the daily operation of the produce department, ensuring high-quality standards are maintained in product presentation, freshness, and cleanliness.",
      "Implement effective merchandising strategies, such as creative display and signage, to attract customers and drive sales, resulting in a noticeable increase in department revenue.",
    ],
  },
  {
    id: "1",
    position: "Production Assistant/Set-up Team Member Trainee",
    company: "Core Molding Technologies",
    location: "Cobourg, ON",
    startDate: "August 2022",
    endDate: "June 2023",
    responsibilities: [
      "Performed quality checks at various stages of production, inspecting finished products for defects, inconsistencies, or other irregularities, and promptly addressing any issues to prevent delays or defects in the final product.",
      "Participated in regular training sessions and skill development programs to enhance technical proficiency, learn new techniques, and stay updated on industry best practices, contributing to ongoing improvement initiatives within the team.",
    ],
  },
  {
    id: "2",
    position: "Mixologist",
    company: "Alquimico",
    location: "Cartagena, COL",
    startDate: "March 2016",
    endDate: "October 2017",
    responsibilities: [
      "Collaborated closely with the bar team and management to develop innovative cocktail menus, seasonal specials, and themed events.",
    ],
  },
];

const projects = [
  {
    id: "0",
    capstone: [
      {
        projectTitle: "Latin Club",

        description:
          "As my final project for graduation at BrainStation, I developed Latin Club, a web application tailored to connect the Hispanic community in Northumberland County. The app addresses challenges that arose from the growing number of community members relying on a WhatsApp group for communication, where crucial information was often lost or overlooked. Latin Club serves as a centralized hub where users can share events, important announcements, and cultural experiences. The goal was to enhance collaboration and strengthen community ties, providing a more efficient platform to ensure everyone stays informed and engaged.",
        images: [
          capstoneimage1,
          capstoneimage2,
          capstoneimage3,
          capstoneimage4,
          capstoneimage5,
        ],
      },
    ],
  },
];
export {
  navBartitles,
  aboutMeDada,
  imagesAboutMe,
  educationData,
  educationDataList,
  achievementsData,
  workExperience,
  workExperienceTitles,
  projects,
};
