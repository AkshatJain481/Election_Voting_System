import React from 'react'
import { auth } from '../../firebase';
import { useNavigate } from 'react-router-dom';
function Adminpage(IsAuth) {
    const navigate = useNavigate();
    const handleSignOut = () => {
        auth.signOut()
        .then(() => {
          navigate('/')
          alert("Signed out from admin")
        }).catch((error) => {
          alert(error)
        });
      };
      
    if(IsAuth.name){
        return (
            <>
            
            <nav class="bg-orange-500 p-2 w-full shadow-orange-800 shadow-md fixed">
                <div class="container mx-auto flex justify-between items-center">
                    <img src="https://uidai.gov.in/images/logo/uidai_english_logo.svg" alt="Logo" class="h-10"/>
                    <div class="flex items-center space-x-4">
                    <button class="bg-white text-orange-500 px-4 py-2 rounded-lg font-semibold hover:bg-orange-400 hover:text-white transition duration-300" onClick={handleSignOut}>Sign Out</button>
                    <img src="https://www.glidersindia.in/images/front/amrit.png" class="w-40 h-16"/>
                    </div>
                </div>
            </nav>
            <div className="h-screen flex justify-center items-center bg-cover bg-[url('https://ideogram.ai/api/images/direct/b90awpBfQmu84DNp7vJc2g.jpg')]">
            

            <div class="flex-grow flex justify-center items-center">
          <div className=" bg-opacity-35 backdrop-blur-md rounded-lg p-5 shadow-lg shadow-gray-800 w-80 mr-5">
            <form className="mb-5">
              <label for="name"  className="block mb-1 font-montserrat">Adhaar card number</label>
              <input type="name" id="name" name="name" placeholder="Enter your Adhaar Number" className="w-full p-2 mb-3 border border-gray-300 rounded-lg box-border font-montserrat"/>
            </form>
            <form className="mb-5">
              <label for="email"  className="block mb-1 font-montserrat">Voter ID</label>
              <input type="name" id="email" name="email" placeholder="Enter your Voter Id" className="w-full p-2 mb-3 border border-gray-300 rounded-lg box-border font-montserrat"/>
              <button type="submit" className="w-full py-2 bg-orange-500 text-white border-none rounded-lg cursor-pointer mt-5 font-montserrat transition-colors duration-300 hover:bg-orange-600">Submit</button>
            </form>
          </div>
          </div>
        </div>
        </>
          )
    }
    else{
        return(
        <div>
            You are NOT authorized to view this page!!
        </div>)
    }
 
}

export default Adminpage