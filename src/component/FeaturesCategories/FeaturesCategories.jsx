import React, { useEffect, useState } from 'react';
import FeaturedCategory from './FeaturedCategoy/FeaturedCategory';
import './featuresCategories.css'

const FeaturesCategories = () => {
    const [category,setCategory] =useState()
    
    useEffect(()=>{

    //     fetch('http://localhost:5000/homeslider')
    //   .then(response => response.json())
    //   .then(data => setImages(data))

      fetch('http://localhost:5000/featurescategory')
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