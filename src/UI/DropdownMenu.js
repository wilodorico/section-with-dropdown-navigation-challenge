import React from 'react'
import styled from 'styled-components'
import { colors } from '../theme/colors'

const DropdownMenu = ({ className, data }) => {
  return (
    <ul className={className}>
      {data.map((item, index) => (
        <li key={index}>
          {item.icon && <img src={item.icon} alt={`icon ${item.title}`} />}
          {item.title}
        </li>
      ))}
    </ul>
  )
}

export default styled(DropdownMenu)`
  position: absolute;
  top: 35px;
  right: 5px;
  width: max-content;
  display: none;
  flex-direction: column;
  background: white;
  padding: 1.5rem;
  border-radius: 0.6rem;

  li {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    margin-bottom: 1rem;
    color: ${colors.mediumGray};
    font-size: 0.9rem;

    &:last-child {
      margin-bottom: 0;
    }

    & img {
      margin-right: 0.8rem;
    }
  }
`
