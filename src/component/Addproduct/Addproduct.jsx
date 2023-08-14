import React, { useEffect, useRef, useState } from 'react';
import image from '../../assets/cloud-upload-a30f385a928e44e199a62210d578375a.jpg'
import './addproduct.css'

const Addproduct = () => {
    const Authentication = JSON.parse(localStorage.getItem("token"))

    const title = useRef('')
    const price = useRef('')
    const oldPrice = useRef('')
    const regularPrice = useRef('')
    const [category, setCategory] = useState([1])
    const [keyFeature, setKeyFeature] = useState([1])
    const [specificationHeading, setSpecificationHeading] = useState([[1]])
    const [img, setImg] = useState('')

    const addArrayItem = (state, setState, e) => {
        e.preventDefault()
        const lastElementPointer = [...state].length - 1
        const array = [...state]
        const newElement = array[lastElementPointer] + 1
        setState([...state, newElement])

    }
    const addSepecificationHeading = (state, setState, e) => {
        e.preventDefault()

        setState([...state, [1]])

    }
    const addSpecificationKeyValue = (state, setState, e, index) => {
        e.preventDefault()
        const array = [...state]
        const nestedArray = array[index]
        const lastElementPointer = nestedArray.length - 1
        const newElement = nestedArray[lastElementPointer] + 1
        nestedArray.push(newElement)
        array[index] = nestedArray
        setState([...array])


    }

    let product = {}

    const handleForm = async (e) => {
        e.preventDefault()
        const submitbutton = document.getElementById('submit')
        submitbutton.disabled = true


        // image upload ///////////////////////////////////////////////////////////////////////////////////////////////

        const formData = new FormData();
        formData.append("image", img)

        try {
            const response = await fetch("http://localhost:5000/addimage", {
                method: "POST",
                headers: {
                    "Authentication": Authentication


                },
                body: formData,
            });
            const result = await response.json()

            const categories = []
            const keyFeatures = []
            const specifications = []
            let description = ''


            const category = document.getElementsByClassName('category')
            const keyFeature = document.getElementsByClassName('keyFeature')
            const specification = document.getElementsByClassName('specificationHeading')
            description = document.getElementById('description').value

            for (const i of category) {


                categories.push(i.value)

            }
            
            for (const i of keyFeature) {
                const key = i.childNodes[0].value
                const value = i.childNodes[1].value
                const joinKeyValue = key.concat('*', value)
                keyFeatures.push(joinKeyValue)

                // specifications[key] = value
            }
            // get  specificaton value ----------------------------------------------------------------------------------------------------------------

            for (const i of specification) {
                const key = i.childNodes[0].value
                const values = []
                const obj = {}
                const child = i.getElementsByClassName('specification')
                for (const i of child) {

                    const key = i.childNodes[0].value
                    const value = i.childNodes[1].value
                    const joinKeyValue = key.concat('*', value)
                    values.push(joinKeyValue)
                }


                obj[key] = values
                specifications.push(obj)
            }



            product = {
                category: categories,
                title: title.current.value,
                price: price.current.value,
                oldPrice: price.current.value,
                regularPrice: regularPrice.current.value,
                keyFeatures: keyFeatures,
                specification: specifications,
                description: description,
                img: result

            }

            // now  add the product 
            const addPrduct = await fetch("http://localhost:5000/addproduct", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authentication": Authentication
                },
                body: JSON.stringify(product)
            }
            )
            const res = await addPrduct.json()
            const input = document.querySelectorAll('input')
            //--------------------------------------------------------- clear input value ----------------------------------------------
            for (const i of input) {
                i.value = ''
            }
            document.querySelector('textarea').value = ''
            setImg('')


            window.alert('added')
            submitbutton.disabled = false

        } catch (error) {
            console.log('error', error)

        }


















    }
    const handleImage = () => {
        document.getElementById('image').click()
    }
    const handleImageChange = (e) => {
        const file = e.target.files[0]
        setImg(file)

    }
    // setCategory(counter)

    return (
        <div>
            <form action="" onSubmit={handleForm}>
                <fieldset>
                    <legend>Add category</legend>
                    {
                        category.map(i => <input key={i} type="text" name="" className='category' placeholder='category' />)

                    }
                    <br /> <button onClick={(e) => addArrayItem(category, setCategory, e)}>add more category</button>

                </fieldset>
                <label htmlFor="title">Title</label>
                <input ref={title} type="text" name="" id="title" placeholder='Title' /><br />
                <label htmlFor="price">Current Price</label>
                <input ref={price} type="text" name="" id="price" placeholder='Price' /><br />
                <label htmlFor="oldprice">Old price</label>
                <input ref={oldPrice} type="text" name="" id="oldprice" placeholder='oldprice' /><br />
                <label htmlFor="regularPrice">Regular price</label>
                <input ref={regularPrice} type="text" name="" id="rugularPrice" placeholder='regular Price' /><br />

                {/*------------------------------------------------- key features------------------------------------------- */}
                <fieldset>
                    <legend>Key Features</legend>
                    {
                        // keyFeature.map(i=><input key={i} type="text" name="" className='keyFeature' placeholder='keyFeature' />)
                    }
                    {
                        keyFeature.map(i =>
                            <div key={i} className='keyFeature'>
                                <input type="text" name="" id="" placeholder='key' />
                                <input type="text" name="" id="" placeholder='value' />

                            </div>
                        )
                    }
                    <br /> <button onClick={(e) => addArrayItem(keyFeature, setKeyFeature, e)}>add more keyFeature</button>
                    {/* <span onClick={()=>addArrayItem(keyFeature,setKeyFeature)}>add mote </span> */}
                </fieldset>
                <br />
                {/*---------------------------------------------------- specification----------------------------------------------------------- */}

                <fieldset>
                    <legend>Specification</legend>
                    {
                        specificationHeading.map((heading, index) =>
                            <div className='specificationHeading'>
                                <input type="text" name="" id="" placeholder='heading' />
                                {
                                    heading.map(i =>
                                        <div className='specification'>
                                            <input type="text" name="" placeholder='key' />
                                            <input type="text" name="" placeholder='value' />
                                        </div>
                                    )

                                }
                                <button onClick={(e) => addSpecificationKeyValue(specificationHeading, setSpecificationHeading, e, index)}>Add More Key/Value </button>


                            </div>
                        )

                    }
                    <button onClick={(e) => addSepecificationHeading(specificationHeading, setSpecificationHeading, e)} >Add more heading</button>


                </fieldset>
                {/*------------------------------------------------ desceiption--------------------------------- */}
                <label htmlFor="description">Description</label><br />
                <textarea name="" id="description" cols="30" rows="10"></textarea><br />


                <div className='imgContainer' onClick={handleImage}>
                    {
                        img ? <img src={URL.createObjectURL(img)} /> : <img src={image} alt="" />
                    }

                    <input type="file" name="" id="image" onChange={handleImageChange} required /><br />

                </div>            
               <button type="submit" id='submit'>submit</button>

            </form>

        </div>
    );
};

export default Addproduct;