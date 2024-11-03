import React, { useState } from 'react';
import Banner from "../image/banner.png";
import apiClient from '../config';

function Cart({ product, Setting }) {
    // Existing state for quantity and shipping cost
    const [quantity, setQuantity] = useState(1);
    const [shippingCost, setShippingCost] = useState(Setting?.delivery_charge_inside);
    
    // New state for form data
    const [formData, setFormData] = useState({
        name: '',
        address: '',
        phone: '',
        payment_method: 'Cash on Delivery',
        shipping_area: 'inside',
        coupon_code: ''
    });
    
    // State for loading and error handling
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [couponCode, setCouponCode] = useState('');

    // Existing quantity handlers
    const handleIncrement = () => setQuantity(prevQuantity => prevQuantity + 1);
    const handleDecrement = () => setQuantity(prevQuantity => Math.max(prevQuantity - 1, 1));

    // Existing price calculations
    const totalPrice = product?.price * quantity;
    const finalTotal = totalPrice + shippingCost;

    // Handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    // Handle coupon code input
    const handleCouponChange = (e) => {
        setCouponCode(e.target.value);
    };

    // Handle coupon application
    const handleApplyCoupon = async (e) => {
        e.preventDefault();
        // Add your coupon validation logic here
        alert('Coupon application functionality to be implemented');
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const orderData = {
                ...formData,
                product_id: product?.id,
                quantity: quantity,
                shipping_cost: shippingCost,
                shipping_area: shippingCost === Setting?.delivery_charge_inside ? 'inside' : 'outside',
                total_price: finalTotal,
                coupon_code: couponCode
            };

            const response = await apiClient.post('/api-orders', orderData);

            if (response.status === 201) {
                alert('Order placed successfully!');
                // Add any additional success handling here
            }
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to place order');
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <div className='cart-section mt-5'>
                <div className='container cart-container'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <h5>Customer Information</h5>
                            <form onSubmit={handleSubmit}>
                            <div className='col-md-12 row'>
                               <div className='col-md-6'>

                               <p>Billing Details</p>
                                <div className="mb-3">
                                    <label>আপনার নাম <span style={{ color: "red" }}>*</span></label>
                                    <input 
                                        type="text" 
                                        className="form-control custom-input" 
                                        placeholder="আপনার নাম লিখুন" 
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required 
                                    />
                                </div>
                                <div className="mb-3">
                                    <label> আপনার ঠিকানা। <span style={{ color: "red" }}>*</span></label>
                                    <input 
                                        type="text" 
                                        className="form-control custom-input" 
                                        placeholder="বাসা নং, রোড নং, থানা, জেলা " 
                                        name="address"
                                        value={formData.address}
                                        onChange={handleInputChange}
                                        required 
                                    />
                                </div>
                                <div className="mb-3">
                                    <label> মোবাইল নাম্বার <span style={{ color: "red" }}> *</span></label>
                                    <input 
                                        type="text" 
                                        className="form-control custom-input" 
                                        placeholder="আপনার মোবাইল নং লিখুন " 
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        required 
                                    />
                                </div>
                                <p style={{ margin: '5px 0px' }}>Payment</p>
                                <div className="form-check">
                                    <input 
                                        type="radio" 
                                        className="form-check-input" 
                                        name="payment_method"
                                        value="Cash on Delivery"
                                        checked={formData.payment_method === 'Cash on Delivery'}
                                        onChange={handleInputChange}
                                    />
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

                                {error && (
                                    <div className="alert alert-danger mt-3">
                                        {error}
                                    </div>
                                )}
                               </div>

                                <div className='col-md-6'>
                                    <h5>Your Products</h5>
                                    <div className="quantity-controls d-flex align-items-center mt-3">
                                        <button type="button" className='btn btn-outline-secondary' onClick={handleDecrement}>-</button>
                                        <span className='mx-3'>{quantity}</span>
                                        <button type="button" className='btn btn-outline-secondary' onClick={handleIncrement}>+</button>
                                    </div>
                                    <div className='product-section mt-3 p-3'>
                                        <div className="form-check d-flex justify-content-start align-items-center">
                                            <img src={product?.featured_image || Banner} className='img-fluid' style={{ width: "50px", height: "50px" }} alt="Product" />
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
                                            <input 
                                                type='text' 
                                                className='form-control custom-input' 
                                                placeholder='Coupon Code'
                                                value={couponCode}
                                                onChange={handleCouponChange}
                                            />
                                            <button 
                                                type="button"
                                                className='btn custom-btn'
                                                onClick={handleApplyCoupon}
                                            >
                                                Apply
                                            </button>
                                        </div>
                                        <button 
                                            type="submit" 
                                            className='btn custom-btn w-100 mt-3'
                                            disabled={loading}
                                        >
                                            <span style={{ fontSize: "20px" }}>
                                                {loading ? 'Processing...' : 'Place Order'}
                                            </span>
                                        </button>
                                    </div>
                                </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Cart;