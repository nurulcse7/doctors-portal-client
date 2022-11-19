import React from 'react';
import Appointment from '../../../assets/images/appointment.png';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';

const Contact = () => {
  return (
    <section
      className='hero my-28'
      style={{
        background: `url(${Appointment})`,
      }}
    >
      <div className='form-control p-12'>
        <h4 className='text-center text-2xl text-secondary'>Contact Us</h4>
        <h1 className='text-center text-white text-3xl my-4'>
          Stay connected with us
        </h1>
        <input
          type='email'
          name='email'
          placeholder='Email Address'
          className='input input-bordered input-primary w-full max-w-sm'
        />
        <input
          type='text'
          placeholder='Subject'
          className='input input-bordered input-primary w-full max-w-sm my-4'
        />
        <textarea
          className='textarea textarea-primary'
          placeholder='Your message'
        ></textarea>

        <div className='flex justify-center my-8'>
          <PrimaryButton>
            <span className='font-medium capitalize text-lg text-white '>
              Submit
            </span>
          </PrimaryButton>
        </div>
      </div>
    </section>
  );
};

export default Contact;
