import React from 'react';

function Card({ photoUrL, name, title, description, onImageClick }) {
  const handleImageClick = () => {
    onImageClick(photoUrL);
  };

  return (
    <div className='custom-box-shadow h-full rounded-3xl xl:mx-4 p-1'>
      <div className="card w-96 bg-base-100 shadow-xl p-3">
        <figure>
          <img
            src={photoUrL}
            alt="/"
            className='h-[300px] w-[300px] cursor-pointer rounded-lg'
            onClick={handleImageClick}
          />
        </figure>
        <div className="card-body">
          <h1 className="card-title gap-4 font-bold text-xl font-mono capitalize text-[#1d4ed8]">
            {name}
          </h1>
          <p className='text-center font-semibold m-3 text-xl text-[#ea580c]'>{title}</p>
          <p className='font-serif text-justify font-light'>{description}</p>
        </div>

      </div>
    </div>
  );
}

export default Card;
