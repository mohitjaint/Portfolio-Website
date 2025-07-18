import React from "react";

function CpCard2() {
    return ( 
        <div className="px-10">
      <div className="relative w-full h-70 rounded-xl mt-6 mb-10 shadow-sm shadow-[#693B93]">
        <div className="absolute inset-0 z-0 rounded-xl bg-gradient-to-br from-[#2A0845] via-[#3B0D5F] to-[#1F053A]"></div>
        <div className="relative z-10 flex flex-col gap-6 items-start justify-center h-full px-6 pt-4">
          <div className="w-full p-4 rounded-lg bg-[#1A0B2E] text-white text-xl">Codeforces</div>
          <div className="w-full p-4 rounded-lg bg-[#1A0B2E] text-white text-xl">Codeforces</div>
          <div className="w-full p-4 rounded-lg bg-[#1A0B2E] text-white text-xl">Codeforces</div>
        </div>
      </div>
    </div>
     );
}

export default CpCard2;