import React, { useState } from 'react'
import styled from 'styled-components'
import { colors } from '../theme/colors'

const Dropdown = ({ className, children, title }) => {
  const [isHover, setIsHover] = useState(false)

  const onMouseEnter = () => {
    setIsHover(true)
  }

  const onMouseLeave = () => {
    setIsHover(false)
  }

  return (
    <li
      className={className}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {title}
      {!isHover && (
        <svg
          className='icon-svg'
          width='10'
          height='6'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path fill='none' d='m1 1 4 4 4-4' />
        </svg>
      )}
      {isHover && (
        <svg
          className='icon-svg'
          width='10'
          height='6'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path fill='none' d='m1 5 4-4 4 4' />
        </svg>
      )}
      {children}
    </li>
  )
}

export default styled(Dropdown)`
  position: relative;
  stroke: ${colors.mediumGray};
  stroke-width: 1.5;

  &:hover {
    color: ${colors.almostBlack};
    stroke: ${colors.almostBlack};
  }

  .icon-svg {
    margin: 1px 6px;
  }
`
