const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 8000;

app.use(cors());

app.get("/getOverview", (req, res) => {
  res.json("I am Celine Parmar. I am a passionate software developer with a strong background in web development. I am able to communicate and work as a loyal employee with right initative skills during work space. ");
});

app.get("/getEdu", (req, res) => {
  res.json([
    { degree: "Computer Science", school: "Sheridan College", year: "2023" },
    { degree: "Diploma in Computer Programming and Analysis", school: "Humber College", year: "2024-Present" }
  ]);
});

app.get("/getExp", (req, res) => {
  res.json([
    { position: "Frontend Developer Professor", company: "North Your University", year: "2022-2023" },
    { position: "Software Intern", company: "Intership Co.", year: "2021-2022" }
  ]);
});

app.get("/getSkills", (req, res) => {
  res.json([
    "Able to work in all round teams with attentive problem solving skills",
    "JavaScript", "React.js", "Node.js", "Express.js", "MongoDB", "HTML & CSS",
    "Bootstrap","Git & GitHub"
  ]);
});

app.get("/getCareerGoals", (req, res) => {
  res.json([
    "Highly focused and responsible person, guarenteed to contribute strongly in workloads and employee role",
    "Charismatic communicating skills",
    "On exempary work ethic",
    "Become a senior software engineer",
    "Machine learning and AI",
    "Contribute to open-source projects",
  ]);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
