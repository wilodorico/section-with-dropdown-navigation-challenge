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
   border-radius: 12px;
   padding: 10px 20px;
   font-size: 1rem;
   color: ${colors.mediumGray};
   cursor: pointer;
   transition: 0.2s;

   &:hover {
      color: ${colors.almostBlack};
      border-color: ${colors.almostBlack};
   }
`