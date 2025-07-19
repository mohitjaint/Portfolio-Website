import emailIcon from "../../../assets/emailIcon.png"
import linkedinIcon from "../../../assets/linkedinIcon.png"
import codeforcesIcon from "../../../assets/codeforcesIcon.png"
import codechefIcon from "../../../assets/codechefIcon.png"
import githubIcon from "../../../assets/githubIcon.png"





import { useState } from "react";
function ContactCard() {
    const [copied, setCopied] = useState(false);
    const email = "imohitjaint@gmail.com";

    const handleCopy = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
    };
    return ( 
        <div>
      <div className="w-auto h-120 mx-10 p-10 rounded-lg bg-[linear-gradient(to_right,_rgba(105,59,147,0.2)_0%,_rgba(110,191,244,0.2)_77%,_rgba(70,144,212,0.2)_100%)] backdrop-blur-md
 text-white text-xl mb-10">
       <h1 className="font-semibold text-[#9857D3] text-3xl mb-10"># Let's Connect</h1>
        
        <ul className="flex flex-col gap-5">
        <li className="flex items-center space-x-3 group transition duration-300 ease-in-out">
            <a
            href={`mailto:${email}`}
            className="flex items-center space-x-2 transition-all duration-200 ease-in-out group-hover:scale-[1.02]"
            >
            <img
                src={emailIcon}
                className="w-5 h-5 transition-transform duration-300 group-hover:scale-110"
                alt="email"
            />
            <p className="transition-colors duration-300 group-hover:text-[#9857D3]">
                {email}
            </p>
            </a>
            <button
            onClick={handleCopy}
            className={`flex items-center space-x-1 text-sm px-2 py-1 border rounded transition-all duration-200 ease-in-out
                ${
                copied
                    ? 'border-green-500 bg-green-100 text-green-700'
                    : 'border-gray-300 hover:bg-gray-100 active:scale-95'
                }`}
            >
            <span className="transition-colors duration-300">
                {copied ? 'Copied!' : 'Copy'}
            </span>
            </button>
        </li>

        {[{
            href: "https://www.linkedin.com/in/mohit-jaint/",
            icon: linkedinIcon,
            label: "https://www.linkedin.com/in/mohit-jaint"
        }, {
            href: "https://github.com/mohitjaint/",
            icon: githubIcon,
            label: "https://github.com/mohitjaint"
        }, {
            href: "https://codeforces.com/profile/zohrex",
            icon: codeforcesIcon,
            label: "https://codeforces.com/profile/zohrex"
        }].map(({ href, icon, label }, idx) => (
            <li key={idx} className="flex items-center space-x-2 group transition duration-300 ease-in-out">
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 transition-all duration-200 ease-in-out group-hover:scale-[1.02]"
            >
                <img
                src={icon}
                className="w-5 h-5 transition-transform duration-300 group-hover:scale-110"
                alt="icon"
                />
                <p className="transition-colors duration-300 group-hover:text-[#9857D3]">
                {label}
                </p>
            </a>
            </li>
        ))}
        </ul>

 
      </div>
    </div>
     );
}

export default ContactCard;