import React from 'react';
import { Link } from 'react-router-dom';
import './header.css'
import { useAuthContext } from '../../context/Auth_context';

const Header = () => {
    const { logOut, user } = useAuthContext()
    const category = [



        {
            id: 1,
            mainCategory: 'computer',
            subCategory: [
                {
                    id: 1,
                    mainCategory: 'digi-pc',
                    subCategory: ['intel', 'amd']
                },
                {
                    id: 1,
                    mainCategory: 'brand-pc',
                    subCategory: ['dell', 'hp', 'lenevo', 'acer']
                },
                {
                    id: 1,
                    mainCategory: 'gaming-pc',
                    subCategory: ['intel', 'amd']
                },
            ]
        },
        {
            id: 1,
            mainCategory: 'laptop',
            subCategory: [
                {
                    id: 1,
                    mainCategory: 'gaming-laptop',
                    subCategory: ['dell', 'hp', 'lenevo', 'acer']
                },
                {
                    id: 1,
                    mainCategory: 'laptop-bag',
                    subCategory: ['max-green', 'hp', 'asus', 'msi']
                }, {
                    id: 2,
                    mainCategory: 'laptop-accessories',
                    subCategory: ['laptop-cooler', 'laptop-desk', 'laptop-stand', 'laptop-battery', 'laptop-charger', 'laptop-display', 'laptop-keyboard', 'laptop-locker']
                },
                {
                    id: 5,
                    mainCategory: 'dell',
                },
                {
                    id: 5,
                    mainCategory: 'asus',
                },
                {
                    id: 5,
                    mainCategory: 'lenevo',
                },
                {
                    id: 5,
                    mainCategory: 'hp',
                },

            ]
        },
        {
            id: 1,
            mainCategory: 'component',
            subCategory: [
                {
                    id: 1,
                    mainCategory: 'processor',
                    subCategory: ['intel', 'amd']
                },
                {
                    id: 1,
                    mainCategory: 'ram',
                    subCategory: ['gigabyte', 'gskill', 'adata']
                },
                {
                    id: 1,
                    mainCategory: 'motherboard',
                    subCategory: ['gigabyte', 'msi', 'asus']
                },
                {
                    id: 1,
                    mainCategory: 'cup-cooler',
                    subCategory: ['antec', 'lian-li', 'noctua', 'team', 'gamdias', 'corsair', 'msi', 'gigabyte', 'cougar', 'asus']
                }, {
                    id: 4,
                    mainCategory: 'grapics-card',
                    subCategory: ['colorful', 'asrock', 'asus', 'gigabyte', 'intel', 'msi', 'nvidia', 'zotac',]
                }
            ]


        }, {
            id: 4,
            mainCategory: 'phone',
            subCategory: [
                {
                    id: 1,
                    mainCategory: 'apple',

                },
                {
                    id: 1,
                    mainCategory: 'samsung',

                },
                {
                    id: 1,
                    mainCategory: 'google',

                },
                {
                    id: 1,
                    mainCategory: 'oneplus',

                },
                {
                    id: 1,
                    mainCategory: 'oppo',

                },
                {
                    id: 1,
                    mainCategory: 'vivo',

                },
                {
                    id: 1,
                    mainCategory: 'realme',

                },
                {
                    id: 1,
                    mainCategory: 'poco',

                },

            ]
        },
        {
            id: 1,
            mainCategory: 'monitor',
            subCategory: [
                {
                    id: 1,
                    mainCategory: 'hp',

                },
                {
                    id: 1,
                    mainCategory: 'dell',

                },
                {
                    id: 1,
                    mainCategory: 'samsung',

                }, {
                    id: 1,
                    mainCategory: 'lg',
                }
            ]
        },
        {
            id: 1,
            mainCategory: 'ups',
            subCategory: [
                {
                    id: 1,
                    mainCategory: 'max-green',
                    // subCategory: ['intel', 'amd']
                },
                {
                    id: 1,
                    mainCategory: 'value top',
                    // subCategory: ['intel', 'amd']
                },

            ]
        },
        {
            id: 1,
            mainCategory: 'tablet',
            subCategory: [
                {
                    id: 1,
                    mainCategory: 'lenevo',
                    // subCategory: ['intel', 'amd']
                },
                {
                    id: 1,
                    mainCategory: 'realme',
                    // subCategory: ['intel', 'amd']
                },
                {
                    id: 1,
                    mainCategory: 'xiaomi',
                    // subCategory: ['intel', 'amd']
                },
                {
                    id: 1,
                    mainCategory: 'samsung',
                    // subCategory: ['intel', 'amd']
                },
            ]
        },
        {
            id: 1,
            mainCategory: 'accessories',
            subCategory: [
                {
                    id: 1,
                    mainCategory: 'key-board',
                    // subCategory: ['intel', 'amd']
                },
                {
                    id: 1,
                    mainCategory: 'mouse',
                    // subCategory: ['intel', 'amd']
                },
                {
                    id: 1,
                    mainCategory: 'headphone',
                    // subCategory: ['intel', 'amd']
                },
                {
                    id: 1,
                    mainCategory: 'pen drive',
                    // subCategory: ['intel', 'amd']
                },
            ]
        },
        // {
        //     id: 1,
        //     mainCategory: 'computer',
        //     subCategory: [
        //         {
        //             id: 1,
        //             mainCategory: 'star pc',
        //             subCategory: ['intel', 'amd']
        //         },
        //         {
        //             id: 1,
        //             mainCategory: 'star pc',
        //             subCategory: ['intel', 'amd']
        //         },
        //         {
        //             id: 1,
        //             mainCategory: 'star pc',
        //             subCategory: ['intel', 'amd']
        //         },
        //     ]
        // },
        // {
        //     id: 1,
        //     mainCategory: 'computer',
        //     subCategory: [
        //         {
        //             id: 1,
        //             mainCategory: 'star pc',
        //             subCategory: ['intel', 'amd']
        //         },
        //         {
        //             id: 1,
        //             mainCategory: 'star pc',
        //             subCategory: ['intel', 'amd']
        //         },
        //         {
        //             id: 1,
        //             mainCategory: 'star pc',
        //             subCategory: ['intel', 'amd']
        //         },
        //     ]
        // },
        // {
        //     id: 1,
        //     mainCategory: 'computer',
        //     subCategory: [
        //         {
        //             id: 1,
        //             mainCategory: 'star pc',
        //             subCategory: ['intel', 'amd']
        //         },
        //         {
        //             id: 1,
        //             mainCategory: 'star pc',
        //             subCategory: ['intel', 'amd']
        //         },
        //         {
        //             id: 1,
        //             mainCategory: 'star pc',
        //             subCategory: ['intel', 'amd']
        //         },
        //     ]
        // },
        // {
        //     id: 1,
        //     mainCategory: 'computer',
        //     subCategory: [
        //         {
        //             id: 1,
        //             mainCategory: 'star pc',
        //             subCategory: ['intel', 'amd']
        //         },
        //         {
        //             id: 1,
        //             mainCategory: 'star pc',
        //             subCategory: ['intel', 'amd']
        //         },
        //         {
        //             id: 1,
        //             mainCategory: 'star pc',
        //             subCategory: ['intel', 'amd']
        //         },
        //     ]
        // },
        // {
        //     id: 1,
        //     mainCategory: 'computer',
        //     subCategory: [
        //         {
        //             id: 1,
        //             mainCategory: 'star pc',
        //             subCategory: ['intel', 'amd']
        //         }
        //     ]
        // },
        // {
        //     id: 1,
        //     mainCategory: 'computer',
        //     subCategory: [
        //         {
        //             id: 1,
        //             mainCategory: 'star pc',
        //             subCategory: ['intel', 'amd']
        //         }
        //     ]
        // },

    ]
    return (
        <div className='header'>
            {/* <div className='header2'>



                {category.map((item, index) =>
                    <div key={index} className='dropdown'>
                        <Link className='dropbtn link' to={`categories/${item.mainCategory}`}>{item.mainCategory}</Link>
                        <div className='dropdownContent'>
                            {item.subCategory?.map((item2, index) =>
                                <div key={index} className='dropdown2'>
                                    <Link className='dropdownbtn2 link' to={`categories/${item.mainCategory}/${item2.mainCategory}`}>{item2.mainCategory}</Link>
                                    <div className='dropdownContent2'>
                                        {item2.subCategory?.map((item3, index) => <Link key={index} className='link' to={`categories/${item.mainCategory}/${item2.mainCategory}/${item3}`}>{item3}</Link>)}
                                    </div>
                                </div>)}
                        </div>
                    </div>)}












               









            </div> */}
            

            <ul>
                <li><Link to="/">Add Product</Link></li>

                <li><Link to="/changepassword">Change password</Link></li>
                <li><Link to="/changeslider">Changeslider</Link></li>
                <li><Link to="/addfeaturescategory">Addfeaturescategory</Link></li>
                <li><Link to="/featurescategories">Featurescategories</Link></li>
                <li><Link to="/orders">Orders</Link></li>
                <li><button onClick={logOut}>logout</button></li>


            </ul>

        </div>
    );
};

export default Header;