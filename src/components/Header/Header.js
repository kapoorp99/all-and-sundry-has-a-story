import React from 'react';
import { HeaderContainer } from './styles';
import useWindowDimensions from '../../customHooks/useWindowDimensions'

const Header = ({ navLink_title1, navLink_title2, navLink_title3, bgColor, textColor }) => {
  const { width } = useWindowDimensions()
  return (
    <HeaderContainer bgColor={bgColor} textColor={textColor}>
      <div className='left'>
        <div className='header__logo__container'>
          <img className='header__logo' src='https://img.icons8.com/ios-filled/50/000000/centralized-network.png' alt='' />
        </div>
      </div>
      <div className='right'>
        {width < 768 ? (
          <div className='header__right__mobile'>
            <img className='header__logo' src='https://img.icons8.com/ios/50/000000/menu-squared-2--v1.png' alt='' />
          </div>
        ) : (
          <>
            <div>
              <h4 className='header__nav__links'>{navLink_title1}</h4>
              <h4 className='header__nav__links'>{navLink_title2}</h4>
              <h4 className='header__nav__links'>{navLink_title3}</h4>
            </div>
            <div>
              <button className='header__btn login'>Login</button>
              <button className='header__btn signup'>Sign up</button>
            </div>
          </>
        )}
      </div>
    </HeaderContainer>
  )
}

export default Header;