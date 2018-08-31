/**
 * Created by vaibhav on 31/3/18
 */
import React from 'react'
import config from '../../../meta/config'
import facebook from '../../img/facebook.png'
import instagram from '../../img/instagram.svg'
import internachi from '../../img/internachi.png'
import militarydiscount from '../../img/militarydiscount.jpg'
import landlord from '../../img/militarydiscount.jpg'


const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='content has-text-centered'>
        <div className='columns'>
          <div className='column has-text-centered'>
            <div>
              <p className=''><b>Contact</b></p>
              <p className='heading'>High Mountain Home Inspections Ogden, UT 84404 <br/> <a href='tel:801-699-7485'>801-699-7485</a></p>
            </div>
          </div>
          <div className='column has-text-centered'>
            <div>
            <p className=''><b>Discounts</b></p>
              <p className='heading'> <a href={militarydiscount}>Military Discount Coupon</a> </p>
            </div>
          </div>
          <div className='column has-text-centered'>
            <div>
              <p className='heading'><strong>Investment Property <br/> Disclosure</strong></p>
              <p className='heading'><a href={landlord}>Click to Download</a></p>
            </div>
          </div>
          <div className='column has-text-centered'>
            <div>
              <p className='heading'><strong>CERTIFICATIONS</strong></p>
              <img src={internachi} alt='' className="social-media-icons" />
            </div>
          </div>
          <div className='column has-text-centered'>
            <div>
              <p className='heading'><strong>SOCIAL MEDIA</strong></p>
                <a href='https://www.facebook.com/HighMountainHomeInspections/'>
                  <img src={facebook} alt='' className="social-media-icons" />
                </a>
                <a href='https://www.instagram.com/highmountainhomes/'>
                  <img src={instagram} alt='' className="social-media-icons" />
                </a>
            </div>
          </div>
        </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
