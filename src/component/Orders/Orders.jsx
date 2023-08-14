import React, { useEffect, useRef, useState } from 'react';

const Orders = () => {
    const Authentication = JSON.parse(localStorage.getItem("token"))
    const [orders, setOrders] = useState()
    useEffect(() => {
        const orderFetch = async () => {
            try {
                const response = await fetch(`http://localhost:5000/getfilterorders`,{
                    headers:{
                        "Content-Type": "application/json",
                        "Authentication": Authentication 
                    },
                })
                const result = await response.json()

                setOrders(result)


            } catch (error) {
                console.log(error)

            }
        }
        orderFetch()
    }, [])
    const updateorder = async (id) => {

        try {
            const res = await fetch(`http://localhost:5000/updateorderbackend/${id}`, {
                method: "PUT",
                headers:{
                    "Content-Type": "application/json",
                    "Authentication": Authentication 
                },


            })
            const result = await res.json()


        } catch (error) {

        }
    }
    const startTime = useRef()
    const endTime = useRef()
    const deliverd = useRef()
    const handleFilter = async (e) => {
        e.preventDefault()
        let deliverd
        if (document.getElementById("deliverd").checked) {
            deliverd = "deliverd"
        } else {
            deliverd = "notdeliverd"
        }
        if ((startTime.current.value != '') && (endTime.current.value != '')) {

            try {
                const response = await fetch(`http://localhost:5000/getfilterorders?startdate=${startTime.current.value}&enddate=${endTime.current.value}&delivered=${deliverd}`,{
                    headers:{
                        "Content-Type": "application/json",
                        "Authentication": Authentication 
                    },
                })
                const result = await response.json()
                setOrders(result)

            } catch (error) {

            }

        }
        if ((startTime.current.value == '') && (endTime.current.value == '')) {
            try {
                const response = await fetch(`http://localhost:5000/getfilterorders?delivered=${deliverd}`,{
                    headers:{
                        "Content-Type": "application/json",
                        "Authentication": Authentication 
                    },
                })
                const result = await response.json()
                setOrders(result)

            } catch (error) {

            }

        }




    }
    return (
        <div>
            {/* ----------------------------------filter part ----------------------------------------------------- */}
            <div className='filter'>
                <form action="" onSubmit={handleFilter}>
                    {/* <input ref={startTime} type="date" name="" id="" />  */}
                    <input ref={startTime} type="datetime-local" name="" id="" />
                    <input ref={endTime} type="datetime-local" name="" id="" />
                    To
                    {/* <input ref={endTime} type="date" name="" id="" /> */}
                    <label htmlFor="delivered">delivered</label>
                    <input ref={deliverd} type="checkbox" name="" id="deliverd" />
                    <button>Filter</button>

                </form>

            </div>
            {/*-------------------------- orders part --------------------------------------------- */}
            {
                orders?.map((order, index) =>
                    <div key={index} style={{ border: "solid red 1px", padding: "20px" }}>
                        <thead>
                            <tr>
                                <th>Personal Info</th>
                                <th>Order</th>
                                <th>status</th>
                                <th>update</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <p>Name : {order.name}</p>
                                    <p>Email : {order.email}</p>
                                    <p>Number : {order.number}</p>
                                    <p>Address : {order.address}</p>
                                    <p>City : {order.city}</p>
                                    <p>Price :{order.price}</p>
                                    <p> Delivary :{order.delivary}</p>

                                </td>
                                <td>

                                    {order?.orders?.map((item, index) => <>
                                        <p>ID : {item.id}</p>
                                        <p>Titte : {item.title}</p>

                                        <p>Quantity: {item.quantity}</p>

                                    </>)}


                                </td>
                                <td>
                                    {/* <p> {order?.orders?.map((item)=><div>
                                        {(item.delivered=="delivered")?"delivered":"not delivered"}
                                    </div>)}</p> */}
                                    {/* <p>{(order?.deliverd=="delivered")?"delivered":"not delivered"}</p> */}
                                    {/* {orders.map(item => <div>
                                        {console.log(item.delivered, "delivered")}
                                        {(item.delivered == "delivered") ? "delivered" : "not delivered"}
                                    </div>)} */}
                                    {/* {(order.deliverd =="delivered")?"delivered":"not delivered"} */}
                                   
                                    {(order.delivered=="deliverd")?"delivered":"not delivered"}

                                </td>
                                <td>
                                    <button onClick={() => updateorder(order._id)}>Update</button>

                                </td>
                            </tr>
                        </tbody>


                    </div>
                )
            }
        </div>
    );
};

export default Orders;