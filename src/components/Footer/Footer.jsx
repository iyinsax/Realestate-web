import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <section className="f-wrapper">
        <div className="paddings innerwidth flexCenter f-container">

            {/*left */}
            <div className="flexColStart f-left">
                <img src="./logo2.png" alt=""  width={121}/>


                <span className="secondaryText">
                    Our Vision is to make all people <br />
                    the best place to live for them.
                </span>
            </div>

            <div className="flexColStart  f-right">
<span className='primaryText'>information</span>
<span className='secondaryText'>not osun peoples address its <br /> kogi best state,nigeria</span>

<div className="flexCenter f-menu">
      <span>Property</span>
      <span>Services</span>
      <span>Product</span>
      <span>About Us</span>
</div>
            </div>
        </div>
    </section>
  )
}

export default Footer
