import { useState, useEffect } from 'react';
import { auth } from '../../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import {  useNavigate } from 'react-router-dom';
import Validation from '../../LoginValidation';

function AuthenticationForm() {
  
    
  const [values, setValues] = useState({

    email: '',
    password: ''

  });
  const handleInput = (event) => {
    setValues(prev => ({ ...prev, [event.target.name]: event.target.value }))
  }
  const navigate = useNavigate();
  const [SubmitButtonDisabled, setSubmitButtonDisabled] = useState(false);
  const [errors, setErrors] = useState({});
  function handleSubmit(event) {
    event.preventDefault();

    // Set the disabled state before checking for errors
    setSubmitButtonDisabled(true);

    setErrors(Validation(values));
    if (errors.email === '' && errors.password === '') {
        signInWithEmailAndPassword(auth, values.email, values.password)
          .then((res) => {
            setSubmitButtonDisabled(false);
            console.log(res);
            navigate('/admin');
          })
          .catch((err) => {
            setSubmitButtonDisabled(false);
            alert("Invalid Id or password, Please check them carefully!")
            console.log(err);
          });
        }else {
            // If there are errors, enable the button
            setSubmitButtonDisabled(false);
          }
  }
  useEffect(() => {
    // Display alerts for each error
    
    if (errors.email) alert(`${errors.email}`);
    if (errors.password) alert(`${errors.password}`);
  }, [errors]);

  useEffect(() => {
    // This effect will be triggered after the errors state has been updated

    // Check if there are no errors and submit the form
    if (errors.email === '' && errors.password === '') {
      signInWithEmailAndPassword(auth, values.email, values.password)
        .then((res) => {
          setSubmitButtonDisabled(false);
            
          console.log(res);
          navigate('/admin');
        })
        .catch((err) => {
          setSubmitButtonDisabled(false);
        //   alert("Invalid Id or password, Please check them carefully!")
          console.log(err);
        });
    } else {
      // If there are errors, enable the button
      setSubmitButtonDisabled(false);
    }
  }, [errors, values.name, values.email, values.password, navigate]);
  return (

<>  
<div className="h-screen flex flex-col bg-cover bg-[url('https://ideogram.ai/api/images/direct/TyW8v1mDS2OcdmBC3kwbSw.jpg')]">
  <nav className="bg-orange-500 p-2 w-full shadow-orange-800 shadow-md fixed top-0 left-0 right-0 z-10">
    <div className="container mx-auto flex justify-between items-center">
      <img src="https://uidai.gov.in/images/logo/uidai_english_logo.svg" alt="Logo" className="h-10"/>
      <div className="flex items-center space-x-4">
        <img src="https://www.glidersindia.in/images/front/amrit.png" className="w-40 h-16"/>
      </div>
    </div>
  </nav>
  <div className="flex-grow flex justify-center items-center">
    <form onSubmit={handleSubmit}>
    <div className="bg-white pr-10 pl-10 pt-5 pb-5 rounded-md  z-10 bg-opacity-30 backdrop-blur-md shadow-lg shadow-gray-700">
      <div className="flex justify-center mb-4">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Emblem_of_India.svg/800px-Emblem_of_India.svg.png" className="w-24 h-32"/>
      </div>
      
      <div className="mb-4">
        <input type='email' placeholder='Enter Email' onChange={handleInput} name='email'  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"/>
      </div>
      <div className="mb-6">
        <input type='password' placeholder='Enter password' onChange={handleInput} name='password'  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"/>
      </div>
      <button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600" type='submit' disabled={SubmitButtonDisabled} >Login</button>
      <p className="text-black text-sm mt-4 ml-5">Terms & Conditions apply</p>
   
    </div>
  </form>
  </div>
</div>
    </>
    )
}

export default AuthenticationForm;