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
<>  <div className='bg-[#000000] max-w-[400px] h-[400px] rounded-3xl mx-auto mt-[8%]'>
          <form className="flex flex-col " onSubmit={handleSubmit}>
            <div className='mx-auto mt-[25px]'>
              <label className="font-montser5at text-[20px]  text-white font-bold mt-[15px] flex items-start mb-[15px]" htmlFor="email">Email</label>
              <input className="font-montserrat placeholder:text-white bg-white bg-opacity-25 border-white focus:border-white
    focus:outline-white focus:bg-opacity-35 text-white rounded-3xl  py-2 pl-6 pr-20 h-10 w-400  
    " type='email' placeholder='Enter Email' onChange={handleInput} name='email' />
              {/* {errors.email && <span>{errors.email}</span>} */}
            </div>
            <div className='mx-auto mt-[40px] mb-[30px]' >
              <label className="font-montserrat text-xl text-white font-bold mt-4  flex items-start mb-4" htmlFor="password">password</label>
              <input className=" border font-montserrat placeholder:text-white bg-white bg-opacity-25 border-white focus:border-white
    focus:outline-white focus:bg-opacity-35  text-white rounded-3xl py-2 pl-6 pr-20 h-10 w-400   
    " type='password' placeholder='Enter password' onChange={handleInput} name='password' />
              {/* {errors.password && <span>{errors.password}</span>} */}
            </div>  
            <div className="flex justify-center items-center">
            <button className="font-montserrat text-xl text-white mx-auto
 rounded-3xl font-bold bg-orange border-none w-52 h-12 mb-2.5 transition ease-in-out duration-300 hover:bg-new hover:scale-110  active:bg-new1 mt-5 justify-center items-center
 " type='submit' disabled={SubmitButtonDisabled} >Sign in (Admin)</button>
 </div> 
           
          </form>
        
          </div>
    </>
    )
}

export default AuthenticationForm;