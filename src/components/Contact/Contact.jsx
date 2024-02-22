import React from 'react'
import './Contact.css'
import { MdCall } from 'react-icons/md'
import {BsFillChatDotsFill} from 'react-icons/bs'
import {HiOutlineChatBubbleBottomCenterText} from 'react-icons/hi2'
const Contact = () => {
  return (
    <section className="c-wrapper">
        <div className="paddings innerwidth flexCenter c-container">
            {/*left side  */}
            <div className="flexColStart c-left">
                <span className='orangeText'>Our Contact</span>
                <span className='primaryText'>Easy to contact us</span>
                <span className='secondaryText'>We always ready to help by providing the best services believing a good place to live can make your life better</span>
          
          <div className="flexColStart contactModes">
                {/* first row */}
                <div className="flexColStart row">
                    <div className="flexColCenter mode">
                        <div className="flexStart">
                            <div className="flexCenter icon">
                                <MdCall size={25}/>
                            </div>
                            <div className="flexColStart detail">
                                <span className='primaryText'>
                                    call</span><span className='secondaryText'>090  300 79 674</span>
                            </div>
                        </div>
                        <div className="flexCenter button">Call Now</div>
                    </div>

                    {/* second mode */}
                    <div className="flexColCenter mode">
                        <div className="flexStart">
                            <div className="flexCenter icon">
                                <BsFillChatDotsFill size={25}/>
                            </div>
                            <div className="flexColStart detail">
                                <span className='primaryText'>
                                    Chat</span><span className='secondaryText'>090  300 79 674</span>
                            </div>
                        </div>
                        <div className="flexCenter button">Chat Now</div>
                    </div>
                </div>

                {/* third row */}
                <div className="flexColstart row">
                    <div className="flexColCenter mode">
                        <div className="flexStart">
                            <div className="flexCenter icon">
                                <MdCall size={25}/>
                            </div>
                            <div className="flexColStart detail">
                                <span className='primaryText'>
                                    Video call</span><span className='secondaryText'>090  300 79 674</span>
                            </div>
                        </div>
                        <div className="flexCenter button">Video call Now</div>
                    </div>

                          {/* fourth mode */}
                    <div className="flexColCenter mode">
                        <div className="flexStart">
                            <div className="flexCenter icon">
                                <HiOutlineChatBubbleBottomCenterText size={25}/>
                            </div>
                            <div className="flexColStart detail">
                                <span className='primaryText'>
                                    Message</span><span className='secondaryText'>090  300 79 674</span>
                            </div>
                        </div>
                        <div className="flexCenter button">Messsage Now</div>
                    </div>
                   
         
                </div>
          </div>
          
          
          
          
          
            </div>
            {/*right side  */}
            <div className="c-right">
                <div className="image-container">
                    <img src="./contact.jpg" alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact
