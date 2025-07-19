import React from "react";
import codeforcesIcon from "../../../assets/codeforcesIcon.png"
import codechefIcon from "../../../assets/codechefIcon.png"

import { useEffect } from "react";
function CpCard2() {

    const [cfMaxRating, setCfMaxRating] = React.useState(0);
    useEffect(()=>{
      fetch('https://codeforces.com/api/user.info?handles=zohrex')
        .then(response => response.json())
        .then(data => {
          setCfMaxRating( data.result[0].maxRating);
        })
    },[])
    return ( 
        <div className="px-10">
      <div className="relative w-full h-45 rounded-xl mt-6 mb-10 shadow-md shadow-[#693B93]">
        
        <div className="relative z-10 flex flex-col gap-6 items-start justify-center h-full px-6 pt-4 pb-4">
          {/* Card 1 */}
          <div className="w-full p-4 rounded-lg bg-[linear-gradient(to_right,_rgba(105,59,147,0.2)_0%,_rgba(110,191,244,0.2)_77%,_rgba(70,144,212,0.2)_100%)] backdrop-blur-md
 text-white text-xl">
              <a href="https://codeforces.com/profile/zohrex" target="_blank" rel="noopener noreferrer" className="flex flex-col">
                <div className="flex justify-between items-center mx-2">
                  <div className="flex gap-4 justify-center items-start">
                    <img className="w-7" src={codeforcesIcon}/><p> Codeforces</p>
                  </div>
                  <p>{cfMaxRating} (Max)</p>
                  
                  
                </div>
              </a>
          </div>
          <div className="w-full p-4 rounded-lg bg-[linear-gradient(to_right,_rgba(105,59,147,0.2)_0%,_rgba(110,191,244,0.2)_77%,_rgba(70,144,212,0.2)_100%)] backdrop-blur-md
 text-white text-xl">
              <a href="https://www.codechef.com/users/zohrex" target="_blank" rel="noopener noreferrer" className="flex flex-col">
                <div className="flex justify-between items-center mx-2">
                  <div className="flex gap-4 justify-center items-start">
                    <img className="w-7" src={codechefIcon}/><p> CodeChef</p>
                  </div>
                  <p>1499 (Max)</p>
                </div>
              </a>
 </div>
         
        </div>
      </div>
    </div>
     );
}

export default CpCard2;