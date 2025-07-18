import React from "react";

function ProjectCard() {
    return ( 
        <div className="relative w-full h-120 flex gap-0 mb-10 p-10">

        {/* Left Div – Project Title */}
        <div className="z-0 w-[50%] h-full bg-[#11071F] rounded-lg flex flex-col justify-start px-6">
            <p className="text-[#9857D3] text-sm font-semibold">01</p>
            <h2 className="text-white text-3xl font-bold mt-2">Project Title</h2>
        </div>

        {/* Right Div – Image */}
        <div className="z-0 w-[50%] h-full bg-[#2B0B3A] rounded-lg relative">
            <img
            src="https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg"
            alt="Project"
            className="absolute top-6 left-6 w-[calc(100%-1rem)] h-[calc(100%-2rem)] object-cover rounded-tl-lg"
            />
        </div>

        {/* Floating Description Div */}
        <div className="absolute z-10 top-1/2 left-0 -translate-y-1/2 w-[50%] h-auto ml-10 rounded-lg bg-[radial-gradient(circle,_rgba(105,59,147,0.2)_0%,_rgba(110,191,244,0.2)_77%,_rgba(70,144,212,0.2)_100%)]">
            <p className="text-white pr-8 pl-4 pt-4 pb-4">
            The Amazon Clone project is a full-stack e-commerce web application that replicates key features of the original Amazon platform. It includes user authentication, product listings, shopping cart functionality, and a secure checkout process. Built using React for the frontend and Firebase or Node.js for the backend, it offers real-time data updates and a smooth user experience. The UI closely mimics Amazon’s layout, including a responsive design for mobile compatibility. Features like dynamic search, product filtering, and user order history enhance functionality.
            </p>
        </div>

        {/* Floating Blur Background */}
        <div className="absolute z-5 top-1/2 left-0 -translate-y-1/2 w-[52%] h-[165px] rounded-lg bg-[radial-gradient(circle,_rgba(105,59,147,0.2)_0%,_rgba(110,191,244,0.2)_77%,_rgba(70,144,212,0.2)_100%)] blur-xl">
        </div>

        </div>

     );
}

export default ProjectCard;