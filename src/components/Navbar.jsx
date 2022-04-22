import React from 'react'

const Navbar=()=> {
  return (
    <div className="n_container">
        <div className="left">
            <div className="name">Dreamer</div>
            <span>toggle</span>
        </div>
        <div className="rightn">
            <div className="r-list">
                <ul>
                    <li>home</li>
                    <li>services</li>
                    <li>experinces</li>
                    <li>portfolio</li>
                    <li>testimonial</li>
                    
                </ul>
            </div>
            <button className='btn'> contact </button>
        </div>
    </div>
  )
}

export default Navbar