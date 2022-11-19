import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import useToken from '../../hooks/useToken';

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { createUser, updateUser } = useContext(AuthContext);
  const [signUpError, setSignUPError] = useState('');
  const [createdUserEmail, setCreatedUserEmail] = useState(''); // 75-6
  const [token] = useToken(createdUserEmail); // 75-6
  const navigate = useNavigate();
  
  if(token){
    navigate('/');
  } // 75-6 

  const handleSignUp = (data) => {
    console.log(data); // show email and password in console when user signup
    setSignUPError('');
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user); // show user details with firebase in console when user signup
        toast.success('User Created Successfully.');
        const userInfo = {
          displayName: data.name,
        };
        updateUser(userInfo)
          .then(() => {
            saveUser(data.name, data.email);
          })
          .catch((err) => console.log(err));
      })
      .catch((error) => {
        console.log(error);
        setSignUPError(error.message);
      });
  };
  // 75-4
  const saveUser = (name, email) => {
    const user = { name, email };
    fetch('http://localhost:5000/users', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('save user', data) // show acknowledged and insertedId in console when user signup 
        // navigate('/')
        // getUserToken(email); // 75-5 
        setCreatedUserEmail(email); // 75-6 
      });
  };
// // V-75-5 // http://localhost:5000/bookings?email=ara@gmail.com
//   const getUserToken = (email) => {
//     fetch(`http://localhost:5000/jwt?email=${email}`)
//       .then((res) => res.json())
//       .then((data) => {
//         if (data.accessToken) {
//           localStorage.setItem('accessToken', data.accessToken);
//           navigate('/');
//         }
//       });
//   };

  return (
    <div className='h-[800px] flex justify-center items-center'>
      <div className='w-96 p-7'>
        <h2 className='text-xl text-center'>Sign Up</h2>
        <form onSubmit={handleSubmit(handleSignUp)}>
          <div className='form-control w-full max-w-xs'>
            <label className='label'>
              {' '}
              <span className='label-text'>Name</span>
            </label>
            <input
              type='text'
              {...register('name', {
                required: 'Name is Required',
              })}
              className='input input-bordered w-full max-w-xs'
            />
            {errors.name && (
              <p className='text-red-500'>{errors.name.message}</p>
            )}
          </div>
          <div className='form-control w-full max-w-xs'>
            <label className='label'>
              {' '}
              <span className='label-text'>Email</span>
            </label>
            <input
              type='email'
              {...register('email', {
                required: true,
              })}
              className='input input-bordered w-full max-w-xs'
            />
            {errors.email && (
              <p className='text-red-500'>{errors.email.message}</p>
            )}
          </div>
          <div className='form-control w-full max-w-xs'>
            <label className='label'>
              {' '}
              <span className='label-text'>Password</span>
            </label>
            <input
              type='password'
              {...register('password', {
                required: 'Password is required',
                minLength: {
                  value: 6,
                  message: 'Password must be 6 characters long',
                },
                pattern: {
                  value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                  message:
                    'Password must have uppercase, number and special characters',
                },
              })}
              className='input input-bordered w-full max-w-xs'
            />
            {errors.password && (
              <p className='text-red-500'>{errors.password.message}</p>
            )}
          </div>
          <input
            className='btn btn-accent w-full mt-4'
            value='Sign Up'
            type='submit'
          />
          {signUpError && <p className='text-red-600'>{signUpError}</p>}
        </form>
        <p>
          Already have an account{' '}
          <Link className='text-secondary' to='/login'>
            Please Login
          </Link>
        </p>
        <div className='divider'>OR</div>
        <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
      </div>
    </div>
  );
};

export default SignUp;
