
import { auth } from '../../firebase';
import { Link, useNavigate } from 'react-router-dom';
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
      const [flag,setFlag] = useState(false)
      const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setSearchResult(null);
        try {
            // Validate aadharID and voterID before making the request
            if (!aadharID || !voterID) {
                setError("Please provide both Aadhar ID and Voter ID");
                return;
            }
    
            // Make HTTP request to your backend
            const response = await axios.post(`/admin`, {aadharID , voterID});
            setSearchResult(response.data);
            setFlag(true);
        } catch (err) {
            console.log(err);
            setError("An error occurred while fetching data. Please try again.");
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
            {searchResult ? (
               <></>
            ):(
            <div>
                {flag ? (<>No such voter with this ID found!!</>):(<></>)}
            </div>
            )}
            {error && <p>Error: {error}</p>}
        </div>
        
        </div>
        {searchResult ? (<div id="detailShow" className="bg-white bg-opacity-30 backdrop-blur-md rounded-lg p-5 shadow-lg shadow-gray-800 w-80 mr-5 h-auto flex flex-col justify-center items-center">
    {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyUO0lmYGGzGe9jOXgF8XzowltGRkjgNfjvA" className="w-20 h-20 rounded-full  mb-5"/> */}
    <div className="flex justify-center items-center ">
      <ol className="text-left">
        <li className='text-center my-[14px]'><p>{searchResult.name}</p></li>
        <li className='text-center my-[14px]'><p>{searchResult.dob}</p></li>
        <li className='text-center my-[14px]'><p>{searchResult.aadharID}</p></li>
        <li className='text-center my-[14px]'><p>{searchResult.voterID}</p></li>
      </ol>
    </div>
    <Link to='/ui' className='w-full py-2 bg-blue-500 text-white text-center border-none rounded-lg cursor-pointer mb-2 mt-5 font-montserrat transition-colors duration-300 hover:bg-blue-700'>Caste Vote</Link>
  </div>):(<><div id="detailShow" className="bg-white bg-opacity-30 backdrop-blur-md rounded-lg p-5 shadow-lg shadow-gray-800 w-80 mr-5 h-auto flex flex-col justify-center items-center">
    {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyUO0lmYGGzGe9jOXgF8XzowltGRkjgNfjvA" className="w-20 h-20 rounded-full  mb-5"/> */}
    <div className="flex justify-center items-center ">
      <ol className="text-left">
        <li className='text-center my-[14px]'><p>Voter Name</p></li>
        <li className='text-center my-[14px]'><p>Voter Date of birth</p></li>
        <li className='text-center my-[14px]'><p>AadharID number</p></li>
        <li className='text-center my-[14px]'><p>VoterID number</p></li>
      </ol>
    </div>
    <Link to='/ui' className='w-full py-2 bg-blue-500 text-white text-center border-none rounded-lg cursor-pointer mb-2 mt-5 font-montserrat transition-colors duration-300 hover:bg-blue-700'>Caste Vote</Link>
  </div></>)}
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