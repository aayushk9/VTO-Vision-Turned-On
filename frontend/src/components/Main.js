import React from 'react';
import './Main.css'; 

function Main(){
    return (
      <div className='section intro-section'>  
      <div>
        <p>Simply upload an image and our app will process it to identify objects relevant to transportation such as vehicles, pedestrians, road signs and more.</p>
        
        <br/>
        <div className='main-conatiner'>
          <div className='image-container'>
              <img src='https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/file-uploads/blogs/22606/images/15e22aa-f6dc-2ff-1ed-22d76f5a33a_maxresdefault.jpg'></img>
          </div>
          
        </div>
      </div>  
      </div>    
    )
}

export default Main;
  