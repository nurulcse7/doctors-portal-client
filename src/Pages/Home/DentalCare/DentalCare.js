import React from 'react';
import Treatment from '../../../assets/images/treatment.png'

const DentalCare = () => {
  return (
    <div className='hero '>
      <div className='hero-content flex-col lg:flex-row p-28'>
        <img
          src={Treatment}
          className='max-w-sm rounded-lg shadow-2xl' alt='DentalCarePhoto'
        />
        <div className='p-16'>
          <h1 className='text-5xl font-bold'>Exceptional Dental <br /> Care, on Your Terms</h1>
          <p className='py-6'>
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className='btn btn-primary'>Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default DentalCare;
