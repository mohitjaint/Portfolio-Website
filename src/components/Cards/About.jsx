import React from "react";
import profilePhoto from '../../assets/profile.jpg';
function About() {
    return ( 
        <div className="flex justify-center items-center mb-16">
            <div className="w-[600px] flex flex-col items-center text-center mt-10">
            
            {/* Profile Section (Image + Text Side-by-Side) */}
            <div className="flex justify-center items-center gap-10 mt-16 mb-16">
                
                {/* Profile Image with Blurred Radial Background */}
                <div className="relative w-66 h-66 rounded-full flex items-center justify-center flex-shrink-0 border-2 border-[#9857D3]">
                <div className="absolute inset-0 z-0 flex items-center justify-center">
                    <div className="w-64 h-64 rounded-full blur-2xl opacity-70 bg-[radial-gradient(circle,_#763CAC_0%,_white_100%)]"></div>
                </div>
                <img
                    src={profilePhoto}
                    alt="Profile"
                    className="relative z-10 w-62 h-62 rounded-full object-cover"
                />
                </div>
    
                {/* Name & Intro Text */}
                <div className="text-white text-left">
                <h1 className="text-4xl font-bold mb-2">I am Mohit</h1>
                <p className="text-lg">Welcome to my portfolio website!</p>
                </div>
            </div>
    
            {/* Headline */}
            <h2 className="text-white font-semibold text-2xl">
                I'm a Frontend Developer
            </h2>
    
            {/* Bio */}
            <p className="text-white text-lg mt-4 leading-relaxed">
                A passionate CSE undergrad driven by curiosity and creativity — exploring the worlds of web development, robotics, and AI/ML. Constantly evolving, one line of code and one challenge at a time.
            </p>
    
            </div>
        </div>
     );
}

export default About;