import React, { useState } from 'react'
import AboutApi from './APi/AboutApi';

const About = () => {
 
 const [dat,setdata]=useState(AboutApi);

    return (
    <>

    <section className='common-section our-services'>
        <div className='container mb-5'>
<div className='row'>
<div className='col-12 col-lg-5 text-center our-service-leftside-img'>
<img src='./images/about.jpg' alt='error'></img>
</div>

<div className='col-12 col-lg-7 our-services-list'>
    <h3 className='mini-title'>
        --Availabe Only Web Browser
    </h3>
    <h1 className='main-heading'>How Use Application?</h1>

{
    dat.map((currele)=>{

        const {id,title,info}=currele
        return (
            <>
            
{/* section right data  */}

    <div className='row our-services-info' key={id}>
<div className='col-1 our-services-number'>{id}</div>
<div className='col-10 our-services-data'>
    <h2>{title}</h2>
    <p className='main-hero-para'>
    {info}
    </p>
</div>

    </div>
                  
            </>
        )
    } )
}

<br/>
    <button className='btn-style btn-style-border'>Learn More</button>
</div>   

</div>

        </div>
    </section>
    
{/* 
second part of section
 */}

 <section className='common-section our-services our-services-rightside '>
        <div className='container mb-5 '>
<div className='row'>


<div className='col-12 col-lg-7 our-services-rightside-content'>
    <h3 className='mini-title'>
        --Support any languaage
    </h3>
    <h1 className='main-heading'>Support is availabe 24/7</h1>

{
    dat.map((currele)=>{

        const {id,title,info}=currele
        return (
            <>
            
{/* section right data  */}

    <div className='row our-services-info' key={id}>
<div className='col-1 our-services-number'>{id}</div>
<div className='col-10 our-services-data'>
    <h2>{title}</h2>
    <p className='main-hero-para'>
    {info}
    </p>
</div>

    </div>
                  
            </>
        )
    } )
}

<br/>
    <button className='btn-style btn-style-border'>Learn More</button>
</div>   

<div className='col-12 col-lg-5  our-service-rightside-img'>
<img src='./images/support.jpg' alt='error'></img>
</div>
</div>

        </div>
    </section>



    </>
  )
}

export default About