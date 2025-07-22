import React from "react";
import githubIcon from "../../../assets/githubIcon.png"
import backIcon from "../../../assets/backIcon.png"
import nextIcon from "../../../assets/nextIcon.png"

function ProjectCard({id, title, image, description,repositoryLink, nextBtnFn, backBtnFn}) {
    return ( 
        <div className="sm:relative w-full sm:h-120 flex max-sm:flex-col gap-0 mb-10 p-10">

        {/* Left Div – Project Title */}
        <div className="sm:z-0 w-[50%] max-sm:w-full h-full bg-[#11071F] rounded-lg flex flex-col justify-start px-6">
            <p className="text-[#9857D3] text-sm font-semibold">{id}</p>
            <h2 className="text-white text-3xl font-bold mt-2">{title} <a href={repositoryLink} target="_blank" >
            <img src={githubIcon} alt="GitHub" className="inline-block w-6 h-6 ml-2" />
            </a></h2>
        </div>

        {/* Right Div – Image */}
        <div className="sm:z-0 w-[50%] max-sm:w-full max-sm:mt-10 h-full bg-[#2B0B3A] rounded-lg relative flex items-center justify-between">
            <img
            src={image}
            alt="Project"
            className="sm:absolute p-2 w-[calc(100%-1rem)]  object-cover rounded-tl-2xl border-1 border-[#9857D3]"
            />
        </div>

        {/* Floating Description Div */}
        <div className="sm:absolute sm:z-10 max-sm:mt-4  sm:top-1/2 sm:left-0 sm:-translate-y-1/2 w-full sm:w-[50%] h-auto sm:ml-10 rounded-lg bg-[radial-gradient(circle,_rgba(105,59,147,0.2)_0%,_rgba(110,191,244,0.2)_77%,_rgba(70,144,212,0.2)_100%)]">
            <p className="text-white pr-8 pl-4 pt-4 pb-4">
            {description}
            </p>
        </div>

        {/* Floating Blur Background */}
        <div className="sm:absolute z-[-1] sm:z-5 sm:top-1/2 max-sm:mt-4 sm:left-0 sm:-translate-y-1/2 w-full sm:w-[50%] h-auto sm:ml-10 rounded-lg bg-[radial-gradient(circle,_rgba(105,59,147,0.2)_0%,_rgba(110,191,244,0.2)_77%,_rgba(70,144,212,0.2)_100%)] blur-xl">
        </div>

        {/*Floating Button */}
        {/* Back Button */}
        <div className="absolute z-20 top-1/2 left-0 -translate-y-1/2 w-10 h-10 ml-3 rounded-full bg-[radial-gradient(circle,_rgba(105,59,147,0.2)_0%,_rgba(110,191,244,0.2)_77%,_rgba(70,144,212,0.2)_100%)] transition-transform duration-150 active:scale-90 ">
            <button
            onClick={()=> backBtnFn()}>
                <img src={backIcon} />
            </button>
        </div>
        {/* Next Button */}
        <div className="absolute z-20 top-1/2 right-0 -translate-y-1/2 w-10 h-10 mr-3 rounded-full bg-[radial-gradient(circle,_rgba(105,59,147,0.2)_0%,_rgba(110,191,244,0.2)_77%,_rgba(70,144,212,0.2)_100%)] transition-transform duration-150 active:scale-90 ">
            <button
            onClick={()=> nextBtnFn()}>
                <img src={nextIcon} />
            </button>
        </div>

        </div>

     );
}

export default ProjectCard;