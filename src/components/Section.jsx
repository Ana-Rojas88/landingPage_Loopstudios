import React from 'react'
import interactive from '../assets/images/desktop/image-interactive.jpg'

const Section = () => {
  return (
    <section className='section-main'>
        <img src={interactive} alt="" />
        <article className='article-text'>
        <div className='section-text'>
           <h2>
            THE LEADER IN INTERACTIVE VR
            </h2> 
            <p>Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations have transformed bussinesses through digital experiences that bind to their brand</p>
        </div>
        </article>
       
    </section>
  )
}

export default Section