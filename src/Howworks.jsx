import React,{useState} from 'react'
import Apiwork from './APi/Apiwork';

const Howworks = () => {
const [workdata,setwork]=useState(Apiwork);
console.log(workdata);

  return (
    <>
<section>
<div className='work-container container'>

<h1 className='main-heading text-center'>How does it Works</h1>
<div className='row'>
{
    workdata.map((currelemt)=>
   {
 const {id,logo,title,info}=currelemt      
return(
 
    <div className='col-12 col-lg-4 text-center work-container-subdiv'>

<i class={`fontawesome-style ${logo}`}></i>

<h2 className='sub-heading'>{title}</h2>
<p className='main-hero-para w-100'>
     {info}
      </p>
</div>
)

   }


    

    )
}






</div>

</div>

</section>

    </>
  )
}

export default Howworks