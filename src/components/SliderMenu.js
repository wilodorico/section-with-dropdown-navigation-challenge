import React from 'react'
import styled from 'styled-components'
import { colors } from '../theme/colors'
import DropdownMenu from '../UI/Dropdown'

const SliderMenu = ({ toggle }) => {
  return (
    <SliderNav toggle={toggle ? 1 : 0}>
      <ul className='nav-list' toggle={toggle ? 1 : 0}>
        <li className='nav-item'>
          <DropdownMenu title='Features' />
        </li>
        <li className='nav-item'>
          <DropdownMenu title='Company' />
        </li>
        <li className='nav-item'>Careers</li>
        <li className='nav-item'>About</li>
      </ul>
    </SliderNav>
  )
}

const SliderNav = styled.nav`
  z-index: 10;
  background-color: rgba(1, 1, 1, 0.7);
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  right: 0;
  transform: ${({ toggle }) =>
    toggle ? 'translateX(0%)' : 'translateX(100%)'};

  ul {
    position: absolute;
    right: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding-top: 5rem;
    padding-left: 1.5rem;
    height: 100%;
    width: 65vw;
    background: ${colors.almostWhite};
    transition: transform 0.7s cubic-bezier(0.73, 0.11, 0.67, 0.84);
    transform: ${({ toggle }) =>
      toggle ? 'translateX(0%)' : 'translateX(100%)'};
  }

  li {
    width: 100%;
    margin: 1rem 0rem;
    color: ${colors.mediumGray};
    cursor: pointer;
    transition: 0.2s;
  }

  li:hover {
    color: ${colors.almostBlack};
  }

  li div {
    margin: 0;
  }
`

export default SliderMenu
