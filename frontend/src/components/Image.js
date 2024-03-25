import React, {useState} from 'react';
import './Image.css'  

function Image({ onImageUpload }){
    const [selectedImage, setSelectedImage] = useState(null);

    // image selection
    const handleImageChange = (event) => {
        const file = event.target.files[0];
        setSelectedImage(file);
    };

    // handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        if (selectedImage) {
            onImageUpload(selectedImage);  
            setSelectedImage(null);
        } else {
            console.error("No image selected");  
        }
    };

 
    return (
        <div>
            <h1 className='upload-header'>Upload Image for detection</h1>  
           <form className='upload-form' onSubmit={handleSubmit}>
              <label htmlFor='upload-input' className='upload-label'>Select File</label>
              <input id='upload-input' type='file' className='upload-input' accept='image/*' onChange={handleImageChange}></input>
              <br />
              <button type='submit' className='upload-image'>Upload Image</button>
        </form>
        </div>
        
       
    );
}

export default Image;