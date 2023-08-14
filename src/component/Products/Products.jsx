import React, { useEffect, useRef, useState } from 'react';
import {  useLocation } from 'react-router-dom';
import './products.css'
import Product from '../Product/Product';
import image from '../../assets/cloud-upload-a30f385a928e44e199a62210d578375a.jpg'

const Products = () => {
    const Authentication = JSON.parse(localStorage.getItem("token"))
    const [products , setProducts] = useState([])
    const [search , setSearch] = useState('')
    const [updateItem , setUpdateItem] = useState({})
    
    const location = useLocation()
    const text = useRef('')
    // --------------------------------------------------------------------------------------------------------------------------------------------
    const [categories , setCategories] = useState([])
    const [keyFeature, setKeyFeature] = useState([])
    // const [specifications,setSpecifications] = useState([])
    const [specificationHeading , setSpecificationHeading] = useState([[]])

    const [imgc,setImgc] =useState('')
    const titleInput =useRef('')
    const priceInput =useRef('')
    const oldPriceInput =useRef('')
    const regularPriceInput =useRef('')




    const addArrayItem =(state,setState,e)=>{
        e.preventDefault()
        if(state.length == 0){
            setState([1])
        }
        const lastElementPointer =[...state].length -1
        const array = [...state]
        const newElement = array[lastElementPointer] + 1
        setState([...state ,newElement])

    }
    const addSepecificationHeading =(state , setState ,e)=>{
        e.preventDefault()
        
        setState([...state ,[1]])

    }
    const addSpecificationKeyValue = (state,setState,e,index) =>{
        e.preventDefault()
        const array = [...state ]
        const nestedArray = array[index]
        const lastElementPointer = nestedArray.length - 1 
        const newElement = nestedArray[lastElementPointer] + 1 
        nestedArray.push(newElement)
        array[index] = nestedArray
        setState([...array])

    }
    const {_id , category = [] , title ='' , price = 0, oldPrice = 0 , regularPrice = 0, keyFeatures = [] , specification = [] , description ='', img } = updateItem
    // set category values -----------------------------------------------------------------------
  

// convert specification data into [[]] from  .specification form is [{}] -----------------------------------------------------------------------------------
useEffect(()=>{
    const specificationarray = []
    specification.map((item , index)=>{
        specificationarray[index] = []
       const nestedArray = item[Object.keys(item)[0]]
       let i = 1
       for(i ;i<= nestedArray.length;i++){
        specificationarray[index].push(i)
       }


    })
    setSpecificationHeading([...specificationarray]) 
},[updateItem])






    // set keyFeatures value ------------------------------------------------------
   
    const ArrayInputFieldChanger = (value , cls)=>{
        useEffect(()=>{
            value.map((i , index)=>{
                const  keyFeaturesInput = document.getElementsByClassName(cls)[index]
                keyFeaturesInput.value = i
            })
        },[value])
    }
    // keyfeature part -----------------------------------------------------------------------------
    useEffect(()=>{
        keyFeatures.map((i , index)=>{
            const input = document.getElementsByClassName('keyFeature')[index]
            const stringToArray = i.split('*')
            input.childNodes[0].value = stringToArray[0]
            input.childNodes[1].value = stringToArray[1]
        })
    },[keyFeatures])

    // ArrayInputFieldChanger(keyFeatures , 'keyFeature')
    ArrayInputFieldChanger(category , 'category')
    // specification part changer --------------------------------------------------------------------
    useEffect(()=>{
        specification.map((item,index)=>{
            const key =  Object.keys(item)[0]
            const heading = document.getElementsByClassName('specificationHeading')[index]
            heading.childNodes[0].value = key
            const nestedArray = item[key]
            nestedArray.map((item ,index)=>{
              const nestedinput =  heading.getElementsByClassName('specification')[index]
              const stringToArray = item.split('*')
            nestedinput.childNodes[0].value = stringToArray[0]
            nestedinput.childNodes[1].value = stringToArray[1]


            })
        })
    },[specificationHeading])


    // change string input value ----------------------------------------------
    const StringInputFieldChanger = (value , id) => {
        useEffect(()=>{
            document.getElementById(id).value = value 
            
        },[value])
    }
    
    StringInputFieldChanger(title , 'title')
    StringInputFieldChanger(price , 'price')
    StringInputFieldChanger(oldPrice , 'oldPrice')
    StringInputFieldChanger(regularPrice , 'regularPrice')
    StringInputFieldChanger(description , 'description')  

    // img part ----------------------------------------------------------------------------------------------------------

    const handleImage =()=>{
        document.getElementById('image').click()
    }
    const handleImageChange =(e)=>{
        const file = e.target.files[0]
        setImgc(file)

    }
    useEffect(()=>{
        const operation =async ()=>{
            try{
                if(img){
                    const res = await fetch(`https://digi-storebackend.vercel.app/getimage/${img}`)
                const image = await res.blob()

                // setImgc(URL.createObjectURL(image))
                    
                }
                

            }catch(error){

            }
            // if(img){

            //     const res = await fetch(`https://digi-storebackend.vercel.app/getimage/${img}`)
            // const image = await res.blob()
            // console.log(image)
            // // setImgc(URL.createObjectURL(image))

            // }
            
            
        }
        operation()

       
    },[img])


   useEffect(()=>{
    fetch(`https://digi-storebackend.vercel.app/getproducts${path.replace('/products','')}${location.search}`).
    then(res=>res.json()).
    then(data=>setProducts(data.product))

    
   },[])
//    handle search //////////////////////////////////////////////////////

const handleSearch = async (e)=>{
    e.preventDefault()
     const inputValue = text.current.value.trim()
     try{
        
            const res = await fetch(`https://digi-storebackend.vercel.app/product/${inputValue}`)
            const result = await res.json();
            // console.log(result,"result")
            setSearch(result)
     }catch (error){
        console.log(error,"error")

     }


}
// handle update part /////////////////////////////////////////////////////////////////////////////////////
const handleUpdate =async(id)=> {
    
    try{
        
        const res = await fetch(`https://digi-storebackend.vercel.app/product/${id}`)
        const result = await res.json();
        setUpdateItem(result)
 }catch (error){
    console.log(error,"error")

 }
    
}

// ///////////////////--------------------------------------------------------------------------------------------------

const handleForm =async(e)=>{
    e.preventDefault()
    const submitbutton = document.getElementById('submit')
    submitbutton.disabled =true
    
    
    // image upload ///////////////////////////////////////////////////////////////////////////////////////////////

    const formData = new FormData();   
    formData.append("image",imgc)
    try{
        const response = await fetch(`https://digi-storebackend.vercel.app/updateimage/${img}`, {
        method:"PUT",
        headers: {
            "Authentication": Authentication 
        },
        body: formData,
    });
    const result = await response.json()

    const categories = []
const keyFeatures = []
const specifications = []
let description =''
    

    const category =document.getElementsByClassName('category')
    const keyFeature = document.getElementsByClassName('keyFeature')
    const specification =document.getElementsByClassName('specificationHeading')
    description = document.getElementById('description').value
    for(const i of category){
        categories.push(i.value)
        
    }
    for(const i of keyFeature){
        const key = i.childNodes[0].value
        const value = i.childNodes[1].value
        const joinKeyValue = key.concat('*',value)
        keyFeatures.push(joinKeyValue)
    }
    for(const i of specification){
        const key =  i.childNodes[0].value
        const values = []
        const obj = {}
        const child = i.getElementsByClassName('specification')
        for(const i of child) {

            const key = i.childNodes[0].value
            const value = i.childNodes[1].value
            const joinKeyValue = key.concat('*',value)
            values.push(joinKeyValue)
        }
        
       
        obj[key] = values
        specifications.push(obj)
      
        
    }

    const product = {
        category:categories ,
        title:titleInput.current.value ,
        price:priceInput.current.value ,
        oldPrice:priceInput.current.value ,
        regularPrice:regularPriceInput.current.value ,
        keyFeatures:keyFeatures ,
        specification:specifications ,
        description:description ,
        img:result

    }
    // now  update the product 
    const UpdatePrduct = await fetch(`https://digi-storebackend.vercel.app/updateproduct/${_id}`,{
        method:"PUT",
        headers:{
            "Content-Type": "application/json",
            "Authentication": Authentication 
        },
        body:JSON.stringify(product)
    }
    )
    const res = await UpdatePrduct.json()
    const input = document.querySelectorAll('input')
    // clear input value ////////////////////////////////////////////////
    for(const i of input ){
        i.value = ''
    }
    document.querySelector('textarea').value =''
    setImgc('')


    window.alert('added')
    submitbutton.disabled = false

    }catch (error){
        console.log('error',error)

    }
}
// -----------------------------------------handle features product ----------------------------------------------------------------
const [fPIds,setFPIds] =useState()

useEffect(()=>{
    const getFPIds =async()=>{
        const res = await fetch('https://digi-storebackend.vercel.app/featuresproduct')
        const result = await res.json()
        setFPIds(result)


    } 
    getFPIds()
},[])
const featuresProductArray =[]
const handleAddingFeaturesProduct = (e)=>{
    const id = e.target.value 
    if(e.target.checked){
        
        featuresProductArray.push(id)
    }else{
       const index = featuresProductArray.indexOf(id)
       featuresProductArray.splice(index,1)
       
        

    }

}
const removeFeaturesProductArray =[]
const handleRemovingFeaturesProcduct = (e)=>{
    const id = e.target.value 
    if(e.target.checked){
        
        removeFeaturesProductArray.push(id)
    }else{
       const index = featuresProductArray.indexOf(id)
       removeFeaturesProductArray.splice(index,1)
       
        

    }
}
const confirmFeatureProducts =async()=>{
    if(featuresProductArray.length != 0){
        try{
            const res = await fetch(`https://digi-storebackend.vercel.app/addfeaturesprodct`,{
                method:"POST",
                headers:{
                    "Content-Type": "application/json",
                    "Authentication": Authentication 
                },
                body:JSON.stringify(featuresProductArray)
            }
            )
            const result = await res.json()

        }catch(error){
            console.log(error)
        }


    }
    if(removeFeaturesProductArray.length !=0){
        try{
            const res = await fetch(`https://digi-storebackend.vercel.app/removefeaturesprodct`,{
                method:"DELETE",
                headers:{
                    "Content-Type": "application/json",
                    "Authentication": Authentication 
                },
                body:JSON.stringify(removeFeaturesProductArray)
            }
            )
            const result = await res.json()

        }catch(error){
            console.log(error)
        }


    }

}


//    console.log(products)
    return (
        <div>
             <div className='searchContainer'>
                 <h3>Search Products by id</h3>
             <form action="" method="get" onSubmit={handleSearch}>
                 <input ref={text} type="text"placeholder='search by id ' />
                 <input type="submit" value="search" />
             </form>

             </div>
            {/* search part  */}
            <div className='searchDisplay'>
                {
                   search? <Product key={search._id} data={search} handleUpdate={handleUpdate} ></Product>:''
                }
            </div>
            {/* products parts based on url params  ////////////////*/}

            <div className='productsContainer'>
                {
                    products?.map(prouct=><Product key={prouct._id} fPIds={fPIds} data={prouct} handleUpdate={handleUpdate} handleAddingFeaturesProduct={handleAddingFeaturesProduct} handleRemovingFeaturesProcduct={handleRemovingFeaturesProcduct}></Product>)
                }
            </div>
            <button onClick={confirmFeatureProducts}>confirm features products </button>

            {/* handle update part //////////////////////////////////////////////////////////////////////-------------------------------------------------------- */}
           <br />
           <br /><br /><br /><br /><br /><br /><br />
           <br /><br /><br /><br />
           
           
            <div className='updateContainer'>

            <form action="" onSubmit={handleForm}>
                <fieldset>
                    <legend>Add category</legend>
                    {
                        category.map(i=> <input key={i} type="text" name="" className='category' placeholder='category'   />)
                   
                   }
                   {

                      categories.map(i=> <input key={i} type="text" name="" className='category' placeholder='category'  />)

                   }
                  <br /> <button onClick={(e)=> addArrayItem(categories, setCategories ,e)}>add more category</button>

                </fieldset>
                <label htmlFor="title">Title</label>
                <input ref={titleInput} type="text" name="" id="title"  /><br />
                <label htmlFor="price">Current Price</label>
                <input ref={priceInput} type="text" name="" id="price"  /><br />
                <label htmlFor="oldPrice">Old price</label>
                <input ref={oldPriceInput} type="text" name="" id="oldPrice"  /><br />
                <label htmlFor="regularPrice">Regular price</label>
                <input ref={regularPriceInput} type="text" name="" id="regularPrice"  /><br />

                {/* key features ///////////////////////////// */}
                <fieldset>
                    <legend>Key Features</legend>
                    {
                        keyFeatures.map(i=>
                            <div key={i} className='keyFeature'>
                                <input type="text" name="" id="" placeholder='key' />
                                <input type="text" name="" id="" placeholder='value' />

                            </div>
                            )
                    }
                    {
                        keyFeature.map(i=>
                            <div key={i} className='keyFeature'>
                                <input type="text" name="" id="" placeholder='key' />
                                <input type="text" name="" id="" placeholder='value' />

                            </div>
                            )
                    }
                    <br /> <button onClick={(e)=>addArrayItem(keyFeature,setKeyFeature,e)}>add more keyFeature</button>
                    {/* <span onClick={()=>addArrayItem(keyFeature,setKeyFeature)}>add mote </span> */}
                </fieldset>
                <br />
                {/* specification /////////////////////////////////////////////////////////////////// */}

                <fieldset>
                    <legend>Specification</legend>
                     {
                        // specificationHeading.map((heading ,index)=>
                        // <div  className='specificationHeading'>  
                        //     <input type="text" name="" id="" placeholder='heading' />
                        //     {
                                
                        //         heading[Object.keys(heading)[0]].map(i=>
                        //             <div  className='specification'>
                        //                 <input  type="text" name=""  placeholder='key' />
                        //                 <input  type="text" name=""  placeholder='value' />
                        //             </div>
                        //             )
                                    
                        //     }
                        //      <button onClick={(e)=>addSpecificationKeyValue(specificationHeading,setSpecificationHeading,e,index)}>{index} </button>
                             
                        
                        // </div>
                        //      )
                     }

                     {

                        specificationHeading?.map((heading ,index)=>
                        <div  className='specificationHeading'>  
                            <input type="text" name="" id="" placeholder='heading' />
                            {
                                heading.map(i=>
                                    <div  className='specification'>
                                        <input  type="text" name=""  placeholder='key' />
                                        <input  type="text" name=""  placeholder='value' />
                                    </div>
                                    )
                                    
                            }
                             <button onClick={(e)=>addSpecificationKeyValue(specificationHeading,setSpecificationHeading,e,index)}>{index} hkj </button>
                             
                        
                        </div>
                             )
                        

                     }
                     <button onClick={(e)=>addSepecificationHeading(specificationHeading , setSpecificationHeading , e)} >Add more heading</button>
                    
                </fieldset>
                {/* desceiption */}
                <label htmlFor="description">Description</label><br />
                <textarea   name="" id="description" cols="30" rows="10"></textarea><br />

               
                <div className='imgContainer' onClick={handleImage}>
                    {
                        imgc? <img src={URL.createObjectURL(imgc)}/>:<img src={image}  alt="" />
                    }
                  
                  <input type="file" name="" id="image" onChange={handleImageChange} required /><br />

                </div>
                {/* <label htmlFor="image">Add Image</label>
                <input type="image" id='image' src="" alt="" /> 
                <input type="file" name="" id="" /><br /> */}
                

             <button type="submit"id='submit'>submit</button>

            </form>
                
            </div>
            
           
          
        </div>
    );
};

export default Products;