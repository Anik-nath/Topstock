import React from 'react';

const Footer = () => {
    return (
        <div className='bg-dark'>
             <div className="container text-white pt-5">
               <div className="row px-3 px-lg-0 px-md-0 py-3 pb-5">
                   <div className="col-lg-3 col-md-3 col-12">
                        <h3 className="text-light">
                        <span className='fw-bold' style={{color:"orangered"}}>Top</span>
                            Stock</h3>
                        <p className="text-white-50 pt-3 pe-3">Sed perspiciatis unde omnisse natus error voluptatem accusan doloreqe laudantium totam</p>
                        <ul className="text-white-50 list-unstyled">
                           <li className='pb-2'><i className='fas fa-map-marker-alt me-2'></i> 250 Main Street. USA</li>
                           <li><i className='far fa-envelope me-2'></i> supportinfo@gmail.com</li>
                           <li className='py-2'><i className='fas fa-phone-alt me-2'></i> +898 - 123 - 456 - 98</li>
                       </ul>
                      
                   </div>
                   <div className="col-lg-3 col-md-3 col-12 my-5 my-lg-0 my-md-0">
                       <h5 className="pb-4">Quick Links</h5>
                       <ul className="text-white-50 list-unstyled">
                           <li className='pb-2'> About Us</li>
                           <li>Customer Service</li>
                           <li className='py-2'>Discount Returns</li>
                           <li>Term & condition</li>
                           <li className='py-2'>Privacy Policy</li>
                       </ul>
                   </div>
                   <div className="col-lg-3 col-md-3 col-12">
                   <h5 className="pb-4">Account</h5>
                    <ul className="text-white-50 list-unstyled">
                        <li className='pb-2'>My Account</li>
                        <li>Order History</li>
                        <li className='py-2'>Wish List</li>
                        <li>Contact us</li>
                        <li className='py-2'>Information</li>
                    </ul>
                   </div>
                   <div className="col-lg-3 col-md-3 col-12">
                   <h5 className="pb-4">Follow Us</h5>
                   <div className="d-flex gap-3 fs-6">
                        <i style={{color:"orangered"}} className="fab fa-facebook-f"></i>
                        <i className="fab fa-instagram text-white-50"></i>
                        <i className="fab fa-linkedin text-white-50"></i>
                        <i className="fab fa-twitter text-white-50"></i>
                        <i className="fab fa-youtube text-white-50"></i>
                    </div>
                    <h5 className="py-4">Payments</h5>
                   <div>
                        <img className='w-75' src="https://themepure.net/template/kingstock-prev/kingstock/images/footer/payment-img.png" alt="" />
                    </div>
                   </div>
               </div><hr />
               <div className="row">
                   <div className="col-12 text-center pb-3">
                       <small className="text-white-50 fs-6"> &copy; Copywrite 2021 <span style={{color:"orangered"}}>Topstock.com</span> || Designed by Anik Nath</small>
                   </div>
               </div>
           </div>
        </div>
    );
};

export default Footer;