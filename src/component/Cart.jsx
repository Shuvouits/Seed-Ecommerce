import React, { useState } from 'react';
import Banner from "../image/banner.png";

function Cart({ product, Setting }) {
    // State for quantity and shipping cost
    const [quantity, setQuantity] = useState(1);
    const [shippingCost, setShippingCost] = useState(Setting?.delivery_charge_inside);

    // Increment quantity
    const handleIncrement = () => setQuantity(prevQuantity => prevQuantity + 1);

    // Decrement quantity, ensuring it doesn't go below 1
    const handleDecrement = () => setQuantity(prevQuantity => Math.max(prevQuantity - 1, 1));

    // Calculate total price based on quantity and product price
    const totalPrice = product?.price * quantity;

    // Calculate final total including shipping
    const finalTotal = totalPrice + shippingCost;

    return (
        <>
            <div className='cart-section mt-5'>
                <div className='container cart-container'>
                    <div className='row'>
                        <div className='col-md-6'>
                            <h5>Customer Information</h5>
                            <form action="/action_page.php">
                                <p>Billing Details</p>
                                <div className="mb-3">
                                    <label>আপনার নাম <span style={{ color: "red" }}>*</span></label>
                                    <input type="text" className="form-control custom-input" placeholder="আপনার নাম লিখুন" name="name" />
                                </div>
                                <div className="mb-3">
                                    <label> আপনার ঠিকানা। <span style={{ color: "red" }}>*</span></label>
                                    <input type="text" className="form-control custom-input" placeholder="বাসা নং, রোড নং, থানা, জেলা " name="address" />
                                </div>
                                <div className="mb-3">
                                    <label> মোবাইল নাম্বার <span style={{ color: "red" }}> *</span></label>
                                    <input type="text" className="form-control custom-input" placeholder="আপনার মোবাইল নং লিখুন " name="phone" />
                                </div>
                                <p style={{ margin: '5px 0px' }}>Payment</p>
                                <div className="form-check">
                                    <input type="radio" className="form-check-input" name="optradio" value="Cash on Delivery" checked />
                                    <label className="form-check-label">Cash on Delivery</label>
                                </div>
                                <p className='mt-2' style={{ margin: '5px 0px' }}>Shipping Area</p>
                                <div className="form-check">
                                    <input
                                        type="radio"
                                        className="form-check-input"
                                        name="shipping"
                                        value={Setting?.delivery_charge_inside}
                                        checked={shippingCost === Setting?.delivery_charge_inside}
                                        onChange={() => setShippingCost(Setting?.delivery_charge_inside)}
                                    />
                                    <label className="form-check-label">ঢাকার মধ্যে (Dhaka)</label>
                                </div>
                                <div className="form-check">
                                    <input
                                        type="radio"
                                        className="form-check-input"
                                        name="shipping"
                                        value={Setting?.delivery_charge_outside}
                                        checked={shippingCost === Setting?.delivery_charge_outside}
                                        onChange={() => setShippingCost(Setting?.delivery_charge_outside)}
                                    />
                                    <label className="form-check-label">ঢাকার বাইরে (Outside of Dhaka)</label>
                                </div>
                            </form>
                        </div>
                        <div className='col-md-6'>
                            <h5>Your Products</h5>
                            <div className="quantity-controls d-flex align-items-center mt-3">
                                <button className='btn btn-outline-secondary' onClick={handleDecrement}>-</button>
                                <span className='mx-3'>{quantity}</span>
                                <button className='btn btn-outline-secondary' onClick={handleIncrement}>+</button>
                            </div>
                            <div className='product-section mt-3 p-3'>
                                <div className="form-check d-flex justify-content-start align-items-center">
                                    <img src={product?.featured_image || Banner} className='img-fluid' style={{ width: "50px", height: "50px" }} />
                                    <label className="form-check-label ms-3">{product?.name}</label>
                                    <span className='ms-3'>{product?.price} TK</span>
                                </div>
                            </div>
                            <h5 className='mt-3'>Your Order</h5>
                            <div className='order-section p-3'>
                                <div className="d-flex justify-content-between align-items-center">
                                    <label>Product</label>
                                    <span>Subtotal</span>
                                </div>
                                <div className='mt-3' style={{ borderBottom: "2px dashed black" }}></div>
                                <div className="d-flex justify-content-between align-items-center mt-3">
                                    <label>{product?.name}</label>
                                    <span>{product?.price} x {quantity} TK</span>
                                </div>
                                <div className='mt-3' style={{ borderBottom: "2px dashed black" }}></div>
                                <div className="d-flex justify-content-between align-items-center mt-3">
                                    <label style={{ color: "gray" }}>Subtotal</label>
                                    <span style={{ color: "gray" }}>{totalPrice} TK</span>
                                </div>
                                <div className='mt-3' style={{ borderBottom: "2px dashed black" }}></div>
                                <div className="d-flex justify-content-between align-items-center mt-3">
                                    <label>Shipping cost</label>
                                    <span>{shippingCost} TK</span>
                                </div>
                                <div className='mt-3' style={{ borderBottom: "2px dashed black" }}></div>
                                <div className="d-flex justify-content-between align-items-center mt-3">
                                    <label>Total</label>
                                    <span>{finalTotal} TK</span>
                                </div>
                                <div className='d-flex justify-content-between align-items-center mt-3' style={{ gap: "15px" }}>
                                    <input type='text' className='form-control custom-input' placeholder='Coupon Code' />
                                    <button className='btn custom-btn'>Apply</button>
                                </div>
                                <button className='btn custom-btn w-100 mt-3'><span style={{ fontSize: "20px" }}>Place Order</span></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart;
