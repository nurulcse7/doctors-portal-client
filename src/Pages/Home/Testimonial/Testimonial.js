import React from 'react';
import quote from '../../../assets/icons/quote.svg';
import people1 from '../../../assets/images/people1.png';
import people2 from '../../../assets/images/people2.png';
import people3 from '../../../assets/images/people3.png';
import Review from './Review';

const Testimonial = () => {
  const reviews = [
    {
      _id: 1,
      name: 'Mohammad Ali',
      img: people1,
      review:
        'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
      location: 'Austin',
    },
    {
      _id: 2,
      name: 'Wilson Henry',
      img: people2,
      review:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam repellendus ut commodi animi, debitis aperiam voluptate voluptatem impedit! Illum eveniet accusamus perspiciatis quod magnam ad optio impedit modi nisi quas!',
      location: 'California',
    },
    {
      _id: 3,
      name: 'Sabah',
      img: people3,
      review:
        'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
      location: 'Texas',
    },
  ];

  return (
    <section className='my-16'>
      <div className='flex justify-between'>
        <div className='ml-4'>
          <h4 className='text-2xl text-secondary font-bold'>Testimonial</h4>
          <h2 className='text-4xl'>What Our Patients Says</h2>
        </div>
        <figure>
          <img className='w-24 lg:w-48' src={quote} alt='' />
        </figure>
      </div>
      <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {reviews.map((review) => (
          <Review key={review._id} review={review}></Review>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
