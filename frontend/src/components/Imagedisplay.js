import React from 'react';
import './Imagedisplay.css';   

function Imagedisplay({originalImage, processedImage}){
   return (
    <div className='image-display'>
      <div className='image-container'>
         <h3 className='image-title'>Original Image</h3>
         <img src={originalImage || 'placeholder.jpg'} alt="Original" className="image" />
      </div>
      <div className='image-container'>
         <h3 className='image-title'>Processed Image</h3>
         <img src={processedImage || 'placeholder.jpg'} alt="Original" className="image" />
      </div>  
    </div>
   );
}

export default Imagedisplay;  