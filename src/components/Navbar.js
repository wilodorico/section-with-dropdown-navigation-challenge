import styled from 'styled-components'
import { colors } from '../theme/colors'
import Button from '../UI/Button'
import Dropdown from '../UI/Dropdown'
import logoSvg from '../images/logo.svg'
import DropdownMenu from '../UI/DropdownMenu'
import { compagny, features } from '../data/data'

const Navbar = () => {
  return (
    <>
      <NavLeft>
        <LogoLink href='/#' className='nav-logo'>
          <img src={logoSvg} alt='logo snap' />
        </LogoLink>
        <nav className='nav-wrapper'>
          <ul className='nav-list'>
            <Dropdown title='Features' className='nav-item'>
              <DropdownMenu data={features} />
            </Dropdown>

            <Dropdown title='Company' className='nav-item'>
              <DropdownMenu data={compagny} />
            </Dropdown>

            <li className='nav-item'>Careers</li>
            <li className='nav-item'>About</li>
          </ul>
        </nav>
      </NavLeft>
      <NavRight>
        <Button>Login</Button>
        <Button border>Register</Button>
      </NavRight>
    </>
  )
}

const LogoLink = styled.a`
  margin-top: 0.6rem;
  margin-right: 1.5rem;
`

const NavLeft = styled.div`
  display: flex;
  align-items: center;

  .nav-wrapper {
    @media screen and (max-width: 825px) {
      display: none;
    }
  }

  .nav-list {
    display: flex;
  }

  .nav-item {
    margin-left: 2rem;
    font-size: 1rem;
    color: ${colors.mediumGray};
    transition: all 0.2s;
    cursor: pointer;
  }

  .nav-item:hover {
    color: ${colors.almostBlack};
  }

  .nav-item:hover > ul {
    display: block;
  }
`

const NavRight = styled.div`
  display: flex;
  align-items: flex-start;

  @media screen and (max-width: 825px) {
    display: none;
  }
`

export default Navbar
