import React, { useEffect, useState } from 'react';
import image from '../../assets/cloud-upload-a30f385a928e44e199a62210d578375a.jpg'
import './changeSlider.css'

const ChangeSlider = () => {
  const Authentication = JSON.parse(localStorage.getItem("token"))
  const [imgc1, setImgc1] = useState()
  
  const [imgc2, setImgc2] = useState()
  const [imgc3, setImgc3] = useState()
  const [images, setImages] = useState([])
  


  // for featured image part 
  const [imgcFI1, setImgcFI1] = useState()
  const [imgcFI2, setImgcFI2] = useState()
  const [imagesFI, setImagesFI] = useState([])
  const handleImage = (e) => {
    e.target?.nextSibling?.click()

  }
  const handleImageChange = (e, setImgc,setImages,images) => {

    const file = e.target.files[0]


    setImgc(file)
    // setImgc([...imgc, file])
    setImages([...images, file])

  }
  const handleImgUplaod = async (images,pathName) => {
   
   


    // ////-----------------------
    const formData = new FormData();

    // Append each selected image to the FormData object
    images.forEach((file, index) => {
      formData.append(`images`, file);
    });
    try {
      const res = await fetch(`https://digi-storebackend.vercel.app/${pathName}`, {
        method: "POST",
        headers:{
          "Authentication": Authentication
      },
        body: formData
      })
      const result = await res.json()

    } catch (error) {
      console.log(error)

    }

  }
  


  return (<>
  <h1>Change slider</h1>
  <div className='ChangeSliderContainer'>
      <div className='imgContainer' onClick={handleImage}>
        {
          imgc1 ? <img src={URL.createObjectURL(imgc1)} /> : <img src={image} alt="" />
        }

        <input type="file" name="" id="image1" onChange={(e)=>handleImageChange(e,setImgc1,setImages,images)}required /><br />

      </div>
      <div className='imgContainer' onClick={handleImage}>
        {
          imgc2 ? <img src={URL.createObjectURL(imgc2)} /> : <img src={image} alt="" />
        }

        <input type="file" name="" id="image2" onChange={(e)=>handleImageChange(e,setImgc2,setImages,images)} required/><br />

      </div>
      <div className='imgContainer' onClick={handleImage}>
        {
          imgc3 ? <img src={URL.createObjectURL(imgc3)} /> : <img src={image} alt="" />
        }

        <input type="file" name="" id="image3" onChange={(e)=>handleImageChange(e,setImgc3,setImages,images)}required /><br />

      </div>
      
    </div>
    <input type="submit" value="change slider " onClick={()=>handleImgUplaod(images,'uploadsliderimg')} />
    {/*--------------------------------- change or add featuredimages ------------------------------------ */}
    <br />
    <h1>change featured Images </h1>
    <div className='ChangeSliderContainer'>
    
    <div className='imgContainer' onClick={handleImage}>
        {
          imgcFI1 ? <img src={URL.createObjectURL(imgcFI1)} /> : <img src={image} alt="" />
        }

        <input type="file" name="" id="imageFI1" onChange={(e)=>handleImageChange(e,setImgcFI1,setImagesFI,imagesFI)}required /><br />

      </div>
      <div className='imgContainer' onClick={handleImage}>
        {
          imgcFI2 ? <img src={URL.createObjectURL(imgcFI2)} /> : <img src={image} alt="" />
        }

        <input type="file" name="" id="imageFI2" onChange={(e)=>handleImageChange(e,setImgcFI2,setImagesFI,imagesFI)} required/><br />

      </div>
      

    </div>
    <input type="submit" value="change slider " onClick={()=>handleImgUplaod(imagesFI,'uploadfeaturedimg')} />
   
  </>
    
  );
};

export default ChangeSlider;
