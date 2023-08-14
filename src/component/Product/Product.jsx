import React from 'react';
import './product.css'

const Product = ({ data, handleAddingFeaturesProduct, fPIds,handleRemovingFeaturesProcduct ,handleUpdate }) => {
    const Authentication = JSON.parse(localStorage.getItem("token"))
    const { _id, title, price, oldPrice, regularPrice, keyFeatures, img } = data
    const isFeaturesProuct = Boolean(fPIds?.indexOf(_id) != -1)

    const handleDelete = async (id) => {
        if (window.confirm('Are you really want to delete')) {
            try {
                const res = await fetch(`http://localhost:5000/product/delete/`, {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                        "Authentication": Authentication 
                    },
                    body: JSON.stringify({ img, _id })

                })
                const result = await res.json()

            } catch (error) {

            }


        }


    }
    // const handleUpdate = (id)=> {

    //     console.log('works handleupdate')

    // }
    return (
        // <div className='productContainer' onClick={props.anfunc}>
        <div className='productContainer' >
            <img src={`http://localhost:5000/getimage/${img}`} alt="" />
            <h3>{title}</h3>
            <span>code : {_id}</span>
            <ul>
                {
                    keyFeatures?.map(keyFeature => <li>{keyFeature}</li>)
                }
            </ul>
            <div>
                <button className='delete' onClick={() => handleDelete(_id)}>Delete</button>
                <button className='update ' onClick={() => handleUpdate(_id)}>Update</button>
                {
                    isFeaturesProuct ? <>
                        <input type="checkbox"  name="" value={_id}  className='removingfP' onClick={(e)=>handleRemovingFeaturesProcduct(e)} />
                        <label htmlFor=""> remove   Features Product</label>
                    </> : <div>
                        
                        <label htmlFor=""> Make  Features Product<input type="checkbox"  name="" value={_id}  className='makingFC' onClick={(e) => handleAddingFeaturesProduct(e)} />                   </label>
                    </div>
                }
            </div>

        </div>
    );
};

export default Product;