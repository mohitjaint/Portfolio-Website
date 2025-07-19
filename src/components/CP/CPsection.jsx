import CpCard1 from "../Cards/CP/CpCard1";
import CpCard2 from "../Cards/CP/CpCard2";

function CPsection() {
    return ( 
        <> 
        
        <div className="w-auto p-4 mt-20 ml-10 mr-10 font-semibold text-[#9857D3] text-3xl ">
              # Competitive Programming Stats:
            </div>
            
        <CpCard1/>
        <CpCard2/>
       
            
        </>
     );
}

export default CPsection;