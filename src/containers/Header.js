import React, { useState } from 'react'
import styled from 'styled-components'
import BurgerMenu from '../components/BurgerMenu'
import Navbar from '../components/Navbar'
import SliderMenu from '../components/SliderMenu'

const Header = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <HeaderSection>
      <Navbar />
      <BurgerMenu toggle={toggle} setToggle={setToggle} />
      <SliderMenu toggle={toggle} />
    </HeaderSection>
  )
}

const HeaderSection = styled.header`
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2.2rem;
`

export default Header
