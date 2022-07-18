import React from 'react'
import styled from 'styled-components'
import logoSvg from "../images/logo.svg"
import { colors } from '../theme/colors'
import Button from '../UI/Button'
import DropdownMenu from '../UI/DropdownMenu'

const Header = () => {
  return (
    <HeaderSection>
      <NavLeft>
         <a href="/#" className='nav-logo'>
            <img src={logoSvg} alt="logo snap" />
         </a>
         <nav>
            <ul className='nav-list'>
               <li className='nav-item'>
                  <DropdownMenu title="Features" />
               </li>
               <li className='nav-item'>
               <DropdownMenu title="Company" />
               </li>
               <li className='nav-item'>
                  Careers
               </li>
               <li className='nav-item'>
                  About
               </li>
            </ul>
         </nav>
      </NavLeft>
      <div className="nav-right">
         <Button>Login</Button>
         <Button border>Register</Button>
      </div>
    </HeaderSection>
  )
}

const HeaderSection = styled.header`
   display: flex;
   justify-content: space-between;
   align-items: flex-start;
   padding: 2rem;
`

const NavLeft = styled.div`
   display: flex;

   .nav-logo {
      margin-right: 2rem;
   }

   .nav-list {
      display: flex;
   }

   .nav-item {
      margin-left: 2rem;
      font-size: 1.1rem;
      color: ${colors.mediumGray};
      transition: all 0.2s;
      cursor: pointer;
   }

   .nav-item:hover {
      color: ${colors.almostBlack};
   }

`
  
  

export default Header