import React from 'react'
import { assets } from '../assets/assets'

const footer = () => {
  return (
    <div>
        <div>
            {/*---left section-----*/}
            <div>
                <img src= {assets.logo} alt='' />
                <p>gfdhgfgjgdhgdddddjfjjjjjjjjjjjjj</p>

            </div>
            {/*---center section-----*/}
            <div>
                <p>Company</p>
                <ul>
                    <li>Home</li>
                    <li>about us</li>
                    <li>contact</li>
                    <li>privacy policy</li>
                </ul>

            </div>
            {/*---right section-----*/}
            <div>
                <p>GET IN TOUCH</p>
                <ul>
                    <li>+94-729827098</li>
                    <li>hirun080720002@gmail.com</li>
                </ul>

            </div>
        </div>

        <div>
            <hr />
            <p>Copyright 2024@ HealthSlot - All Right Reserved</p>
        </div>
      
    </div>
  )
}

export default footer
