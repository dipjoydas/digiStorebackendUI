import React, { useEffect, useState } from 'react';
import FeaturedCategory from './FeaturedCategoy/FeaturedCategory';
import './featuresCategories.css'

const FeaturesCategories = () => {
    const [category,setCategory] =useState()
    
    useEffect(()=>{

    //     fetch('https://digi-storebackend.vercel.app/homeslider')
    //   .then(response => response.json())
    //   .then(data => setImages(data))

      fetch('https://digi-storebackend.vercel.app/featurescategory')
      .then(response => response.json())
      .then(data => setCategory(data))
     
      
     
  
        
    },[])
    return (
        <div className='featuresCategoryContainer'>
                    {
                        category?.map(category=><FeaturedCategory key={category.id} data={category}></FeaturedCategory>)
                    }
                   
                   

                </div>
    );
};

export default FeaturesCategories;