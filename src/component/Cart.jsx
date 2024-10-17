import React from 'react'
import Banner from "../image/banner.png"

function Cart() {
    return (
        <>

            <div className='cart-section mt-5'>

                <div className='container cart-container'>

                    <div className='row'>

                        <div className='col-md-6'>

                            <h5>Customer Information</h5>

                            <form action="/action_page.php">


                                <p>Billing Details</p>

                                <div class="mb-3">
                                    <label for="name">আপনার নাম <span style={{ color: "red" }}>*</span></label>
                                    <input type="text" class="form-control custom-input" id="" placeholder="আপনার নাম লিখুন" name="name" />
                                </div>

                                <div class="mb-3">
                                    <label for="name"> আপনার ঠিকানা। <span style={{ color: "red" }}>*</span></label>
                                    <input type="text" class="form-control custom-input" id="" placeholder="বাসা নং, রোড নং, থানা, জেলা " name="name" />
                                </div>

                                <div class="mb-3">
                                    <label for="name"> মোবাইল নাম্বার <span style={{ color: "red" }}> *</span></label>
                                    <input type="text" class="form-control custom-input" id="" placeholder="আপনার মোবাইল নং লিখুন " name="name" />
                                </div>

                                <p>Payment</p>

                                <div class="form-check">
                                    <input type="radio" class="form-check-input" id="radio1" name="optradio" value="option1" checked />
                                    <label class="form-check-label" for="radio1">Cash on Delivery</label>
                                </div>




                            </form>

                        </div>

                        <div className='col-md-6 pl-6'>
                            <h5>Your Products</h5>

                            <div className='product-section mt-3 p-3'>

                                <div class="form-check d-flex justify-content-start align-items-center">
                                    <input type="radio" class="form-check-input custom-radio-size" id="radio1" name="optradio" value="option1" checked />
                                    <img src={Banner} className='img-fluid ms-3' style={{ width: "50px", height: "50px" }} />
                                    <label class="form-check-label ms-3" for="radio1">১ কেজি বিচি মুক্ত সিডলেস খেজুর </label>
                                    <span className='ms-3'>750.00 TK</span>
                                </div>

                                <div class="form-check mt-3 d-flex justify-content-start align-items-center">
                                    <input type="radio" class="form-check-input custom-radio-size" id="radio2" name="optradio" value="option1" />
                                    <img src={Banner} className='img-fluid ms-3' style={{ width: "50px", height: "50px" }} />
                                    <label class="form-check-label ms-3" for="radio1">৫০০ গ্রাম বিচি মুক্ত সিডলেস খেজুর </label>
                                    <span className='ms-3'>750.00 TK</span>
                                </div>


                            </div>

                            <h5 className='mt-3'>Your Order</h5>

                            <div className='order-section p-3'>

                                <div class="form-check d-flex  justify-content-between align-items-center">


                                    <label class="form-check-label" for="radio1">Products </label>
                                    <span className='ms-3'>Subtotal</span>
                                </div>

                                <div className='mt-3' style={{ borderBottom: "2px dashed black" }}></div>


                                <div class="form-check d-flex justify-content-between align-items-center mt-3">

                                    <img src={Banner} className='img-fluid' style={{ width: "50px", height: "50px" }} />
                                    <label class="form-check-label ms-3" for="radio1">বিচি মুক্ত সিডলেস খেজুর </label>

                                    <span className='ms-3'>750.00 TK</span>

                                </div>

                                <div className='mt-3' style={{ borderBottom: "2px dashed black" }}></div>

                                <div class="form-check d-flex mt-3  justify-content-between align-items-center">


                                    <label style={{ color: "gray" }}>SubTotal </label>
                                    <span className='ms-3' style={{ color: "gray" }} >750.00 TK</span>
                                </div>

                                <div className='mt-3' style={{ borderBottom: "2px dashed black" }}></div>

                                <div class="form-check d-flex mt-3  justify-content-between align-items-center">


                                    <label>Total </label>
                                    <span className='ms-3' >750.00 TK</span>
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

export default Cart