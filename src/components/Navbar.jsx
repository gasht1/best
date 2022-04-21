import React from 'react'

const Navbar=()=> {
  return (
    <div className="n_container">
        <div className="left">
            <div className="name">gashaw</div>
            <span>toggle</span>
        </div>
        <div className="right">
            <div className="r-list">
                <ul>
                    <li>home</li>
                    <li>services</li>
                    <li>experinces</li>
                    <li>portfolio</li>
                    <li>testimonial</li>
                    
                </ul>
            </div>
            <button className='btn'> contact us</button>
        </div>
    </div>
  )
}

export default Navbar