import React from "react";

function CpCard1() {
    return ( 
        <div className="flex justify-between items-center gap-10 mt-10 px-10">
      {/* Card 1 */}
      {/* Card 1 */}
      <div className="relative w-full h-[190px] rounded-xl mt-6">
        <div className="absolute inset-0 z-0 rounded-xl bg-gradient-to-br from-[#2A0845] via-[#3B0D5F] to-[#1F053A]"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full pt-4">
                    <div className="w-24 h-24 flex items-center justify-center rounded-full border-4 border-white mb-3 text-white text-2xl font-semibold">
            360
          </div>
          <h1 className="text-white text-2xl font-semibold">Problems Solved</h1>
        </div>
      </div>


      {/* Card 2 */}
      <div className="relative w-full h-[190px] rounded-xl mt-6">
        <div className="absolute inset-0 z-0 rounded-xl bg-gradient-to-br from-[#2A0845] via-[#3B0D5F] to-[#1F053A]"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full pt-4">
          <div className="w-24 h-24 flex items-center justify-center rounded-full border-4 border-white mb-3 text-white text-2xl font-semibold">
            40
          </div>
          <h1 className="text-white text-2xl font-semibold">Contests Given</h1>
        </div>
      </div>

      {/* Card 3 */}
      <div className="relative w-full h-[190px] rounded-xl mt-6">
        <div className="absolute inset-0 z-0 rounded-xl bg-gradient-to-br from-[#2A0845] via-[#3B0D5F] to-[#1F053A]"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full pt-4">
          <div className="w-24 h-24 flex items-center justify-center rounded-full border-4 border-white mb-3 text-white text-2xl font-semibold">
            347
          </div>
          <h1 className="text-white text-2xl font-semibold">Best Rank Achieved</h1>
        </div>
      </div>
    </div>
     );
}

export default CpCard1;