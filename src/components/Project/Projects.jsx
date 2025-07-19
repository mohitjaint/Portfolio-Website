import React, { useState } from "react";
import ProjectCard from "../Cards/Projects/ProjectCard";
import AmazonClone from "../../assets/Projects/AmazonClone.png";

const projects = [
  {
    id: 1,
    title: "Amazon Clone",
    image: `${AmazonClone}`,
    description:
      "Amazon Clone is a basic e-commerce website replica built to practice and demonstrate JavaScript skills. This project involves making a pre-designed static HTML/CSS layout interactive by adding functionalities like dynamic content rendering, order tracking, and responsive design using JavaScript.",
    repositoryLink: "https://github.com/mohitjaint/Amazon-Clone",
  },
  {
    id: 2,
    title: "Portfolio Website",
    image: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg",
    description:
      "I’ve developed a responsive portfolio website using React and Tailwind CSS. It showcases my projects, skills, and achievements through a clean, modern UI. The site features smooth animations, interactive elements, and a professional design—built to reflect my journey as a developer and make a strong impression online.",
    repositoryLink: "https://github.com/mohitjaint/Portfolio-Website",
  },
  // Add more projects here...
];

export default function ProjectPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentProject = projects[currentIndex];

  return (
    <>
      <div className="w-auto p-4 mt-20 ml-10 mr-10 font-semibold text-[#9857D3] text-3xl">
              # Projects:
      </div>
      <div className="relative w-full flex items-center justify-center flex-col ">
        <ProjectCard
          id={(currentProject.id< 10)? `0${currentProject.id}` : currentProject.id}
          title={currentProject.title}
          image={currentProject.image}
          description={currentProject.description}
          repositoryLink={currentProject.repositoryLink}
          nextBtnFn={handleNext}
          backBtnFn={handlePrev}
        />

      </div>
    </>
  );
}
