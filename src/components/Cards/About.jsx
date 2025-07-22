import React from "react";
import profilePhoto from '../../assets/profile.jpg';
function About() {
    return ( 
        <div className="flex justify-center items-center mb-16">
            <div className="w-full flex flex-col items-center text-center mt-10">
            
            {/* Profile Section (Image + Text Side-by-Side) */}
            <div className="flex justify-center items-center gap-10 mt-16 mb-16">
                
                {/* Profile Image with Blurred Radial Background */}
                <div className="relative max-sm:ml-5 w-60 h-60 sm:w-66 sm:h-66 rounded-full flex items-center justify-center flex-shrink-0 border-2 border-[#9857D3]">
                <div className="absolute max-sm:ml-5 inset-0 z-0 flex items-center justify-center">
                    <div className="w-58 h-58 sm:w-64 sm:h-64 rounded-full blur-2xl opacity-70 bg-[radial-gradient(circle,_#763CAC_0%,_white_100%)]"></div>
                </div>
                <img
                    src={profilePhoto}
                    alt="Profile"
                    className="relative z-10 w-56 h-56 sm:w-62 sm:h-62 rounded-full object-cover"
                />
                </div>
    
                {/* Name & Intro Text */}
                <div className="text-white text-left max-sm:mr-5">
                <h1 className="text-4xl font-bold mb-2">I am Mohit</h1>
                <p className="text-lg">Welcome to my portfolio website!</p>
                </div>
            </div>
    
            {/* Headline */}
            <h2 className="text-white font-semibold text-2xl">
                I'm a Frontend Developer
            </h2>
    
            {/* Bio */}
            <p className="text-white text-lg mt-4 flex justify-center items-center leading-relaxed w-[calc(100%-5rem)] sm:w-[60%]">
                A passionate CSE undergrad driven by curiosity and creativity — exploring the worlds of web development, robotics, and AI/ML. Constantly evolving, one line of code and one challenge at a time.
            </p>
    
            </div>
        </div>
     );
}

export default About;