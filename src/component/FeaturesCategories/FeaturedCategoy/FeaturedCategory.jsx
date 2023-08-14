
import React from 'react';
import './featuredCategory.css'
import { Link } from 'react-router-dom';

const FeaturedCategory = (props) => {
    const Authentication = JSON.parse(localStorage.getItem("token"))
    const {_id,des,img,url} =props.data
    const handleDelete =async()=>{
        if(window.confirm('Are you really want to delete')){
            try{
                const res = await fetch(`http://localhost:5000/fcategory/delete/`,{
                    method:"DELETE",
                    headers:{
                        "Content-Type": "application/json",
                        "Authentication": Authentication 
                    },
                    body:JSON.stringify({img,_id})

                })
                const result = await res.json()
                console.log(result)

            }catch (error){

            }


        }
        
    }
    return (
        <div className='category'>
            <img src={`http://localhost:5000/getfcimage/${img}`} alt="" />
            <p><Link to={`/${url}`}>{des}</Link> </p>
            <button onClick={()=>handleDelete()}>delete</button>
            
        </div>
    );
};

export default FeaturedCategory;