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

            </div>
        </div>
      
    </div>
  )
}

export default footer
