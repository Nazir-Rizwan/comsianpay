import React from 'react'

const Header = () => {
  return (
    <>
<header>

    <section className='container main-hero-container'>
        <div className='row'>
<div className='col-12 col-lg-6 header-left-side d-flex justify-content-center flex-column align-items-start order-lg-first order-last'>
    <h1 className='display-2'> Online Payment <br/>
     Easy For Shopping</h1>
     <p className='main-hero-para'>
     Lorem ipsum, dolor sit amet consectetur adipisicing elit.
     eveniet amet unde ipsa numquam suscipit eaque is a architecto at. 
     Eius, sint deserunt laboriosam ut libero alias ipsam amet fuga.</p>

     <h3>Get Early acess for you!</h3>
     
     <div className='input-group mt-3'>
<input type="email" className='rounded-pill w-75 me-2 p-2 form-control-text' placeholder='example@gmail.com'></input>

<div className='input-group-button m-15'> 
Get Now
</div>
     </div>
</div>
{/*-------------------- main header right side ------------- */}
<div className='col-12 col-lg-6 header-right-side d-flex justify-content-center align-items-start main-herosection-images
order-md-first order-sm-first'>
    <img src='./images/hero.jpg' alt="/" className='img-fluid'></img>
    <img src='./images/pay.jpg' alt="/" className='img-fluid main-hero-img2'></img>
</div>

        </div>
    </section>
</header>

    </>
  )
}

export default Header