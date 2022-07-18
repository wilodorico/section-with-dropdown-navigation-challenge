import React from 'react'
import styled from 'styled-components'
import { colors } from '../theme/colors'

const DropdownMenu = ({ className, title }) => {
  return (
    <div className={className}>
      {title}
      <svg
        className='icon-svg'
        width='10'
        height='6'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path  fill='none' d='m1 1 4 4 4-4' />
      </svg>
    </div>
  )
}

export default styled(DropdownMenu)`
  stroke: ${colors.mediumGray};
  stroke-width: 1.5;
  margin: 1px 5px;

  &:hover {
    color: ${colors.almostBlack};
    stroke: ${colors.almostBlack};
  }

  .icon-svg {
    margin: 1px 5px;
  }
`
