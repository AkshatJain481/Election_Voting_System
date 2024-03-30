
function UserInterface() {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-[url('https://ideogram.ai/api/images/direct/tFP3YJtiRW6GcbuJNBtd0Q.jpg')] bg-cover bg-center bg-no-repeat flex justify-between items-center">
      <nav className="bg-orange-500 p-2 w-full shadow-orange-800 shadow-md fixed top-0 left-0 right-0 z-10">
    <div className="container mx-auto flex justify-between items-center">
      <img src="https://uidai.gov.in/images/logo/uidai_english_logo.svg" alt="Logo" className="h-10"/>
      <div className="flex items-center space-x-4">
        <img src="https://www.glidersindia.in/images/front/amrit.png" className="w-40 h-16"/>
      </div>
    </div>
  </nav>
    <div className="flex mt-[6%]">
    <div className="grid grid-cols-1">
      <button className="flex items-center border-none w-[200px] h-[80px] font-bold rounded-[30px] text-xl ml-[350px] mb-[100px] party-logos hover:bg-[#00a7b3] hover:text-[#ffffff] bg-[#ffffff]">
        <img className="w-[70px] h-[50px] mr-[20px] ml-[20px]" src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Aam_Aadmi_Party_logo_%28English%29.svg/75px-Aam_Aadmi_Party_logo_%28English%29.svg.png'></img>
        <div className="div">
          AAP
        </div>
      </button>
      <button className="flex items-center border-none w-[200px] h-[80px] font-bold rounded-[30px] text-xl ml-[350px] mb-[100px] party-logos hover:bg-[#0000ff] hover:text-[#ffffff] bg-[#ffffff]">
        <img className="w-[70px] h-[50px] mr-[20px] ml-[20px] " src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Elephant_Bahujan_Samaj_Party.svg/75px-Elephant_Bahujan_Samaj_Party.svg.png'></img>
        <div className="div">
          BSP
        </div>
      </button>
      <button className="flex items-center border-none w-[200px] h-[80px] font-bold rounded-[30px] text-xl ml-[350px] mb-[100px] party-logos hover:bg-[#ff4500] hover:text-[#ffffff] bg-[#ffffff]">
        <img className="w-[70px] h-[50px] mr-[20px] ml-[20px]" src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/BJP_Flag.svg/75px-BJP_Flag.svg.png'></img>
        <div className="div">
          BJP
        </div>
      </button>
    </div>
    <div className="grid grid-cols-1">
      <button className="flex items-center border-none w-[200px] h-[80px] font-bold rounded-[30px] text-xl ml-[350px] mb-[100px] party-logos hover:bg-[#ff0000] hover:text-[#ffffff] bg-[#ffffff]">
        <img className="w-[70px] h-[50px] mr-[20px] ml-[20px]" src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/CPI-M-flag.svg/75px-CPI-M-flag.svg.png'></img>
        <div className="div">
          CPI
        </div>
      </button>
      <button className="flex items-center border-none w-[200px] h-[80px] font-bold rounded-[30px] text-xl ml-[350px] mb-[100px] party-logos hover:bg-[#9acd32] hover:text-[#ffffff] bg-[#ffffff]">
        <img className="w-[70px] h-[50px] mr-[20px] ml-[20px]" src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Indian_National_Congress_Flag.svg/75px-Indian_National_Congress_Flag.svg.png'></img>
        <div className="div">
          INC
        </div>
      </button>
      <button className="flex items-center border-none w-[200px] h-[80px] font-bold rounded-[30px] text-xl ml-[350px] mb-[100px] party-logos hover:bg-[#9acd32] hover:text-[#ffffff] bg-[#ffffff]">
        <img className="w-[70px] h-[50px] mr-[20px] ml-[20px]" src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/NPP_Flag.jpg/75px-NPP_Flag.jpg'></img>
        <div className="div">
          NPP
        </div>
      </button>
    </div>
  </div>
  </div>
  )
}

export default UserInterface