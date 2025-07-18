import React from "react";
import profilePhoto from '../../assets/profile.jpg';
function About() {
    return ( 
        <div className="flex justify-center items-center mb-16">
            <div className="w-[600px] flex flex-col items-center text-center mt-10">
            
            {/* Profile Section (Image + Text Side-by-Side) */}
            <div className="flex justify-center items-center gap-10 mt-16 mb-16">
                
                {/* Profile Image with Blurred Radial Background */}
                <div className="relative w-[258px] h-[258px] flex-shrink-0">
                <div className="absolute inset-0 z-0 flex items-center justify-center">
                    <div className="w-64 h-64 rounded-full blur-2xl opacity-70 bg-[radial-gradient(circle,_#763CAC_0%,_white_100%)]"></div>
                </div>
                <img
                    src={profilePhoto}
                    alt="Profile"
                    className="relative z-10 w-[258px] h-[258px] rounded-full object-cover"
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
                A self-taught UI/UX designer, functioning in the industry for 3+ years now. I make meaningful
                and delightful digital products that create an equilibrium between user needs and business goals.
            </p>
    
            </div>
        </div>
     );
}

export default About;