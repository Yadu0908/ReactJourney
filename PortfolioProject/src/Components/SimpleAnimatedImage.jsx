import React from 'react';
import pic from "../assets/Images/myImage.png";

const MovingBlurImage = () => {
  return (
    <div className="relative w-96 h-96 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 animate-move-blur rounded-full"></div>
      <img 
        src={pic} 
        alt="Developer" 
        className="absolute inset-0 w-full h-full object-cover rounded-full z-10"
      />
    </div>
  );
};

export default MovingBlurImage;