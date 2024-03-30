
import { auth } from '../../firebase';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

function Adminpage(IsAuth) {
    const navigate = useNavigate();
    const handleSignOut = () => {
        auth.signOut()
        .then(() => {
          navigate('/')
          alert("Signed out from admin")
        }).catch((err) => {
          alert(err)
        });
      };
      const [aadharID, setAadharID] = useState('');
      const [voterID, setVoterID] = useState('');
      const [searchResult, setSearchResult] = useState(null);
      const [error, setError] = useState(null);
  
      const handleSubmit = async (e) => {
          e.preventDefault();
          setError(null)
            setSearchResult(null)
          try {
              // Make HTTP request to your backend
              const response = await axios.get(`/admin?aadharID=${aadharID}&voterID=${voterID}`);
              setSearchResult(response.data);
          } catch (err) {

              setError("VOTER NOT FOUND!!");
          }
      };
  
      
    if(IsAuth.name){
        return (
            <>
            
            <nav className="bg-orange-500 p-2 w-full shadow-orange-800 shadow-md fixed">
                <div className="container mx-auto flex justify-between items-center">
                    <img src="https://uidai.gov.in/images/logo/uidai_english_logo.svg" alt="Logo" className="h-10"/>
                    <div className="flex items-center space-x-4">
                    <button className="bg-white text-orange-500 px-4 py-2 rounded-lg font-semibold hover:bg-orange-400 hover:text-white transition duration-300" onClick={handleSignOut}>Sign Out</button>
                    <img src="https://www.glidersindia.in/images/front/amrit.png" className="w-40 h-16"/>
                    </div>
                </div>
            </nav>
            <div className="h-screen flex justify-center items-center bg-cover bg-[url('https://ideogram.ai/api/images/direct/b90awpBfQmu84DNp7vJc2g.jpg')]">
            

            <div className="flex-grow flex justify-center items-center">
          <div className=" bg-opacity-35 backdrop-blur-md rounded-lg p-5 shadow-lg shadow-gray-800 w-80 mr-5">
          <div>
            <form className="mb-5" onSubmit={handleSubmit}>
                <label htmlFor="aadharID" className="block mb-1 font-montserrat">Adhaar card number</label>
                <input 
                    type="text" 
                    id="aadharID" 
                    name="aadharID" 
                    placeholder="Enter your Aadhar Number" 
                    className="w-full p-2 mb-3 border border-gray-300 rounded-lg box-border font-montserrat"
                    value={aadharID} 
                    onChange={(e) => setAadharID(e.target.value)} 
                />
                
                <label htmlFor="voterID" className="block mb-1 font-montserrat">Voter ID</label>
                <input 
                    type="text" 
                    id="voterID" 
                    name="voterID" 
                    placeholder="Enter your Voter ID" 
                    className="w-full p-2 mb-3 border border-gray-300 rounded-lg box-border font-montserrat"
                    value={voterID} 
                    onChange={(e) => setVoterID(e.target.value)} 
                />

                <button 
                    type="submit" 
                    className="w-full py-2 bg-orange-500 text-white border-none rounded-lg cursor-pointer mt-5 font-montserrat transition-colors duration-300 hover:bg-orange-600"
                >
                    Search
                </button>
            </form>

            {searchResult && (
                <div>
                    <h3>Search Result:</h3>
                    <p>Name: {searchResult.name}</p>
                    <p>Date of Birth: {searchResult.dob}</p>
                </div>
            )}
            {error && <p>Error: {error}</p>}
        </div>
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