import React, { useRef, useState } from 'react';
import image from '../../assets/cloud-upload-a30f385a928e44e199a62210d578375a.jpg'

const FeaturesCategory = () => {
    const Authentication = JSON.parse(localStorage.getItem("token"))
    const [img ,setImg] =useState('')
    const des = useRef()
    const routeUrl = useRef()


    const handleImage =()=>{
        document.getElementById('image').click()
    }
    const handleImageChange =(e)=>{
        const file = e.target.files[0]
        setImg(file)

    }
    const handleSubmit =async(e)=>{
        e.preventDefault()
        const description = des.current.value 
        const routeurl = routeUrl.current.value 
        // first upload image 
        const formData = new FormData();
        formData.append("image",img)
        
            const response = await fetch("https://digi-storebackend.vercel.app/addfeaturescategoryimage", {
            method:"POST",
            headers:{
                "Authentication": Authentication 
            },
            body: formData,
        });
        const result = await response.json()
        const FeaturesCategory = {
            des:description ,
            url:routeurl ,
            img:result
        }
        // now add features category ---------------------------------------
        const fC = await fetch("https://digi-storebackend.vercel.app/addfeaturescategory",{
            method:"POST",
            headers:{
                "Content-Type": "application/json",
                "Authentication": Authentication 
            },
            body:JSON.stringify(FeaturesCategory)
        }
        )
        const fCresult = await res.json()



    }
    return (
        <div>
            <form action=""onSubmit={handleSubmit}>
                <input type="text" ref={des} name="" id="" placeholder='category discription' />
                <input type="text" ref={routeUrl} name="" id=""  placeholder='route url '/>
                <div className='imgContainer' onClick={handleImage}>
                    {
                        img? <img src={URL.createObjectURL(img)}/>:<img src={image}  alt="" />
                    }
                  
                  <input type="file" name="" id="image" onChange={handleImageChange} required/><br />

                </div>
                <button type="submit"id='submit'>submit</button>
            </form>
            
        </div>
    );
};

export default FeaturesCategory;