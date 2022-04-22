import React from 'react'

const Services = () => {
  return (
    <div className="services">
        <div className="awesome">
            <span>my awesome</span>
            
            <span>services</span>
            
            <span>
               Lorem ipsum dolor sit amet consectetur adipisicing elit.
               <br /> 
                Eum harum expedita repellat illo! Rerum, nulla.
            </span>
            <a href="ReactJS-guide.pdf"><button className='d-btn'>download cv</button></a>

            

        </div>
        <div className="right">
            <span>Devloper</span>
            <ul>
                <li>html</li>
                <li>react</li>
                <li>css</li>
                <li>javascrip</li>
                <li>next-js</li>
                <li>redux</li>
            </ul>
            <button>learn more</button>
        </div>
    </div>
  )
}

export default Services