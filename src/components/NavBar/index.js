/**
 * Created by vaibhav on 31/3/18
 */
import React from 'react'
import Link from 'gatsby-link'
import NavLogo from './../../img/nav-img.png'

const NavBar = () => {
  return (
    <nav className='navbar is-fixed-top' aria-label='main navigation'>
      <div className='navbar-brand'>
        <Link to='/' className='navbar-item'>
          <img className='nav-image-logo' src={NavLogo} alt='Nav logo image' />
        </Link>
        <button className='button navbar-burger' data-target='navMenu'>
          <span />
          <span />
          <span />
        </button>
      </div>
      <div className='navbar-menu' id='navMenu'>
        <div className='navbar-start'>
          <Link className='navbar-item' to='/pricing'>
                        Pricing
          </Link>
          <Link className='navbar-item' to='/about'>
                        About
          </Link>
          <Link className='navbar-item' to='/blog'>
                        Blog
          </Link>

          <Link className='navbar-item' to='/terms'>
                        Terms
          </Link>
        </div>
        <div className='navbar-end'>
          <div className='navbar-item'>
            <div className='field is-grouped'>
              <p className='control'>
                <Link
                  className='button is-primary is-outlined'
                  to='/contact'>
                                    Contact Us
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
