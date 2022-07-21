import styled from 'styled-components'
import { colors } from '../theme/colors'

const BurgerMenu = ({ toggle, setToggle}) => {
   
  const handleClick = () => {
    setToggle(!toggle)
  }

  return (
    <BtnBurger onClick={handleClick}>
      <Line open={toggle ? 1 : 0} />
      <Line open={toggle ? 1 : 0} />
      <Line open={toggle ? 1 : 0} />
    </BtnBurger>
  )
}

const BtnBurger = styled.div`
  z-index: 100;
  position: fixed;
  top: 32px;
  right: 30px;
  width: 32px;
  height: 30px;
  display: none;
  cursor: pointer;

  @media screen and (max-width: 825px) {
    display: block;
  }
`

const Line = styled.span`
   display: block;
  width: 100%;
  height: 0.15rem;
  border-radius: 5px;
  background: ${colors.almostBlack};
  position: absolute;
  transition: all 0.3s ease-out;

  :first-child {
    top: ${({ open }) => (open ? '12px' : '0')};
    transform: ${({ open }) => (open ? 'rotate(135deg)' : 'rotate(0)')};
  }
  :nth-child(2) {
    top: 8px;
    transform: ${({ open }) => (open ? 'translateX(-20px)' : '')};
    opacity: ${({ open }) => (open ? '0' : '1')};
  }
  :nth-child(3) {
    top: ${({ open }) => (open ? '12px' : '16px')};
    transform: ${({ open }) => (open ? 'rotate(-135deg)' : 'rotate(0)')};
  }
`

export default BurgerMenu
