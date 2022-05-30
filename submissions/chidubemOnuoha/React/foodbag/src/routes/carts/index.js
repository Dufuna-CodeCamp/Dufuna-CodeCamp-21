import React from 'react'
import kyc from '../../assets/images/kfc-small.png'
import scooters from '../../assets/images/scooter.png'
import { Link } from 'react-router-dom'
import './cart.css'



const CartPage = () => {
    const [itemOne, setItemOne] = React.useState(1);
    const [itemTwo, setItemTwo] = React.useState(1);
    const [itemThree, setItemThree] = React.useState(1);
    const [itemFour, setItemFour] = React.useState(1);
    const [delivery, setDelivery] = React.useState(1200)


    const totalAmount = itemOne * 10000 + itemTwo * 10000 + itemThree * 10000 + itemFour * 10000 + delivery


    return (
        <>
            {/* header section */}

            <header className='header-container'>
                <nav className='nav-logo'>
                    <div className="logo">
                        <h3>Food<span style={{ color: 'rgba(173, 76, 76, 1)' }}>Bag</span></h3>
                    </div>
                </nav>

                <nav className="nav-link">
                    <ul>
                        <li style={{ color: 'rgba(173, 76, 76, 1)', marginTop: 5 }}>Cart</li>

                        <li style={{ marginTop: 5 }}>Login</li>


                        <li style={{
                            color: 'rgba(173, 76, 76, 1)',
                            border: '1px solid  rgba(173, 76, 76, 1)',
                            padding: 10,
                            marginTop: -7,
                            borderRadius: 5

                        }} className='last-link'>Sign up</li>
                    </ul>
                </nav>
            </header>

            {/* end of header section */}

            <div className='contentContainer'>
                <p> <span style={{ color: '#C9C9C9' }} className="home-text">Home &gt;</span>Cart</p>
                <p style={{ fontWeight: "600", marginTop: 50 }} className="cart-text">Cart</p>

                <div className='shoppingContainer'>
                    <div className='main-product-container'>
                        <div className="product-container">
                            <div>
                                <img src={kyc} alt="" className='kyc-image' />
                            </div>

                            <div style={{ paddingLeft: 15 }}>
                                <p>KFC - King Bucket</p>
                                <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                                    <button type="button" style={{ borderColor: '#AD4C4C', color: '#AD4C4C', width: 29.32, backgroundColor: 'white', borderRadius: 5 }} onClick={() => setItemOne(itemOne + 1)} className="btn-add">+</button>
                                    <p style={{ marginTop: 5 }}>{itemOne}</p>
                                    <button type="button" style={{ borderColor: '#AD4C4C', color: '#AD4C4C', width: 29.32, backgroundColor: 'white', borderRadius: 5 }} onClick={() => setItemOne(itemOne - 1)} className="btn-remove">-</button>
                                </div>

                            </div>
                        </div>
                        <div className="account-container">
                            <p style={{ marginTop: 30 }} className='item-container'>#{itemOne * 10000}</p>
                        </div>
                    </div>
                    <hr />

                    <div className='main-product-container'>
                        <div className="product-container">
                            <div>
                                <img src={kyc} alt="" className='kyc-image' />
                            </div>

                            <div style={{ paddingLeft: 15 }}>
                                <p>KFC - King Bucket</p>
                                <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                                    <button type="button" style={{ borderColor: '#AD4C4C', color: '#AD4C4C', width: 29.32, backgroundColor: 'white', borderRadius: 5 }} onClick={() => setItemTwo(itemTwo + 1)} className="btn-add">+</button>
                                    <p style={{ marginTop: 5 }}>{itemTwo}</p>
                                    <button type="button" style={{ borderColor: '#AD4C4C', color: '#AD4C4C', width: 29.32, backgroundColor: 'white', borderRadius: 5 }} onClick={() => setItemTwo(itemTwo - 1)} className="btn-remove">-</button>
                                </div>

                            </div>
                        </div>
                        <div className="account-container">
                            <p style={{ marginTop: 30 }} className='item-container'>#{itemTwo * 10000}</p>
                        </div>
                    </div>
                    <hr />

                    <div className='main-product-container'>
                        <div className="product-container">
                            <div>
                                <img src={kyc} alt="" className='kyc-image' />
                            </div>

                            <div style={{ paddingLeft: 15 }}>
                                <p>KFC - King Bucket</p>
                                <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                                    <button type="button" style={{ borderColor: '#AD4C4C', color: '#AD4C4C', width: 29.32, backgroundColor: 'white', borderRadius: 5 }} onClick={() => setItemThree(itemThree + 1)} className="btn-add">+</button>
                                    <p style={{ marginTop: 5 }}>{itemThree}</p>
                                    <button type="button" style={{ borderColor: '#AD4C4C', color: '#AD4C4C', width: 29.32, backgroundColor: 'white', borderRadius: 5 }} onClick={() => setItemThree(itemThree - 1)} className="btn-remove">-</button>
                                </div>

                            </div>
                        </div>
                        <div className="account-container">
                            <p style={{ marginTop: 30 }} className='item-container'>#{itemThree * 10000}</p>
                        </div>
                    </div>
                    <hr />


                    <div className='main-product-container'>
                        <div className="product-container">
                            <div>
                                <img src={kyc} alt="kyc" className='kyc-image' />
                            </div>

                            <div style={{ paddingLeft: 15 }}>
                                <p>KFC - King Bucket</p>
                                <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                                    <button type="button" style={{ borderColor: '#AD4C4C', color: '#AD4C4C', width: 29.32, backgroundColor: 'white', borderRadius: 5 }} onClick={() => setItemFour(itemFour + 1)} className="btn-add">+</button>
                                    <p style={{ marginTop: 5 }}>{itemFour}</p>
                                    <button type="button" style={{ borderColor: '#AD4C4C', color: '#AD4C4C', width: 29.32, backgroundColor: 'white', borderRadius: 5 }} onClick={() => setItemFour(itemFour - 1)} className="btn-remove">-</button>
                                </div>

                            </div>
                        </div>
                        <div className="account-container">
                            <p style={{ marginTop: 30 }} className="item-container">#{itemFour * 10000}</p>
                        </div>
                    </div>
                    <hr />


                    <div className='main-product-container'>
                        <div className="product-container">
                            <div style={{ alignSelf: 'center', marginBottom: 20 }} className="scooter-container">
                                <img src={scooters} alt="" style={{ marginLeft: 40 }} className="scooters" />
                            </div>

                            <div style={{ paddingLeft: 50, alignSelf: 'center', marginRight: 20 }} className="delivery-container">
                                <p style={{ fontWeignt: '600' }}>Delivery fee</p>

                            </div>
                        </div>
                        <div className="account-container ">
                            <p style={{ marginTop: 30 }} className='item-container'>#{delivery}</p>
                        </div>
                    </div>
                    <hr />

                    <div className='main-product-container'>
                        <div className="product-container">
                            <div style={{ paddingLeft: 100, marginTop: 35 }}>
                                <p className="total-container">Total</p>
                            </div>
                        </div>
                        <div className="account-container">
                            <p style={{ marginTop: 30, alignSelf: 'center' }} className="total-container">#{totalAmount}</p>
                        </div>
                    </div>




                </div>

                <div style={{ marginBottom: 200, marginTop: 100, textAlign: 'center' }}>
                    <Link to='/verify'>
                        <button className='btn btn-danger'>Checkout</button>
                    </Link>

                </div>

            </div>



        </>
    )
}

export default CartPage;