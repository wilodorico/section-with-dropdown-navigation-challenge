import React from 'react'
import styled from 'styled-components'
import { colors } from '../theme/colors'

const Button = ({ className, children, border }) => {
  return (
    <button className={className} borderOn={border}>{children}</button>
  )
}

export default styled(Button)`
   border: none;
   background: transparent;
   border: ${({border}) => border ? `1px solid ${colors.mediumGray}` : ""};
   border-radius: 0.8rem;
   padding: 0.6rem 1.2rem;
   font-size: 0.9rem;
   font-family: 'Epilogue', sans-serif;
   color: ${colors.mediumGray};
   cursor: pointer;
   transition: 0.2s;

   &:hover {
      color: ${colors.almostBlack};
      border-color: ${colors.almostBlack};
   }
`